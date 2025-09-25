import { CalendarX2, ClockAlert, HandPlatter, Mail, ScrollText } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { BiCategory } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router';
import AuthContext from '../../Context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import Note from '../../Components/Note/Note';
import ExpirationCountdown from '../../Components/CountdownTimer/ExpirationCountdown';
import dataNotFound from '../../assets/notFound.json'
import Lottie from 'lottie-react';

const FoodDetails = () => {
    const {user} = useContext(AuthContext);
    const [data, setData] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios(`https://food-pulse-server.vercel.app/foods/${id}`, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`
            }
        })
        .then(res => {
            setData(res.data)
        })
        .catch(error => {
            toast.error(error.message)
            navigate('/not-found')
        })
    }, [id, user?.accessToken, navigate]);
    
    // const data = useLoaderData();
    const [notes, setNotes] = useState([]);
    const {_id, quantity, foodTitle, foodImage, expiryDate, category, description, addedDate, email} = data;
    
    const today = new Date();
    today.setHours(0,0,0,0);
    const expDate = new Date(expiryDate);
    expDate.setHours(0,0,0,0);
    const isExpired = expDate < today;

    const handleAddNote = (e, id) => {
        e.preventDefault();
        const noteText = e.target.noteText.value;
        const note = {
            foodId: id,
            authorName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            text: noteText,
            postedDate: new Date().toDateString(),
    };

    // Send Note to DB
        axios.post('https://food-pulse-server.vercel.app/notes', note, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`
            }
        })
        .then(res => {
            if (res.data.insertedId) {
                toast.success('Note has been saved!')
                setNotes([...notes, note])
            }
        })
        .catch(error => {
            toast.error(error.message)
        })
        e.target.reset();
    }

    // Load Note
    useEffect(()=>{
        fetch(`https://food-pulse-server.vercel.app/notes/${_id}`, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setNotes(data)
        })
    },[_id, user?.accessToken])
    
    return (
        <div className='bg-[#f4f1ea] pb-20 pt-4 px-2'>
            <div className='max-w-[1500px] mx-auto'>

                <div className='bg-[#151515] p-5 rounded-xl'>
                    <h2 className='text-4xl md:text-6xl font-extrabold text-center text-primary uppercase'>Food Details</h2>
                    <div className='divider divider-primary w-56 mx-auto'></div>
                </div>

                <div className='bg-white p-4 text-center my-6 rounded-2xl shadow-[0px_10px_1px_rgba(235,_0,_41,_1),_0_10px_20px_rgba(235,_0,_41,_1)]'>
                    <ExpirationCountdown expiryDate={expiryDate}></ExpirationCountdown>
                </div>

                <div className='bg-white p-4 md:p-6 lg:p-10 mt-5 rounded-2xl'>
                    <div className='max-w-[1120px] mx-auto'>
                        <div className='grid lg:grid-cols-2 gap-10'>
                            <div className='w-full md:h-[400px] bg-[#f4f1ea] p-4 md:p-10 rounded-2xl'>
                                <img className='w-full h-full rounded-2xl object-cover' src={foodImage} alt="" />
                            </div>
                            <div className='relative pb-5'>
                                <h2 className='text-5xl font-bold'>{foodTitle}</h2>

                                {/* Start Date */}
                                <p className='flex items-center gap-2 text-gray-500 font-medium'>
                                        <MdDateRange size={25} color='#FF5722'> </MdDateRange>
                                    <span className='text-xl font-bold text-secondary'>Added Date : </span>
                                {addedDate && addedDate.split('T')[0]}</p>
                                <div className='divider'></div>
                                <div className='space-y-3 mt-5'>
                                    <div>
                                        <p className='text-accent'>Track your food item easily. View details, expiry countdown, and leave personal notes. Stay fresh, reduce waste, and manage your kitchen smarter with Food Saver.</p>
                                    </div>                                    

                                    <div className='flex items-center gap-1'>
                                        <BiCategory size={22} color='red'></BiCategory>
                                        <p className='font-medium text-lg text-accent'>Category : {category}</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <HandPlatter color='red' />
                                        <p className='font-medium text-lg text-accent'>Quantity : {quantity}</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                       <CalendarX2 color='red' />
                                        <p className='font-medium text-lg text-accent'>Expiry Date : {expiryDate &&  expiryDate.split('T')[0]}</p>
                                    </div>
                                    <div className='divider'></div>
                                    <div className='flex items-center gap-1 -mt-3'>
                                       <Mail color='red' />
                                        <p className='font-medium text-lg text-accent'>Author Email : {email}</p>
                                    </div>
                                </div>
                                {/* Badge */}
                                {
                                    isExpired && 
                                    <div className="absolute right-0 top-0 badge bg-red-500 text-white">
                                        <ClockAlert size={18} />
                                        Expired
                                    </div>
                                }
                            </div>
                        </div>

                        <div className='mt-6 pb-10'>
                            <h2 className='text-5xl border-b-2 border-gray-300 pb-4 mb-4 font-bold text-primary'>Description</h2>
                            <p className='text-gray-500 font-medium'>{description}</p>
                        </div>
                        <div className='divider'></div>

                        {/* Notes */}
                        <div className='my-10'>
                            <h2 className='text-4xl text-primary font-bold mb-2 flex items-center gap-2'><ScrollText size={50} /> Notes:</h2>
                            <div className='divider'></div>
                            {
                                notes.length === 0 &&
                                <div className='text-center flex flex-col items-center justify-center pb-10'>
                                    <div>
                                        <Lottie
                                        animationData={dataNotFound}
                                        style={{width: '200px', marginRight: '20px'}}
                                        ></Lottie>
                                    </div>
                                        <h2 className='text-5xl text-gray-600'>
                                            Oops! No note found.
                                        </h2>
                                        <p className='mt-4 text-primary font-bold'>
                                            <a href="#note" className='underline'>
                                                Add a note
                                            </a>
                                        </p>
                                </div>
                            } 
                            <div className='flex flex-col gap-6'>
                                {
                                    notes.map((noteData, index) => <Note
                                        key={index}
                                        noteData={noteData}
                                    ></Note>)
                                }
                            </div>
                        </div>
                        <div className='divider'></div>
                        
                        {/* Note Form */}
                        <div id='note' className='my-10'>
                            <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 bg-[#f4f1ea] dark:text-gray-800" bis_skin_checked="1">
                                <div className="flex flex-col items-center w-full" bis_skin_checked="1">
                                    <h2 className="flex items-center gap-1 text-4xl font-semibold text-center text-primary">
                                        <ScrollText size={50} />
                                        Add A Note</h2>
                                    <form onSubmit={(e) => handleAddNote(e,_id)} className="flex flex-col w-full mt-3" bis_skin_checked="1">
                                        <textarea rows="3" placeholder="Write A Note..." 
                                        name='noteText'
                                        required
                                        className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"></textarea>

                                        {
                                            user.email === email ?
                                            <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 bg-secondary">Add Note</button> :
                                            <button type="submit" style={{cursor: 'not-allowed'}} className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 bg-gray-400 " disabled={true}>Add Note</button>
                                        }
                                        {
                                            user.email !== email && <p className='text-red-500'>⚠️ Only the person who added this food can add a note.</p>
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default FoodDetails;