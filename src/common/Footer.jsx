// import { Link } from 'react-router-dom';
import footerLogo from '../assets/my_logo.png'

import { CiPhone } from "react-icons/ci";
import { MdOutlineLocationSearching, MdOutlineMail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-background bg-black bg-opacity-80 relative mt-28">
            <img src="https://www.michelmores.com/app/uploads/2023/03/Website-thumbnail-Family-law.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="relative z-10 container mx-auto py-10 px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-1/4 mb-6">
                        <div className='flex items-center gap-2 mb-2'>
                            <img className='w-7 h-7' src={footerLogo} alt="" />
                            <h2 className="text-white font-bold text-xl">CROWDCUBE</h2>
                        </div>
                        <p className="text-muted-foreground text-gray-100">A platform enabling everyday investors to fund startups and small businesses in exchange for equity.</p>
                        <h3 className="mt-4 text-lg font-semibold text-gray-100">Join Newsletters</h3>
                        <div className="flex items-center mt-2">
                            <input type="email" placeholder="Email address" className="border border-border rounded-l-md p-2 w-full" />
                            <button className="bg-green-500 border-green-500 border text-white rounded-r-md p-2 ">→</button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:ml-6">
                        <h3 className="text-lg font-semibold text-white">Our Projects</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="text-muted-foreground text-gray-300">Medical & Health</li>
                            <li className="text-muted-foreground text-gray-300">Educations</li>
                            <li className="text-muted-foreground text-gray-300">Film & Video</li>
                            <li className="text-muted-foreground text-gray-300">Technology</li>
                            <li className="text-muted-foreground text-gray-300">Design</li>
                            <li className="text-muted-foreground text-gray-300">Fashion</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold text-white">Company</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="text-muted-foreground text-gray-300">About us</li>
                            <li className="text-muted-foreground text-gray-300">Latest events</li>
                            <li className="text-muted-foreground text-gray-300">How It Works</li>
                            <li className="text-muted-foreground text-gray-300">News & articles</li>
                            <li className="text-muted-foreground text-gray-300">Contact us</li>
                            <li className="text-muted-foreground text-gray-300">Testimonial</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold text-white">Contact</h3>
                        <ul className="mt-2 space-y-3">
                            <li className="text-gray-300 flex items-center gap-2">
                                <span className="inline-flex items-center justify-center border rounded-full bg-green-500 p-2">
                                    <CiPhone className="w-6 h-6 text-white" />
                                </span>
                                Phone Number: +012(345) 78 93
                            </li>
                            <li className="text-gray-300 flex items-center gap-2">
                                <span className="inline-flex items-center justify-center border rounded-full bg-green-500 p-2">
                                    <MdOutlineMail className="w-6 h-6 text-white" />
                                </span>
                                Email: support@example.com
                            </li>
                            <li className="text-gray-300 flex items-center gap-2">
                                <span className="inline-flex items-center justify-center border rounded-full bg-green-500 p-2">
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