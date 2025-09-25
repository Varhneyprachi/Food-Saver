// import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/Pulse.png'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { ImExit } from 'react-icons/im';
import { FaRegUserCircle } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';

const Navbar = () => {
    const {user, handleSingOut} = useContext(AuthContext);
    const menu = <>
            <li><NavLink to='/' 
            className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold' : 'lg:text-white' }
            >Home</NavLink></li>
            <li><NavLink to='/fridge' 
            className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': 'lg:text-white' }
            >Fridge</NavLink></li>

            {
               user && 
               <>
               <li><NavLink to='add-food' 
               className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': 'lg:text-white' }
               >Add Food</NavLink></li>
               <li><NavLink to='my-items' 
               className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': 'lg:text-white' }
               >My Items</NavLink></li>
               </>
               
            }
            <li><NavLink to='/about' 
            className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': 'lg:text-white' }
            >About</NavLink></li>
            <li><NavLink to='/faq' 
            className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': 'lg:text-white' }
            >FAQ</NavLink></li>
            {
                !user && 
                <li><NavLink to='/privacy-policy' 
                className={ ({isActive}) => isActive? 'text-primary border-b-2 rounded-none font-bold': 'lg:text-white' }
                >Privacy policy</NavLink></li>
            }

    </>
    return (
        <nav className=' bg-[#151515] px-4 lg:px-0'>
            <div className="md:max-w-[1500px] mx-auto navbar px-0 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden items-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="red"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base font-medium space-y-4 text-secondary">
                        {
                            menu
                        }
                    </ul>
                    </div>
                    <Link to='/'><img className='w-full h-12 md:h-16 object-cover' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base font-medium space-x-4 text-secondary">
                        {
                            menu
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <Tooltip id='my-tooltip'></Tooltip>
                    {
                        user? 
                        <div className='flex items-center gap-4'>
                            
                            <div
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={`${user&& user.displayName }`}
                            data-tooltip-place="left"
                            className='hidden md:block'
                            >
                                <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                                    <img 
                                    className='cursor-pointer' src= {user && user.email ? user.photoURL : 'https://cdn-icons-png.flaticon.com/128/64/64572.png' } referrerPolicy="no-referrer" />
                                </div>
                                </div>
                            </div>

                            <button onClick={handleSingOut} className="btn btn-primary text-white text-base font-normal px-6 tracking-wider">
                                <ImExit size={22}></ImExit>
                                Log Out</button>
                        </div>
                        :
                        <div className='flex items-center gap-4'>
                            <Link to='login'>
                                <button className="btn btn-primary text-white text-base font-normal px-6 tracking-wider hover:bg-secondary">
                                <BiLogInCircle size={22}></BiLogInCircle>
                                Login</button>
                            </Link>
                                <span className='font-bold hidden md:block text-primary'>Or</span>
                            <Link to='register' className='hidden md:block'>
                                <button className="btn btn-outline border-primary border-2 text-base text-white font-normal tracking-wider hover:bg-primary">
                                <FaRegUserCircle size={22}></FaRegUserCircle>    
                                Register</button>
                            </Link>
                        </div>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;