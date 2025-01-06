import { FaCalendarAlt, FaMapMarkerAlt, FaRoad } from "react-icons/fa";
import { PiCashRegisterFill } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";
import { format } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
// import toast from "react-hot-toast";


const MarathonDetails = () => {
    const marathonDetailsData = useLoaderData();
    const { user } = useContext(AuthContext);

    const { description, createdAt, startRegistrationDate,
        endRegistrationDate, location, marathonStartDate,
        marathonImage, marathonTitle, runningDistance, totalRegistrationCount,
        marathonCreater, _id } = marathonDetailsData;

    const currentDate = new Date();
    const isRegistrationOpen =
        new Date(startRegistrationDate) <= currentDate &&
        currentDate <= new Date(endRegistrationDate) && user?.email !== marathonCreater?.email;
     
        // try{
        //     if (!isRegistrationOpen) {
        //         if (!(new Date(startRegistrationDate) <= currentDate &&
        //             currentDate <= new Date(endRegistrationDate))) {
        //              toast.error('Registration is not available!!')
        //         }
        //         if (!(user?.email !== marathonCreater?.email)) {
        //              toast.error('Hey, It is your creation!!')
        //         }
        //     }
        // }
        // catch(err){
        //     toast.error(err.message)
        // }




    return (
        <div>
            <div className="text-center my-10">
                <h2 className="text-white text-3xl font-semibold inline-block border-b border-red-500 px-10">{marathonTitle} Details</h2>
                <p className="text-gray-300 mt-3 sm:mx-20 md:mx-16 lg:mx-0">Join the ultimate running challenge! Showcase your endurance, explore new distances, and achieve greatness together.</p>
            </div>
            <div className="max-w-7xl mx-auto p-4 lg:flex gap-6 ">
                {/* Left Side: Image */}
                <div className="lg:w-3/5 w-full ">
                    <img
                        className="rounded-lg w-full max-h-[400px]"
                        src={marathonImage}
                        alt="Marathon Image"
                    />
                    <p className="text-gray-300 text-lg mt-4 sm:mb-4 lg:mb-0">{description}</p>
                </div>

                {/* Right Side: Marathon Information */}
                <div className="lg:w-2/5 w-full bg-gray-800 p-6 rounded-lg max-h-full">
                    <h2 className="text-2xl font-bold text-white mb-4">{marathonTitle}</h2>
                    <ul className="text-gray-200 space-y-3">
                        <li>
                            <FaMapMarkerAlt className="inline mr-2 text-red-400" />
                            <span className="font-semibold">Location: </span> {location}
                        </li>
                        <li>
                            <FaCalendarAlt className="inline mr-2 text-yellow-400" />
                            <span className="font-semibold">Start Registration: </span> {format(new Date(startRegistrationDate), 'PP')}
                        </li>
                        <li>
                            <FaCalendarAlt className="inline mr-2 text-yellow-400" />
                            <span className="font-semibold">End Registration: </span>{format(new Date(endRegistrationDate), 'PP')}
                        </li>
                        <li>
                            <FaCalendarAlt className="inline mr-2 text-green-400" />
                            <span className="font-semibold">Marathon Start Date: </span>{format(new Date(marathonStartDate), 'PP')}
                        </li>
                        <li>
                            <FaRoad className="inline mr-2 text-blue-400" />
                            <span className="font-semibold">Running Distance: </span> {runningDistance}
                        </li>
                        <li>
                            <FaCalendarAlt className="inline mr-2 text-gray-400" />
                            <span className="font-semibold">Created At: </span> {format(new Date(createdAt), 'PP')}
                        </li>
                        <li>
                            <span className="font-semibold">Total Registration: </span> {totalRegistrationCount}
                        </li>
                        <Link to={`/marathonRagistation/${_id}`}>
                            <button
                                className={`mt-3 sm:mx-auto md:mx-0 text-white py-2 px-4 rounded-full flex items-center ${isRegistrationOpen
                                    ? "bg-red-500 hover:bg-red-600 cursor-pointer"
                                    : "bg-gray-500 cursor-not-allowed"
                                    }`}
                                disabled={!isRegistrationOpen}
                            >
                                Register here <PiCashRegisterFill className="ml-2" />
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MarathonDetails;