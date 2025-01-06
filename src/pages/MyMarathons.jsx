/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { format } from "date-fns";


const MyMarathons = () => {
    const { user } = useContext(AuthContext);
    const [marathons, setMarathons] = useState([]);

    const fatchAllMarathons = async () => {
        if (!user?.email) {
            console.log("User email is not available");
            return;
        }
        try {
            await axios.get(`${import.meta.env.VITE_API_URL}/marathonsSpecific/${user?.email}`)
                .then(res => {
                    setMarathons(res.data)
                })
        }
        catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        fatchAllMarathons()
    }, [user?.email])

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-12">
                <h2 className="text-white text-3xl font-semibold inline-block border-b border-red-500 px-10">Your Posted Marathons</h2>
            </div>
            {
                marathons.map(marathon => <div
                    key={marathon._id}
                    className="mt-10 flex flex-col md:flex-row border border-red-500 text-white rounded-xl shadow-md p-4 items-center gap-4"> {/* Image Section */}
                    <div className="w-full md:w-1/3">
                        <img
                            src={marathon.marathonImage}
                            alt="Marathon"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-2/3 ">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">
                            {marathon.marathonTitle}
                        </h2>
                        <p className="text-gray-400 text-sm mb-4">{marathon.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-red-500" />
                                <span>{marathon.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-red-500" />
                                <span>{format(new Date(marathon.marathonStartDate), 'PP')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="divider divider-horizontal divider-error"></div>
                    <div className="w-full md:w-1/5 text-center md:text-right space-y-5">
                        <button className="border border-white py-2 px-8 text-sm rounded-xl hover:bg-green-500 duration-700 hover:border-green-900  w-full sm:w-auto">
                            Update
                        </button>
                        <button className="border py-2 px-8 text-sm rounded-xl bg-red-500 duration-700 border-red-500  w-full sm:w-auto">
                            Delete
                        </button>
                        <button className="border border-white py-2 px-8 text-sm rounded-xl hover:bg-blue-500 duration-700 hover:border-blue-500  w-full sm:w-auto">
                            Details
                        </button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyMarathons;