import axios from "axios";
import { useEffect, useState } from "react";
import MarathonsCart from "../components/MarathonsCart";

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        const fatchAllMarathons = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/marathons`)
            setMarathons(data)
        }
        fatchAllMarathons()
    }, [])

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-10">
                <h2 className="text-white text-3xl font-semibold inline-block border-b border-red-500 px-10">All Mrathons</h2>
                <p className="text-gray-300 mt-3 sm:mx-20 md:mx-16 lg:mx-0">Explore marathon events showcasing locations, dates, and registration details in an engaging card design.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {marathons.map((marathon) => <MarathonsCart key={marathon._id} marathon={marathon}></MarathonsCart>)}
        </div>
        </div>
    );
};

export default Marathons;