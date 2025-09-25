import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from '../../Components/FoodCard/FoodCard';
import dataNotFound from '../../assets/notFound.json'
import Lottie from 'lottie-react';
import AuthContext from '../../Context/AuthContext';
const Fridge = () => {
    const {user} = useContext(AuthContext);
    const data = useLoaderData();
    
    const [filterValue, setFilterValue] = useState('');
    const [sortValue, setSortValue] = useState('');
    
    const [loadMore, setLoadMore] = useState(false);
    const [foods, setFoods] = useState(data.slice(0,9));

    // Load more functionality
    useEffect(() => {
        if (loadMore) {
            setFoods(data)
        }else{
            setFoods(data.slice(0, 9))
            window.scrollTo(100, 0)
        }
    }, [data, loadMore])

    // Filter by category
    useEffect(() => {
        if (filterValue !== "") {            
            fetch(`https://food-pulse-server.vercel.app/foods?category=${filterValue}`, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setFoods(data)
            })
        }
        else{
            setFoods(data.slice(0, 9));
        }
    }, [filterValue, data, user?.accessToken]);

    // Filter By Search
    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;

        // Send search value to db
        if (search !== "") {            
            fetch(`https://food-pulse-server.vercel.app/foods?search=${search}`, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setFoods(data)
            })
        }
        else{
            setFoods(data.slice(0, 9));
        }
        
    }
    
    // Sort by status
    useEffect(() => {
        // Nearly Expired
        if (sortValue === 'Nearly Expired') {
            fetch('https://food-pulse-server.vercel.app/foods/expiring-soon').then(res => res.json())
            .then(data => {
                setFoods(data)
            })
        }
        // Expired
        if (sortValue === 'Expired') {
            fetch('https://food-pulse-server.vercel.app/foods/expired-foods')
            .then(res => res.json())   
            .then(data => {
                setFoods(data)
            })         
        }
        // Fresh
        if (sortValue === 'Fresh') {
            const freshFood = data.filter(food => new Date(food.expiryDate).setHours(0,0,0,0) >= new Date().setHours(0,0,0,0));
            setFoods(freshFood)
        }
        if (sortValue === '') {
            setFoods(data)
        }
    }, [sortValue, data])    

    
    return (
        <div className='bg-[#f4f1ea] pb-20 pt-4 px-2'>
            <div className='max-w-[1500px] mx-auto'>

                <div className='bg-[#151515] p-5 rounded-xl'>
                    <h2 className='text-4xl md:text-6xl font-extrabold text-center text-primary'>Fridge Inventory</h2>
                    <div className='divider divider-primary w-56 mx-auto'></div>
                    {/* sort Section */}
                    <div className='grid grid-cols-12 gap-6 py-4 items-center'>
                        <div className='col-span-6 lg:col-span-4 order-3 lg:order-none flex justify-end lg:justify-start'>
                                {/* sort by status */}
                                <div className="space-y-1 text-sm" bis_skin_checked="1">
                                    <select
                                    onChange={(e) => setSortValue(e.target.value)}
                                    name='category'
                                    defaultValue="Select a category" 
                                    required
                                    className="select rounded-md border-2 border-primary text-accent"
                                    >
                                        <option value=''>Sort by Status</option>
                                        <option>Nearly Expired</option>
                                        <option>Expired</option>
                                        <option>Fresh</option>
                                    </select>

                                </div>                              
                        </div>
                        {/* Search */}
                        <div className='col-span-12 order-1 lg:order-none lg:col-span-4'>
                            <form onSubmit={handleSearch} className='flex gap-0'>
                                <label className="w-full flex items-center gap-1 pl-2 bg-white rounded-r-none rounded-l">
                                <svg className="h-[1.3em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                    >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                    <input 
                                    className='w-full focus:outline-0'
                                    name='search'
                                    type="search" placeholder="Search" />
                                </label>
                                    <button className='btn btn-primary rounded-l-none text-white text-lg'>Search</button>
                            </form>
                        </div>
                        {/* Category */}
                        <div className='order-2 lg:order-none col-span-6 lg:col-span-4 flex lg:justify-end'>
                                {/* Category */}
                                <div className="space-y-1 text-sm" bis_skin_checked="1">
                                    <select
                                    onChange={(e) => setFilterValue(e.target.value)}
                                    name='category'
                                    defaultValue="Select a category" 
                                    required
                                    className="select rounded-md border-2 border-primary text-accent"
                                    >
                                        <option value=''>Filter by category</option>
                                        <option>Dairy</option>
                                        <option>Meat</option>
                                        <option>Vegetables</option>
                                        <option>Snacks</option>
                                    </select>

                                </div>                           
                        </div>
                    </div>
                </div>

                <div className='bg-white md:p-6 lg:p-10 rounded-3xl mb-10 mt-5'>
                    <div className='rounded-3xl bg-[#f4f1ea] p-5 lg:p-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                [...foods]
                                .sort((a,b) => new Date(b.expiryDate) - new Date(a.expiryDate) )
                                .map(food => <FoodCard
                                key={food._id}
                                food = {food}
                                ></FoodCard>)
                            }
                        </div>

                            {
                                foods.length === 0 &&
                                <div className='text-center flex flex-col items-center justify-center pb-10'>
                                    <div>
                                        <Lottie
                                        animationData={dataNotFound}
                                        style={{width: '250px', marginRight: '20px'}}
                                        ></Lottie>
                                    </div>
                                        <h2 className='text-5xl text-gray-600'>
                                            Oops! No food found.
                                        </h2>
                                        <p className='mt-4 text-primary font-bold'>
                                            Try searching with a different name or <br /> check your connection.
                                        </p>
                                </div>
                            }                        
                        
                        {
                            foods.length >= 9 &&
                            <div className='text-center mt-10'>
                                <button onClick={() => setLoadMore(!loadMore)}  className='btn btn-primary text-xl px-8'>
                                {
                                    loadMore? 'Shoe Less...':
                                    'Load More...'
                                }
                                </button>
                            </div>                        
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Fridge;