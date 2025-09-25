import React, { Suspense, useEffect, useState } from 'react';
import Loading from '../../Pages/Loading/Loading'
import Slider from '../../Components/Slider/Slider';
import NearlyExpiryItems from '../../Components/NearlyExpiryItems/NearlyExpiryItems';
import ExpiredFood from '../../Components/ExpiredFood/ExpiredFood';
import CountUpSection from '../../Components/CountUpSection/CountUpSection';
import FoodStorageTips from '../../Components/FoodStorageTips/FoodStorageTips';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
// Expired Foods
const fetchExpiredFoods = fetch('https://food-pulse-server.vercel.app/foods/expired-foods')
.then(res => res.json())
// All foods
const fetchAllFoods = fetch('https://food-pulse-server.vercel.app/foods')
.then(res => res.json())
// All notes
const fetchAllNotes = fetch('https://food-pulse-server.vercel.app/notes')
.then(res => res.json())


const Home = () => {
    const [expiringSoon, setExpiringSoon] = useState([]);

    // Load Expire Soon Foods
    useEffect(() => {
        fetch('https://food-pulse-server.vercel.app/foods/expiring-soon').then(res => res.json())
        .then(data => {
            setExpiringSoon(data)
        })
    }, [])

    return (
        <>
            <div>
                <Slider></Slider>
                <div>
                    <div>
                        <div className='bg-[#f4f1ea] lg:p-20 md:px-5 py-10'>
                            <NearlyExpiryItems expiringSoon = {expiringSoon}></NearlyExpiryItems>
                        </div>
                        
                        <div id='expiredFoods'>
                            <Suspense fallback={<Loading></Loading>}>
                                <ExpiredFood fetchExpiredFoods={fetchExpiredFoods}></ExpiredFood>
                            </Suspense>
                        </div>

                        <div className='bg-black lg:p-20 md:px-5 py-10'>
                            <CountUpSection 
                                expiringSoon = {expiringSoon}
                                fetchExpiredFoods={fetchExpiredFoods}
                                fetchAllFoods = {fetchAllFoods}
                                fetchAllNotes={fetchAllNotes}
                            ></CountUpSection>
                        </div>

                        <div id='storageTips' className='bg-[#f4f1ea] lg:py-20 md:px-5 lg:px-0 py-10'>
                            <FoodStorageTips></FoodStorageTips>
                        </div>

                        <div id='howItWork' className='bg-white'>
                            <HowItWorks></HowItWorks>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;