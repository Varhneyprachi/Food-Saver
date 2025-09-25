import React from 'react';
import errorImg from '../../assets/error.png'
import { Link, useLocation } from 'react-router';
import { TiArrowRightOutline } from 'react-icons/ti';

const ErrorPage = () => {
    const location = useLocation();  
    return (
        <div className='bg-[#f4f1ea] w-full h-[100vh] flex items-center  justify-center px-6'>
            <div className='text-center space-y-12'>
                <img src={errorImg} alt="" />
                <p className='text-2xl font-medium '>Home 
                    <span className='text-2xl font-medium text-primary ml-3'>
                        {location.pathname}
                    </span>
                </p>
                <h2 className='text-3xl font-extrabold'>Sorry we cant find a page you’re looking for</h2>
                <Link to='/'>
                    <button className='btn btn-primary rounded-none py-6 px-8'>Back To Home Page
                    <TiArrowRightOutline size={25}></TiArrowRightOutline>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;