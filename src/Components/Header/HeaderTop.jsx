import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/AuthContext';
import { AlarmClock, Handshake } from 'lucide-react';
import { format } from 'date-fns';

const HeaderTop = () => {
    const {user} = useContext(AuthContext);
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

    const today = format(new Date(), 'eeee, MMMM d, yyyy');
    
    return (
        <div className='bg-primary py-2 hidden md:block'>
            <div className='max-w-[1500px] mx-auto flex justify-between md:px-5 lg:p-0'>
                <div>
                    <h2 className='text-white flex items-center gap-2'>Hi, {user && user?.displayName } <Handshake size={22} /> Welcome to food Saver</h2>
                </div>
                <div className='text-white flex items-center gap-2'>
                    <AlarmClock />  
                    <h2 className='uppercase'>
                        {formattedTime}</h2>                  
                    <h2 className=''>
                        - {today}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;