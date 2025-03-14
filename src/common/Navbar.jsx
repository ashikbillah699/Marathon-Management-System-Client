import { useContext } from 'react';
import { FaRunning } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { getLogOut, user } = useContext(AuthContext);

    return (
        <div className="navbar py-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className='mb-1'><NavLink to='/' className='text-black'>Home</NavLink></li>
                        <li className='mb-1'><NavLink to='/marathons' className='text-black'>Marathons</NavLink></li>
                        {
                            user && <>
                                <li className='mb-1'>
                                    <NavLink className='text-black'>Dashboard</NavLink>
                                    <ul className="p-2">
                                        <li><NavLink to='/addMarathon' className='mb-1 text-black'>Add Marathon</NavLink></li>
                                        <li><NavLink to='/myMarathons' className='mb-1 text-black'>My Marathons</NavLink></li>
                                        <li><NavLink to='/myApplyList' className='mb-1 text-black'>My Apply List</NavLink></li>
                                    </ul>
                                </li>
                            </>
                        }
                    </ul>
                </div>
                <FaRunning className='w-12 h-12 text-red-500' />
                <NavLink to='/' className=" font-bold ml-3 italic pt-2 text-2xl text-red-500">RACEPOINT</NavLink>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 z-[1]">
                        <li className='mr-1'><NavLink to='/' className='text-white'>Home</NavLink></li>
                        <li className='mr-1'><NavLink to='/marathons' className='text-white'>Marathons</NavLink></li>
                        {
                            user && <>
                                <li className='mr-1'>
                                    <details>
                                        <summary className='text-white'>Dashboard</summary>
                                        <ul className="p-2 w-36">
                                            <li><NavLink to='/addMarathon' className='mb-1 text-black'>Add Marathon</NavLink></li>
                                            <li><NavLink to='/myMarathons' className='mb-1 text-black'>My Marathons</NavLink></li>
                                            <li><NavLink to='/myApplyList' className='mb-1 text-black'>My Apply List</NavLink></li>
                                        </ul>
                                    </details>
                                </li>
                            </>
                        }
                    </ul>
                </div>
                {
                    user && user ? <>
                        <button onClick={getLogOut} className="mr-1 bg-white py-1 px-4 font-medium text-sm rounded-3xl">Sign Out</button>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    referrerPolicy='no-referrer'
                                    alt="avator"
                                    src={user && user?.photoURL} />
                            </div>
                        </div>
                    </>
                        : <>
                            <NavLink to='/login' className="mr-2 bg-white py-1 px-4 font-medium text-sm rounded-3xl">Login</NavLink>
                            <NavLink to='/signUp' className="mr-1 bg-white py-1 px-4 font-medium text-sm rounded-3xl">Sign up</NavLink>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;