
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import banner11 from '../assets/11.png'
import banner4 from '../assets/banner1.png'
import banner2 from '../assets/banner7.png'

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Easy Registration",
            description: "A seamless system for participants to register digitally and pay securely for marathons.",
            image: "https://kitpro.site/sprinter/wp-content/uploads/sites/293/2024/11/4-1.png",
        },
        {
            title: "Real-Time Tracking",
            description: "Track participant status, race results, and performance analytics live during the marathon.",
            image: banner11,
        },
        {
            title: "Organizer Dashboard",
            description: "Simplify event planning with tools for managing schedules, venues, and participant details.",
            image: banner4
        },
        {
            title: "Donation Integration",
            description: "Enable fundraising by seamlessly integrating donation options for charitable marathon events.",
            image:banner2
        },

    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative bg-background bg-gray-950 bg-opacity-100">
            <img src="https://plus.unsplash.com/premium_photo-1664304830629-bdac1397d53c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFyYXRob258ZW58MHx8MHx8fDA%3D" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-5" />
            <div className="container mx-auto md:flex justify-between items-center px-8 text-white">
                <div className="md:ml-4 sm:text-center md:text-start sm:py-20">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-4">
                        <Typewriter
                            words={[slides[currentSlide].title]} 
                            loop={Infinity} 
                            cursor
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1800}
                        />
                    </h2>
                    <p className="text-lg mb-6 md:w-10/12">{slides[currentSlide].description}</p>
                    <Link to=''>
                        <button className="bg-red-500 sm:mx-auto md:mx-0 text-white py-2 px-4 rounded-full flex items-center">
                            Add new Marathon <FaPlay className="ml-2" />
                        </button>
                    </Link>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src={slides[currentSlide].image}
                        alt="Slide"
                        className="mx-auto lg:w-[400px] lg:h-[630px] md:w-[300px] sm:h-[500px]"
                    />
                </div>
            </div>

            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4">
                <button onClick={prevSlide} className="bg-white hover:bg-red-500 hover:text-white transition duration-300 rounded-full p-2 shadow-lg">
                    <MdKeyboardArrowLeft className="w-8 h-8" />
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4">
                <button onClick={nextSlide} className="bg-white hover:bg-red-500 hover:text-white transition duration-300 rounded-full p-2 shadow-lg">
                    <MdKeyboardArrowRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

export default Banner;
