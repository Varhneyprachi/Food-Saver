import React from 'react';
import loader from '../../assets/loader.json';
import Lottie from 'lottie-react';

const Loading = () => {
    return (
        <div className='min-h-[calc(100vh-382px)] flex items-center justify-center'>
            <div className='text-center'>
                <Lottie animationData={loader} 
                loop={true}
                width={30}
                style={{
                    width: '150px'
                }}
                ></Lottie>
                <p className='text-primary font-medium text-xl'>Loading......</p>
            </div>
        </div>
    );
};

export default Loading;