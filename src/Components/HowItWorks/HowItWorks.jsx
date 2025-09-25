import React from 'react';
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const HowItWorks = () => {
    return (
        <Fade direction='left' cascade>
            <section className="max-w-[1500px] mx-auto bg-white dark:text-gray-800 py-20">
                <div className="container max-w-5xl px-4 py-12 mx-auto" bis_skin_checked="1">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12" bis_skin_checked="1">
                        <div className="col-span-12 sm:col-span-4" bis_skin_checked="1">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary space-y-2" bis_skin_checked="1">
                                <h3 className="text-5xl font-bold">How It Works?</h3>
                                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">Manage your food smarter, not harder.</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 space-y-6 sm:col-span-8" bis_skin_checked="1">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-secondary" bis_skin_checked="1">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary" bis_skin_checked="1">
                                    <h3 className="text-xl font-semibold tracking-wide"> Step 1 : Add Your Food</h3>
                                    <p className="mt-3"> Simply enter food name, category, quantity, and expiry date. Snap a photo or choose from preloaded icons for easy recognition.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary" bis_skin_checked="1">
                                    <h3 className="text-xl font-semibold tracking-wide">Step 2 : Get Smart Reminders</h3>
                                    <p className="mt-3">Receive alerts before your food expires. Customize notification times and stay ahead of spoilage.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary" bis_skin_checked="1">
                                    <h3 className="text-xl font-semibold tracking-wide">Step 3 : Organize Like a Pro</h3>
                                    <p className="mt-3">Organize items by type, shelf, or storage zone. View everything at a glance in your personal food dashboard.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary" bis_skin_checked="1">
                                    <h3 className="text-xl font-semibold tracking-wide">Step 4 : Reduce Waste</h3>
                                    <p className="mt-3">Get suggestions on what to eat or cook based on what’s about to expire. Waste less, save more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
};

export default HowItWorks;