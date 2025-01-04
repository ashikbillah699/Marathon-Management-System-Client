import about_img from '../assets/about_img.jpg'

const About = () => {
    return (
        <div className="max-w-7xl mx-auto md:py-10 px-4 bg-gray-900 my-16 rounded-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 gap-16">
            <div className="w-full md:w-5/12">
                <img
                    src={about_img}
                    alt="Running group"
                    className="rounded-lg w-[470px] h-[410px] sm:mx-auto md:mx-0"
                />
            </div>
            <div className="w-full md:w-7/12 text-white space-y-4 ">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed mb-6">
                    Every Step Takes You <br /> Closer To Glory.
                </h1>
                <p className="text-gray-400 text-sm sm:text-base ">
                Take steps towards glory with determination and focus. Unlock new opportunities and achieve your fitness goals.
                </p>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between items-center text-sm sm:text-base">
                            <p className="font-semibold">Run Training</p>
                            <p>98%</p>
                        </div>
                        <progress className="progress text-red-500 w-full" value="98" max="100"></progress>
                    </div>
                    <div>
                        <div className="flex justify-between items-center text-sm sm:text-base">
                            <p className="font-semibold">Facilities</p>
                            <p>88%</p>
                        </div>
                        <progress className="progress text-red-500 w-full" value="88" max="100"></progress>
                    </div>
                </div>
                <div>
                    <button className="border border-white py-4 px-8 text-sm rounded-xl hover:bg-red-500 duration-700 hover:border-red-500  w-full sm:w-auto">
                        Learn More
                    </button>
                </div>
            </div>
        </div>

    );
};

export default About;