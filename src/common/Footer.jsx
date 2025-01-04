import { CiPhone } from "react-icons/ci";
import { FaRunning } from 'react-icons/fa';
import { MdOutlineLocationSearching, MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-background bg-gray-950 relative mt-28">
            <img src="https://plus.unsplash.com/premium_photo-1664304830629-bdac1397d53c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFyYXRob258ZW58MHx8MHx8fDA%3D" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="relative z-10 container mx-auto py-10 px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-1/4 mb-6">
                        <div className='flex items-center gap-2 mb-2'>
                            <FaRunning className='w-7 h-7 text-red-500'/>

                            <h2 className="text-lg font-semibold text-red-500"> RacePoint</h2>
                        </div>
                        <p className="text-muted-foreground text-gray-100">A comprehensive platform for managing marathons, streamlining registrations, tracking participants, and organizing events seamlessly.</p>
                        <h3 className="mt-4 text-lg font-semibold text-gray-100">Join Newsletters</h3>
                        <div className="flex items-center mt-2">
                            <input type="email" placeholder="Email address" className="border border-border rounded-l-md p-2 w-full" />
                            <button className="bg-red-500 border-red-500 border text-white rounded-r-md p-2 ">→</button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:ml-6">
                        <h3 className="text-lg font-semibold text-red-500">Our Projects</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="text-muted-foreground text-gray-300">Run Register</li>
                            <li className="text-muted-foreground text-gray-300">Track Board</li>
                            <li className="text-muted-foreground text-gray-300">Live Race</li>
                            <li className="text-muted-foreground text-gray-300">Organizer Hub</li>
                            <li className="text-muted-foreground text-gray-300">Race Metrics</li>
                            <li className="text-muted-foreground text-gray-300">Charity Link</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold text-red-500">Company</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="text-muted-foreground text-gray-300"><Link to='/'>Home</Link></li>
                            <li className="text-muted-foreground text-gray-300"><Link to='/marathons'>Marathons</Link></li>
                            <li className="text-muted-foreground text-gray-300">About us</li>
                            <li className="text-muted-foreground text-gray-300">Latest events</li>
                            <li className="text-muted-foreground text-gray-300">How It Works</li>
                            <li className="text-muted-foreground text-gray-300">News & articles</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold text-red-500">Contact</h3>
                        <ul className="mt-2 space-y-5">
                            <li className="text-gray-300 flex items-center gap-2">
                                <span className="inline-flex items-center justify-center border rounded-full  p-1">
                                    <CiPhone className="w-6 h-6 text-white" />
                                </span>
                                Phone Number: +012(345) 78 93
                            </li>
                            <li className="text-gray-300 flex items-center gap-2">
                                <span className="inline-flex items-center justify-center border rounded-full  p-1">
                                    <MdOutlineMail className="w-6 h-6 text-white" />
                                </span>
                                Email: support@example.com
                            </li>
                            <li className="text-gray-300 flex items-center gap-2">
                                <span className="inline-flex items-center justify-center border rounded-full  p-1">
                                    <MdOutlineLocationSearching className="w-6 h-6 text-white" />
                                </span>
                                Locations: 59 Main Street, USA
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-card py-4">
                <div className="container mx-auto text-center">
                    <p className="text-gray-300">© 2022 Gavias. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;