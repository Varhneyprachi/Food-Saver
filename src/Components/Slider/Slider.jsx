import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Typewriter } from 'react-simple-typewriter'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import { Link } from 'lucide-react';
import { motion } from 'framer-motion';

const Slider = () => {
    return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide-1 */}
        <SwiperSlide>
        <motion.div
          className="flex items-center justify-center relative w-full h-full bg-cover object-cover bg-center"
          style={{ backgroundImage: `url(${slide1})`}}
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{ scale: 1.1, x: 15, y: 15 }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        >
            {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000] opacity-30"></div>

        {/* Content */}
        <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}        
        className="relative z-10 text-white p-10 space-y-7">
            <motion.h2 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-8xl text-shadow-lg/80 text-shadow-black font-bold">Build Connections, One Meal at a Time</motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}            
            className='text-shadow-lg/80 text-shadow-black'>Discover food lovers near you. Share, manage, and <br /> track your fridge like never before.</motion.p>

            {/* Type Writer */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}             
            className='space-y-4'>
              <h2 className='text-4xl md:text-4xl text-shadow-lg/80 text-shadow-black font-bold'>Find your food in → 
              </h2>
                <h4 className='text-xl md:text-2xl text-shadow-lg/80 text-shadow-black font-bold text-primary'>
                 <Typewriter 
                    words={["Dairy", "Vegetables", "Snacks", "Meat"]}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                 />
                </h4>              
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}             
            >
              <a href='/fridge'>
                <button className='btn btn-primary px-10 py-6 text-xl'>Discover Foods <BsArrowRightSquareFill /></button>
              </a>
            </motion.div>
        </motion.div>

        </motion.div>
        </SwiperSlide>

        
        {/* Slide-2 */}
        <SwiperSlide>
        <motion.div
          className="flex items-center justify-center relative w-full h-full bg-cover object-cover bg-center"
          style={{ backgroundImage: `url(${slide2})`}}
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{ scale: 1.1, x: 15, y: 15 }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        >
            {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000] opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-white p-10 space-y-4">
            <h2 className="text-4xl md:text-8xl text-shadow-lg/80 text-shadow-black font-bold">Say Goodbye to Wasted Food</h2>
            <p className='text-shadow-lg/80 text-shadow-black'>Get timely reminders before your <br /> groceries expire.</p>

            {/* Type Writer */}
            <div className='space-y-4'>
              <h2 className='text-4xl md:text-4xl text-shadow-lg/80 text-shadow-black font-bold'>Stay ahead with → 
              </h2>
                <h4 className='text-xl md:text-2xl text-shadow-lg/80 text-shadow-black font-bold text-primary'>
                 <Typewriter 
                    words={["Smart Notifications", "Live Expiry Countdown", "Custom Notes"]}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                 />
                </h4>              
            </div>
            <div className='mt-5'>
              <a href='#expiredFoods'>
                <button className='btn btn-primary px-10 py-6 text-xl'>Track Expiry <BsArrowRightSquareFill /></button>
              </a>
            </div>

        </div>

        </motion.div>
        </SwiperSlide>

        {/* Slide-3 */}
        <SwiperSlide>
        <motion.div
          className="flex items-center justify-center relative w-full h-full bg-cover object-cover bg-center"
          style={{ backgroundImage: `url(${slide3})`}}
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{ scale: 1.1, x: 15, y: 15 }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        >
            {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000] opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-white p-10 space-y-4">
            <h2 className="text-4xl md:text-8xl text-shadow-lg/80 text-shadow-black font-bold">Your Smart Fridge Assistant</h2>
            <p className='text-shadow-lg/80 text-shadow-black'>Categorize, monitor, and manage all your <br /> food in one place.</p>

            {/* Type Writer */}
            <div className='space-y-6'>
              <h2 className='text-4xl md:text-4xl text-shadow-lg/80 text-shadow-black font-bold'>Organize by →
              </h2>
                <h4 className='text-xl md:text-2xl text-shadow-lg/80 text-shadow-black font-bold text-primary'>
                 <Typewriter 
                    words={["Expiry Date", "Category", "Quantity"]}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                 />
                </h4>              
            </div>
            <div className=''>
              <a href='#storageTips'>
                <button className='btn btn-primary px-10 py-6 text-xl'>Storage Tips <BsArrowRightSquareFill /></button>
              </a>
            </div>

        </div>
        
        </motion.div>
        </SwiperSlide>

        {/* Slide-4 */}
        <SwiperSlide>
        <motion.div
          className="flex items-center justify-center relative w-full h-full bg-cover object-cover bg-center"
          style={{ backgroundImage: `url(${slide4})`}}
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{ scale: 1.1, x: 15, y: 15 }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        >
            {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000] opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-white p-10 space-y-4">
            <h2 className="text-4xl md:text-8xl text-shadow-lg/80 text-shadow-black font-bold">Leave a Note, Never Forget</h2>
            <p className='text-shadow-lg/80 text-shadow-black'> Add reminders, ideas, or storage <br /> tips to each food item.</p>

            {/* Type Writer */}
            <div className='space-y-4'>
              <h2 className='text-4xl md:text-4xl text-shadow-lg/80 text-shadow-black font-bold'>Write your note about → 
              </h2>
                <h4 className='text-xl md:text-2xl text-shadow-lg/80 text-shadow-black font-bold text-primary'>
                 <Typewriter 
                    words={["Chicken Breast", "Greek Yogurt", "Carrots", "Chocolate"]}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                 />
                </h4>              
            </div>
            <div>
              <a href='#howItWork'>
                <button className='btn btn-primary px-10 py-6 text-xl'>How it Works <BsArrowRightSquareFill /></button>
              </a>
            </div>
        </div>

        </motion.div>
        </SwiperSlide>

      </Swiper>
    </>
    );
};

export default Slider;