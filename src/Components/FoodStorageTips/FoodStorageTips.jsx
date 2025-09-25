import { AlarmClock, LeafyGreen, Lightbulb, Link, NotepadText } from 'lucide-react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { MdOutlineDoNotTouch, MdOutlineTipsAndUpdates }from 'react-icons/md';
import { GiCampCookingPot, GiFruitBowl } from "react-icons/gi";
import { BiSolidCheese } from 'react-icons/bi';
import { IoFishSharp } from "react-icons/io5";
import { RiBreadFill } from "react-icons/ri";
import { Fade } from 'react-awesome-reveal';


const FoodStorageTips = () => {
    return (
        <div className='max-w-[1500px] mx-auto pb-10'>
            <div className='text-center mb-6'>
                <h2 className='flex gap-2 items-center justify-center text-3xl lg:text-5xl font-bold'> <MdOutlineTipsAndUpdates size={70} color='#eb0029'></MdOutlineTipsAndUpdates> Food Storage Tips</h2>
                <p className='text-secondary font-medium'>Smart ways to store your food & br keep it fresh longer!</p>
            </div>

                <div className=" max-w-[1400px] mx-auto bg-white py-10 px-5 lg:p-10 rounded-2xl">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

                    {/* Card-1 */}
                    <Fade direction='left' cascade>
                        <div>
                            <div className="card card-dash border-2 border-gray-100 bg-base-100 shadow-sm">
                                <div className="card-body space-y-2">
                                    <h2 className="card-title text-3xl font-bold">
                                    <LeafyGreen size={50} color='#Eb0029'></LeafyGreen>    
                                    Vegetables - Leafy Greens</h2>
                                    <p className='flex items-center gap-2'><span className='text-lg font-bold flex items-center'><NotepadText color='#Eb0029' /> Tips:</span>Store in a paper towel inside an airtight container in the fridge.</p>
                                    <p className='flex items-center gap-2'><span className='text-lg font-bold flex items-center'><Lightbulb size={25} color='#eb0029' /> Bonus:</span>Avoid washing before storing — moisture causes spoilage.</p>
                                    <div className="card-actions justify-end">
                                        <button className='flex items-center gap-2 text-lg font-bold'>
                                            Read More Tips
                                            <FaArrowRight size={20} color='#Eb0029'></FaArrowRight>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>


                    {/* Card-2 */}
                    <Fade direction='right' cascade>                        
                        <div>
                            <div className="card card-dash border-2 border-gray-100 bg-base-100 shadow-sm">
                                <div className="card-body space-y-2">
                                    <h2 className="card-title text-3xl font-bold">
                                    <GiFruitBowl size={50} color='#eb0029' />   
                                Fruits - Berries</h2>
                                    <p className='flex items-center gap-2'><span className='text-lg font-bold flex items-center'><NotepadText color='#Eb0029' /> Tips:</span>Keep in a single layer in the fridge and only wash before eating.</p>
                                    <p className='flex items-center gap-2'><span className='text-lg font-bold flex items-center'>
                                        <MdOutlineDoNotTouch size={25} color='#eb0029'></MdOutlineDoNotTouch>
                                        Avoid:</span>Storing in air-tight sealed containers immediately — promotes mold.</p>
                                    <div className="card-actions justify-end">
                                        <button className='flex items-center gap-2 text-lg font-bold'>
                                            Read More Tips
                                            <FaArrowRight size={20} color='#Eb0029'></FaArrowRight>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>


                    {/* Card-3 */}
                    <Fade direction='left' cascade>                        
                        <div>
                            <div className="card card-dash border-2 border-gray-100 bg-base-100 shadow-sm">
                                <div className="card-body space-y-2">
                                    <h2 className="card-title text-3xl font-bold">
                                    <BiSolidCheese size={50} color='#Eb0029'></BiSolidCheese>    
                                    Dairy - Cheese</h2>
                                    <p className='flex items-center gap-2'><span className='text-lg font-bold flex items-center'><NotepadText color='#Eb0029' /> Tips:</span>Wrap in wax paper or parchment paper before putting in a plastic bag.</p>
                                    <p className='flex items-center gap-2'><span className='text-lg font-bold flex items-center'><Lightbulb size={25} color='#eb0029' /> Bonus:</span>Don’t freeze soft cheeses — it ruins the texture.</p>
                                    <div className="card-actions justify-end">
                                        <button className='flex items-center gap-2 text-lg font-bold'>
                                            Read More Tips
                                            <FaArrowRight size={20} color='#Eb0029'></FaArrowRight>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>                    


                    {/* Card-4 */}
                    <Fade direction='right' cascade>                        
                        <div>
                            <div className="card card-dash border-2 border-gray-100 bg-base-100 shadow-sm">
                                <div className="card-body space-y-2">
                                    <h2 className="card-title text-3xl font-bold">
                                    <IoFishSharp size={50} color='#Eb0029'></IoFishSharp>    
                                    Meat & Fish</h2>
                                    <p className='flex items-center gap-2'><span className='text-lg font-bold flex items-center'><NotepadText color='#Eb0029' /> Tips:</span>Store in the coldest part of the fridge and use within 1–2 days.</p>
                                    <p className='flex items-center gap-2'><span className='text-lg font-bold flex items-center'><Lightbulb size={25} color='#eb0029' /> Bonus:</span>Freeze in small portions with date labels.</p>
                                    <div className="card-actions justify-end">
                                        <button className='flex items-center gap-2 text-lg font-bold'>
                                            Read More Tips
                                            <FaArrowRight size={20} color='#Eb0029'></FaArrowRight>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>                    


                    {/* Card-5 */}
                    <Fade direction='left' cascade>                        
                        <div>
                            <div className="card card-dash border-2 border-gray-100 bg-base-100 shadow-sm">
                                <div className="card-body space-y-2">
                                    <h2 className="card-title text-3xl font-bold">
                                    <RiBreadFill size={50} color='#Eb0029'></RiBreadFill>    
                                    Bread</h2>
                                    <p className='flex items-center gap-2'><span className='text-lg font-bold flex items-center'><NotepadText color='#Eb0029' /> Tips:</span>Store at room temperature in a bread box or paper bag.</p>
                                    <p className='flex items-center gap-2'><span className='text-lg font-bold flex items-center'><Lightbulb size={25} color='#eb0029' /> Bonus:</span>Refrigerating — it makes bread go stale faster.</p>
                                    <div className="card-actions justify-end">
                                        <button className='flex items-center gap-2 text-lg font-bold'>
                                            Read More Tips
                                            <FaArrowRight size={20} color='#Eb0029'></FaArrowRight>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>                    


                    {/* Card-6 */}
                    <Fade direction='right' cascade>                        
                        <div>
                            <div className="card card-dash border-2 border-gray-100 bg-base-100 shadow-sm">
                                <div className="card-body space-y-2">
                                    <h2 className="card-title text-3xl font-bold">
                                    <GiCampCookingPot size={50} color='#Eb0029'></GiCampCookingPot>    
                                    Cooked Leftovers</h2>
                                    <p className='flex items-center gap-2'><span className='text-lg font-bold flex items-center'><NotepadText color='#Eb0029' /> Tips:</span>Let cool fully, then refrigerate in airtight containers.</p>
                                    <p className='flex items-center gap-2'><span className='text-lg font-bold flex items-center'><Lightbulb size={25} color='#eb0029' /> Bonus:</span>Label with storage date and eat within 3 days.</p>
                                    <div className="card-actions justify-end">
                                        <button className='flex items-center gap-2 text-lg font-bold'>
                                            Read More Tips
                                            <FaArrowRight size={20} color='#Eb0029'></FaArrowRight>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>


                    </div>
                    {/* <div className='mt-10 text-center'>
                        <button className='btn btn-outline border-primary border-2 text-primary px-10 py-5'>View All Tips</button>
                    </div> */}
                </div>
        </div>
    );
};

export default FoodStorageTips;