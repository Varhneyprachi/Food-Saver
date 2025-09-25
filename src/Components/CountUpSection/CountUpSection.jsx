import { AlarmClock, ClockAlert, LayoutList, ScrollText } from 'lucide-react';
import React, { use } from 'react';
import { Slide } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountUpSection = ({expiringSoon, fetchExpiredFoods, fetchAllFoods, fetchAllNotes}) => {
    const allFoods = use(fetchAllFoods);
    const allNotes = use(fetchAllNotes);
    const expiredFoods = use(fetchExpiredFoods);
    const { ref, inView } = useInView({ triggerOnce: false });
    return (
        <div className='py-10 max-w-[1500px] mx-auto'>
            <div className='text-center space-y-3 mb-4'>
                <h2 className='text-primary text-3xl md:text-6xl font-bold'>Track Your Food Status at a Glance</h2>
                <p className='text-lg text-accent'>Track Your Food Status at a Glance</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-10 px-6 py-10'>

                {/* Card-1 */}
                <Slide direction='left' cascade damping={0.1}>
                    <div className="card bg-[#21242b] border-b-10  shadow-[5px_5px_rgba(235,_0,_41,_0.4),_10px_10px_rgba(235,_0,_41,_0.3),_15px_15px_rgba(235,_0,_41,_0.2),_20px_20px_rgba(235,_0,_41,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
                        <figure className="px-10 pt-5">
                            <AlarmClock size={80} color='#Eb0029' />
                        </figure>
                        <div ref={ref} className="card-body items-center text-center">
                            <h2 className="card-title text-white text-6xl">
                                {
                                    inView ? 
                                    <CountUp end={expiringSoon.length} duration={20} />
                                    : 0
                                }
                            </h2>
                            <h2 className='text-gray-300 text-lg'>Nearly Expired Items</h2>
                        </div>

                    </div>
                </Slide>

                {/* Card-2 */}
                <Slide direction='up' cascade damping={0.1}>
                    <div className="card bg-[#21242b] border-b-10 shadow-[5px_5px_rgba(235,_0,_41,_0.4),_10px_10px_rgba(235,_0,_41,_0.3),_15px_15px_rgba(235,_0,_41,_0.2),_20px_20px_rgba(235,_0,_41,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
                        <figure className="px-10 pt-5">
                            <ClockAlert size={80} color='#Eb0029' />
                        </figure>
                        <div ref={ref} className="card-body items-center text-center">
                            <h2 className="card-title text-white text-6xl">
                                {
                                    inView? 
                                    <CountUp end={expiredFoods.length} duration={20} />
                                    : 0
                                }
                            </h2>
                            <h2 className='text-gray-300 text-lg'>Expired Items</h2>
                        </div>
                    </div>
                </Slide>                

                {/* Card-3 */}
                <Slide direction='up' cascade damping={0.1}>
                    <div className="card bg-[#21242b] border-b-10  shadow-[5px_5px_rgba(235,_0,_41,_0.4),_10px_10px_rgba(235,_0,_41,_0.3),_15px_15px_rgba(235,_0,_41,_0.2),_20px_20px_rgba(235,_0,_41,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
                        <figure className="px-10 pt-5">
                            
                            <ScrollText size={80} color='#Eb0029' />
                        </figure>
                        <div ref={ref} className="card-body items-center text-center">
                            <h2 className="card-title text-white text-6xl">
                                {
                                    inView ? 
                                    <CountUp end={allNotes.length} duration={20} />
                                    : 0
                                }
                            </h2>
                            <h2 className='text-gray-300 text-lg'>Total Notes Added</h2>
                        </div>

                    </div>
                </Slide>                

                {/* Card-4 */}
                <Slide direction='right' cascade damping={0.1}>
                    <div className="card bg-[#21242b] border-b-10 shadow-[5px_5px_rgba(235,_0,_41,_0.4),_10px_10px_rgba(235,_0,_41,_0.3),_15px_15px_rgba(235,_0,_41,_0.2),_20px_20px_rgba(235,_0,_41,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
                        <figure className="px-10 pt-5">
                            <LayoutList size={80} color='#Eb0029' />
                        </figure>
                        <div ref={ref} className="card-body items-center text-center">
                            <h2 className="card-title text-white text-6xl">
                                {
                                    inView ? 
                                    <CountUp end={allFoods.length} duration={20} />
                                    : 0
                                }                            
                            </h2>
                            <h2 className='text-gray-300 text-lg'>Total Items Tracked</h2>
                        </div>

                    </div>
                </Slide>                


            </div>
        </div>
    );
};

export default CountUpSection;