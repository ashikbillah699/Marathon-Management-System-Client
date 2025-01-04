import { MdEmojiEvents, MdPeople } from 'react-icons/md';
import chooseUs from '../assets/choose_us.jpg'
import { FaPeopleArrows } from 'react-icons/fa';

const ChooseUs = () => {
    return (
        <div className="bg-gray-950 text-white py-28 px-2 md:px-8 lg:px-16 border-y border-red-500">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3 text-center lg:text-left space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Why <span className="text-red-500">Choose Us</span>
                    </h2>
                    <p className="text-gray-400">
                        Our services ensure your growth through brilliant quality, integrity and unwavering trust.
                    </p>
                    <div>
                        <button className="border border-white py-4 px-8 text-sm rounded-xl hover:bg-red-500 duration-700 hover:border-red-500  w-full sm:w-auto">
                            See More
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <img
                        className="rounded-lg md:w-full sm:h-[400px] "
                        src={chooseUs}
                        alt="Why Choose Us"
                    />
                </div>
                <div className=" lg:w-1/3 space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-red-500 text-white p-3 rounded-full">
                            <MdPeople />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Expert Team</h3>
                            <p className="text-gray-400">
                                Skilled professionals delivering top-notch solutions for unparalleled success.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-red-500 text-white p-3 rounded-full">
                            <FaPeopleArrows />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Fun Mentoring</h3>
                            <p className="text-gray-400">
                                Interactive guidance fostering growth through engaging and enjoyable learning experiences.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-red-500 text-white p-3 rounded-full">
                            <MdEmojiEvents />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Event Support</h3>
                            <p className="text-gray-400">
                                Reliable assistance ensuring seamless and successful event management every time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;