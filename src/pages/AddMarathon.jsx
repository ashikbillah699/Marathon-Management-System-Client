import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./addMarathon.css"
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddMarathonPage = () => {
    const [startRegistrationDate, setStartRegistrationDate] = useState(null);
    const [endRegistrationDate, setEndRegistrationDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const marathonData = {
            marathonCreater: {
                email: user?.email,
                displayName: user?.displayName,
                photoUrl: user?.photoURL,
            },
            marathonTitle: e.target.marathonTitle.value,
            startRegistrationDate,
            endRegistrationDate,
            marathonStartDate,
            location: e.target.location.value,
            runningDistance: e.target.runningDistance.value,
            description: e.target.description.value,
            marathonImage: e.target.marathonImage.value,
            createdAt: e.target.createdAt.value,
            totalRegistrationCount: parseInt(e.target.totalRegistrationCount.value),
        };

        if(marathonStartDate <= endRegistrationDate){
            return toast.error("Please fixed valid Marathon start date!!")
        }

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/marathon`, marathonData, {withCredentials:true})
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success("Your marathon successfully add!!")
                        e.target.reset();
                        navigate('/marathons')
                    }
                })
        }
        catch (err) {
            toast.error(err.message);
        }


    };

    return (
        <div className="max-w-4xl mx-auto p-8 ">
            <Helmet>
                <title>Add Marathon</title>
            </Helmet>
            <h2 className="text-2xl font-bold mb-6 text-center border-b border-red-500 text-white">Add Marathon</h2>
            <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
                {/* Marathon Title */}
                <div>
                    <label className="block font-medium mb-2 text-gray-300">Marathon Title</label>
                    <input
                        type="text"
                        name="marathonTitle"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        required
                    />
                </div>

                {/* Start Registration Date */}
                <div className="">
                    <label className="block font-medium mb-2 text-gray-300">Start Registration Date</label>
                    <DatePicker
                        selected={startRegistrationDate}
                        onChange={(date) => setStartRegistrationDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        required
                    />
                </div>

                {/* End Registration Date */}
                <div>
                    <label className="block font-medium mb-2 text-gray-300">End Registration Date</label>
                    <DatePicker
                        selected={endRegistrationDate}
                        onChange={(date) => setEndRegistrationDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        required
                    />
                </div>

                {/* Marathon Start Date */}
                <div>
                    <label className="block font-medium mb-2 text-gray-300">Marathon Start Date</label>
                    <DatePicker
                        selected={marathonStartDate}
                        onChange={(date) => setMarathonStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        required
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block font-medium mb-2 text-gray-300">Location</label>
                    <input
                        type="text"
                        name="location"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        required
                    />
                </div>

                {/* Running Distance */}
                <div>
                    <label className="block font-medium mb-2 text-gray-300">Running Distance</label>
                    <select
                        name="runningDistance"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        required
                    >
                        <option value="25k">25k</option>
                        <option value="10k">10k</option>
                        <option value="3k">3k</option>
                    </select>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                    <label className="block font-medium mb-2 text-gray-300">Description</label>
                    <textarea
                        name="description"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        rows="3"
                        required
                    ></textarea>
                </div>

                {/* Marathon Image */}
                <div>
                    <label className="block font-medium mb-2 text-gray-300">Marathon Image URL</label>
                    <input
                        type="url"
                        name="marathonImage"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        required
                    />
                </div>

                {/* Created At */}
                <div>
                    <label className="block font-medium mb-2 text-gray-300">Created At</label>
                    <input
                        type="date"
                        name="createdAt"
                        value={new Date().toISOString().split("T")[0]}
                        className="w-full border border-gray-300 rounded-lg p-2"
                        readOnly
                    />
                </div>

                {/* Total Registration Count */}
                <div>
                    <label className="block font-medium mb-2 text-gray-300">Total Registration Count</label>
                    <input
                        type="number"
                        name="totalRegistrationCount"
                        defaultValue={0}
                        className="w-full border border-gray-300 rounded-lg p-2"
                        readOnly
                    />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-gray-300 font-bold py-2 rounded-lg"
                    >
                        Submit Marathon
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddMarathonPage;
