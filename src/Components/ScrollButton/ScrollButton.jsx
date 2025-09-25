import { CircleArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ScrollButton = () => {
    const [btnVisible, setBtnVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setBtnVisible(true)
            }else{
                setBtnVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [])

    const goToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
            <>
            {
                btnVisible &&
                <button className="fixed bottom-5 right-8 z-50 p-2 md:p-3 rounded bg-primary text-white shadow-lg hover:bg-secondary transition-all duration-300" onClick={goToTop}>
                    <CircleArrowUp size={30}/>
                </button>
            }
            </>
    );
};

export default ScrollButton;