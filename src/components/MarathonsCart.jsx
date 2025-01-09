/* eslint-disable react/prop-types */

import { FaLongArrowAltRight } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const MarathonsCart = ({ marathon }) => {

    // console.log(marathon)
    const { marathonTitle, marathonImage, location, startRegistrationDate, endRegistrationDate, _id, createdAt } = marathon;

    return (
        <div className=" border border-red-500 rounded-xl overflow-hidden hover:bg-gray-800 hover:border-gray-900 duration-700">
            <div className="p-3 relative min-h-44">
                <h3 className="text-2xl font-semibold text-gray-100 w-3/4 mb-6">{marathonTitle}</h3>
                <div className="flex  items-center my-2">
                    <span className="text-md text-gray-100">Registration:</span>
                    <span className="text-sm font-semibold  text-gray-300 ml-2">{format(new Date(startRegistrationDate), 'PP')} - {format(new Date(endRegistrationDate), 'PP')}</span>
                </div>
                <div className="flex items-center my-2">
                    <span className="text-md text-gray-100">Location:</span>
                    <span className="text-sm font-semibold  text-gray-300 ml-2">{location}</span>
                </div>
                <div className="flex items-center my-2">
                    <span className="text-md text-gray-100">CreatedAt:</span>
                    <span className="text-sm font-semibold  text-gray-300 ml-2">{createdAt}</span>
                </div>
                <div className="flex mt-4 absolute top-0 right-2 text-white">
                    <Link to={`/marathonDetails/${_id}`} className=" bg-red-500 border-0 px-3 py-1 rounded-lg">
                         Details
                        <FaLongArrowAltRight className="ml-2 inline" />
                    </Link>
                </div>
            </div>
            <img src={marathonImage} alt={marathonTitle} className="w-full h-56 object-cover" />
        </div>
    );
};

export default MarathonsCart;