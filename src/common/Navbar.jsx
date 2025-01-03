import logo from '../assets/my_logo.png'

const Navbar = () => {
    return (
        <div className="navbar py-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
                        <li><a className='text-black'>Home</a></li>
                        <li><a className='text-black'>Marathons</a></li>
                        <li>
                            <a className='text-black'>Dashboard</a>
                            <ul className="p-2">
                                <li><a className='text-black'>Submenu 1</a></li>
                                <li><a className='text-black'>Submenu 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <img className='w-12 h-12' src={logo} alt="" />
                <a className="btn btn-ghost italic pt-2 text-2xl text-[#ed4d2d] sm:hidden md:block ">Marathon Management System</a>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='mr-1'><a className='text-white'>Home</a></li>
                        <li className='mr-1'><a className='text-white'>Marathons</a></li>
                        <li className='mr-1'>
                            <details>
                                <summary className='text-white'>Dashboard</summary>
                                <ul className="p-2">
                                    <li><a className='text-black'>Submenu</a></li>
                                    <li><a className='text-black'>Submenu</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <a className="mr-2 bg-white py-1 px-4 font-medium text-sm rounded-3xl">Login</a>
                <a className="mr-1 bg-white py-1 px-4 font-medium text-sm rounded-3xl">Sign up</a>
                {/* <a className="mr-1 bg-white py-1 px-4 font-medium text-sm rounded-3xl">Sign Out</a> */}
                {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="avator"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;