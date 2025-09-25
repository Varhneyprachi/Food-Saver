import React, { useEffect, useState } from 'react';

const ExpirationCountdown = ({expiryDate}) => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(()=>{
        const timer = setInterval( () => {
            const now = new Date();
            const expiry = new Date(expiryDate);
            expiry.setHours(23, 59, 59, 999);

            const distance = expiry-now;

            if (distance <= 0) {
                clearInterval(timer);
                setTimeLeft(null);
            }else{
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance / (1000 * 60 * 60))% 24 );
                const minutes = Math.floor((distance / (1000 * 60)) % 60);
                const seconds = Math.floor((distance / 1000) % 60 );

                setTimeLeft({days, hours, minutes, seconds});
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [expiryDate]);

    if (timeLeft === null) {
        return(
            <div>
                <h2 className='text-5xl font-bold mb-3 text-red-500'>Expired</h2>
                {/* For TSX uncomment the commented types below */}
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-red-500">
                    <span className="countdown font-mono text-5xl">
                    <span style={{"--value":"00"} /* as React.CSSProperties */ } aria-live="polite" aria-label="00"></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-red-500">
                    <span className="countdown font-mono text-5xl">
                    <span style={{"--value": "00" } /* as React.CSSProperties */ } aria-live="polite" aria-label={"00"}>10</span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-red-500">
                    <span className="countdown font-mono text-5xl">
                    <span style={{"--value":"00"} /* as React.CSSProperties */ } aria-live="polite" aria-label="00"></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-red-500">
                    <span className="countdown font-mono text-5xl">
                    <span style={{"--value": "00"} /* as React.CSSProperties */ } 
                    className='text-red-500'
                    aria-live="polite" aria-label="00"></span>
                    </span>
                    sec
                </div>
                </div>
            </div>
        )
    }

    return (
        <>

            <div>
                <h2 className='text-5xl font-bold mb-3 text-red-500'>Time Left : </h2>
                {/* For TSX uncomment the commented types below */}
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                    <h2 style={{"--value":timeLeft.days} /* as React.CSSProperties */ } aria-live="polite" aria-label={timeLeft.days}></h2>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                    <h2 style={{"--value":timeLeft.hours} /* as React.CSSProperties */ } aria-live="polite" aria-label={timeLeft.hours}>10</h2>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                    <h2 style={{"--value":timeLeft.minutes} /* as React.CSSProperties */ } aria-live="polite" aria-label={timeLeft.minutes}></h2>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                    <h2 style={{"--value":timeLeft.seconds} /* as React.CSSProperties */ } aria-live="polite" aria-label={timeLeft.seconds}>{timeLeft.seconds}</h2>
                    </span>
                    sec
                </div>
                </div>
            </div>

        </>
    );
};

export default ExpirationCountdown;