import { CalendarDays, ClockAlert, HandPlatter, MoveRight } from 'lucide-react';
import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { MdOutlineFastfood } from 'react-icons/md';
import { Link } from 'react-router';

const FoodCard = ({food}) => {
    const {_id, quantity, foodTitle, foodImage, expiryDate, category} = food;
    const today = new Date();
    today.setHours(0,0,0,0);
    const expDate = new Date(expiryDate);
    expDate.setHours(0,0,0,0);

    const isExpired = expDate < today;

    return (
        <div className='mt-10'>
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md shadow-gray-300">
            <div className="relative mx-4 h-[250px] -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-secondary to-primary">
            <img className='w-full h-full object-cover' src={foodImage} alt="food image" />
            </div>
            <div className="p-6 relative">
            {/* Badge */}
            {
                isExpired ? 
                <div className="absolute right-5 top-3 badge bg-red-500 text-white">
                    <ClockAlert size={18} />
                    Expired
                </div>                
                :
                <div className="absolute right-5 top-3 badge bg-blue-950 text-white">
                    <CalendarDays size={18} color='white' />
                    Exp: {expiryDate.split('T')[0]}
                </div>

            }

                <h2 className="mb-2 block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {foodTitle}
                </h2>
                <div className='space-y-3'>
                    <div className='flex items-center gap-1'>
                        <BiCategory size={22} color='red'></BiCategory>
                        <p className='font-medium text-lg text-accent'>Category : {category}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <HandPlatter color='red' />
                        <p className='font-medium text-lg text-accent'>Quantity : {quantity}</p>
                    </div>
                </div>
            </div>
            <div className="p-6 pt-0">
                <Link to={`/foods/${_id}`}>
                    <button onClick={ () => window.scrollTo(1,0)} data-ripple-light="true" type="button" className="btn btn-primary w-full text-lg">
                    See Details
                    <MoveRight />
                    </button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default FoodCard;