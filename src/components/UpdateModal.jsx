/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const UpdateModal = ({ isOpen, onClose, data, fatchAllMarathons }) => {
    const [startRegistrationDate, setStartRegistrationDate] = useState(null);
    const [endRegistrationDate, setEndRegistrationDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);

    console.log(data);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const marathonData = {
            marathonTitle: e.target.marathonTitle.value,
            startRegistrationDate,
            endRegistrationDate,
            marathonStartDate,
            location: e.target.location.value,
            runningDistance: e.target.runningDistance.value,
            description: e.target.description.value,
            marathonImage: e.target.marathonImage.value,
            createdAt: e.target.createdAt.value,
            totalRegistrationCount: data.totalRegistrationCount
        };
        try {
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Update",
                denyButtonText: `Don't update`
            }).then(async (result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    await axios.put(`${import.meta.env.VITE_API_URL}/marathonUpdate/${data._id}`,marathonData)
                        .then(res => {
                            if (res.data.modifiedCount) {
                                Swal.fire("Saved!", "", "success");
                                console.log(res.data)
                                onClose()
                                fatchAllMarathons()
                            }
                        })
                }
                else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
        }
        catch (err) {
            console.log(err);
            toast.error(err.message);
        }

    }

    return (
        <div className="z-50 max-w-xl mx-auto fixed inset-0  flex justify-center items-center">
            <div className="w-full max-h-[90vh] overflow-y-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-white">Update Marathon</h2>
                <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
                    {/* Marathon Title */}
                    <div>
                        <label className="block font-medium mb-2 text-gray-300">Marathon Title</label>
                        <input
                            type="text"
                            name="marathonTitle"
                            defaultValue={data.marathonTitle}
                            className="w-full text-gray-800 border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    {/* Start Registration Date */}
                    <div className="">
                        <label className="block font-medium mb-2 text-gray-300">Start Registration Date</label>
                        <DatePicker
                            selected={startRegistrationDate || new Date(data.startRegistrationDate)}
                            onChange={(date) => setStartRegistrationDate(date)}
                            dateFormat="yyyy-MM-dd"
                            className="text-gray-800 w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    {/* End Registration Date */}
                    <div>
                        <label className="block font-medium mb-2 text-gray-300">End Registration Date</label>
                        <DatePicker
                            selected={endRegistrationDate || new Date(data.endRegistrationDate)}
                            onChange={(date) => setEndRegistrationDate(date)}
                            dateFormat="yyyy-MM-dd"
                            className="text-gray-800 w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    {/* Marathon Start Date */}
                    <div>
                        <label className="block font-medium mb-2 text-gray-300">Marathon Start Date</label>
                        <DatePicker
                            selected={marathonStartDate || new Date(data.marathonStartDate)}
                            onChange={(date) => setMarathonStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                            className="text-gray-800 w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    {/* Location */}
                    <div>
                        <label className="block font-medium mb-2 text-gray-300">Location</label>
                        <input
                            type="text"
                            defaultValue={data.location}
                            name="location"
                            className="text-gray-800 w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    {/* Running Distance */}
                    <div>
                        <label className="block font-medium mb-2 text-gray-300">Running Distance</label>
                        <select
                            name="runningDistance"
                            defaultValue={data.runningDistance}
                            className="text-gray-800 w-full border border-gray-300 rounded-lg p-2"
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
                            defaultValue={data.runningDistance}
                            name="description"
                            className="text-gray-800 w-full border border-gray-300 rounded-lg p-2"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    {/* Marathon Image */}
                    <div>
                        <label className="block font-medium mb-2 text-gray-300">Marathon Image URL</label>
                        <input
                            defaultValue={data.marathonImage}
                            type="url"
                            name="marathonImage"
                            className="text-gray-800 w-full border border-gray-300 rounded-lg p-2"
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
                            className="text-gray-800 w-full border border-gray-300 rounded-lg p-2"
                            readOnly
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-2 rounded-lg"
                        >
                            Update Marathon
                        </button>
                    </div>
                </form>
                <button
                    onClick={onClose}
                    className="mt-4 text-red-500 underline"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default UpdateModal;