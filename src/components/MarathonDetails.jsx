import { FaCalendarAlt, FaMapMarkerAlt, FaRoad } from "react-icons/fa";
import { PiCashRegisterFill } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";


const MarathonDetails = () => {
    const marathonDetailsData = useLoaderData();
const {description, createdAt,startRegistrationDate,
     endRegistrationDate, location,marathonStartDate, 
     marathonImage,marathonTitle, runningDistance ,totalRegistrationCount} = marathonDetailsData;
    console.log(marathonDetailsData);

    return (
        <div className="max-w-7xl mx-auto p-4 lg:flex gap-6 ">
            {/* Left Side: Image */}
            <div className="lg:w-3/5 w-full ">
                <img
                    className="rounded-lg w-full max-h-[370px]"
                    src={marathonImage}
                    alt="Marathon Image"
                />
                <p className="text-gray-300 text-lg mt-4">{description}</p>
            </div>

            {/* Right Side: Marathon Information */}
            <div className="lg:w-2/5 w-full bg-gray-800 px-6 pt-6 rounded-lg max-h-full">
                <h2 className="text-2xl font-bold text-white mb-4">{marathonTitle}</h2>
                <ul className="text-gray-200 space-y-3">
                    <li>
                        <FaMapMarkerAlt className="inline mr-2 text-red-400" />
                        <span className="font-semibold">Location: </span> {location}
                    </li>
                    <li>
                        <FaCalendarAlt className="inline mr-2 text-yellow-400" />
                        <span className="font-semibold">Start Registration: </span> {startRegistrationDate}
                    </li>
                    <li>
                        <FaCalendarAlt className="inline mr-2 text-yellow-400" />
                        <span className="font-semibold">End Registration: </span> {endRegistrationDate}
                    </li>
                    <li>
                        <FaCalendarAlt className="inline mr-2 text-green-400" />
                        <span className="font-semibold">Marathon Start Date: </span> {marathonStartDate}
                    </li>
                    <li>
                        <FaRoad className="inline mr-2 text-blue-400" />
                        <span className="font-semibold">Running Distance: </span> {runningDistance}
                    </li>
                    <li>
                        <FaCalendarAlt className="inline mr-2 text-gray-400" />
                        <span className="font-semibold">Created At: </span> {createdAt}
                    </li>
                    <li>
                        <span className="font-semibold">Total Registration Count: </span> {totalRegistrationCount}
                    </li>
                    <Link to='/marathonRagistation'>
                        <button className="mt-3 bg-red-500 sm:mx-auto md:mx-0 text-white py-2 px-4 rounded-full flex items-center">
                        Register here <PiCashRegisterFill className="ml-2" />
                        </button>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default MarathonDetails;