import { AlarmClock } from 'lucide-react';
import FoodCard from '../FoodCard/FoodCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import dataNotFound from '../../assets/notFound.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const NearlyExpiryItems = ({expiringSoon}) => {
    const expiringFood = expiringSoon;

    return (
        <div className='pb-10 max-w-[1500px] mx-auto'>
            <div className='text-center mb-6'>
                <h2 className='flex items-center justify-center gap-2 text-3xl lg:text-5xl font-bold'><AlarmClock size={80} color='#eb0029' /> Nearly Expiring Items</h2>
                <p className='text-secondary font-medium'>Don't let them go to waste!</p>
            </div>

            {/* Slider */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  bg-white py-10 px-4 lg:px-10 lg:p-10 rounded-2xl">
                    {
                    expiringFood.map((food, index) => ( 
                    <motion.div 
                    key={food._id} 
                    initial = {{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: false }}
                    className=''>
                        <FoodCard 
                            food={food}
                        ></FoodCard>
                    </motion.div>
                    ))
                }
                            {
                                expiringFood.length === 0 &&
                                <div className='col-span-12 text-center flex flex-col items-center justify-center pb-10'>
                                    <div>
                                        <Lottie
                                        animationData={dataNotFound}
                                        style={{width: '250px', marginRight: '20px'}}
                                        ></Lottie>
                                    </div>
                                        <h2 className='text-5xl text-gray-600'>
                                            Oops! Nearly Expiring food not found.
                                        </h2>
                                        <p className='mt-4 text-primary font-bold'>
                                        <Link className='underline' to='/fridge'>See All Foods</Link>
                                        </p>
                                </div>
                            }                 
                </div>


            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    expiringFood.map(food => <FoodCard
                        key={food._id} 
                        food={food}
                    ></FoodCard>)
                }
            </div> */}

        </div>
    );
};

export default NearlyExpiryItems;