import axios from "axios";
import { useEffect, useState } from "react";
import MarathonsCart from "../components/MarathonsCart";
import { Helmet } from "react-helmet";

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);
    const [sort, setSort] = useState('')
    console.log(sort)

    useEffect(() => {
        const fatchAllMarathons = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/marathons?sort=${sort}`)
            setMarathons(data)
        }
        fatchAllMarathons()
    }, [sort])

    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>Marathons</title>
            </Helmet>
            <div className="text-center my-10">
                <h2 className="text-white text-3xl font-semibold inline-block border-b border-red-500 px-10">All Mrathons</h2>
                <p className="text-gray-300 mt-3 sm:mx-20 md:mx-16 lg:mx-0">Explore marathon events showcasing locations, dates, and registration details in an engaging card design.</p>
            </div>
            <select
            onChange={(e)=>setSort(e.target.value)}
             className="select select-error bg-gray-800 text-white ml-4 max-w-xs">
                <option disabled selected>Sort by CreatedAt</option>
                <option value='des'>Descending</option>
                <option value='asc'>Ascending</option>
            </select>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {marathons.map((marathon) => <MarathonsCart key={marathon._id} marathon={marathon}></MarathonsCart>)}
            </div>
        </div>
    );
};

export default Marathons;