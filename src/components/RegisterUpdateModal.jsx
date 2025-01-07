/* eslint-disable react/prop-types */
import axios from "axios";
import { format } from "date-fns";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const RegisterUpdateModal = ({ isOpen, onClose, data, fatchAllallRegistration }) => {

    console.log(data);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const registrationData = {
            marathonTitle: data?.marathonTitle,
            marathonStartDate: data?.marathonStartDate,
            email:data?.email,
            contactNumber:e.target.contactNumber.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            additionalInfo: e.target.additionalInfo.value,
            marathonId: data?.marathonId
        }

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
                    await axios.put(`${import.meta.env.VITE_API_URL}/registrationUpdate/${data._id}`, registrationData)
                        .then(res => {
                            if (res.data.modifiedCount) {
                                Swal.fire("Saved!", "", "success");
                                console.log(res.data)
                                onClose()
                                fatchAllallRegistration()
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
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Left Section: Email & Marathon Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-200">
                        <div className="form-control">
                            <label htmlFor="marathonName" className="label">Marathon Name</label>
                            <input
                                type="text"
                                id="marathonName"
                                name="marathonTitle"
                                value={data?.marathonTitle || ''}
                                className="input input-bordered w-full text-gray-800"
                                readOnly
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="marathonName" className="label">Start Date</label>
                            <input
                                type="date"
                                id="marathonStartDate"
                                value={data?.marathonStartDate
                                    ? format(new Date(data?.marathonStartDate), 'yyyy-MM-dd')
                                    : ''}
                                name="marathonStartDate"
                                readOnly
                                className="input input-bordered w-full text-gray-800"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="form-control">
                            <label htmlFor="email" className="label">Email</label>
                            <input
                                type="email"
                                name='email'
                                id="email"
                                value={data?.email || ""}
                                readOnly
                                className="input input-bordered w-full text-gray-800"
                            />
                        </div>

                        {/* Contact Number */}
                        <div className="form-control">
                            <label htmlFor="contactNumber" className="label">Contact Number</label>
                            <input
                                type='number'
                                id="contactNumber"
                                name="contactNumber"
                                defaultValue={data.contactNumber}
                                placeholder="123-456-7890"
                                className="input input-bordered w-full text-gray-800"
                                required
                            />
                        </div>

                    </div>

                    {/* Right Section: Contact Info & Additional Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-200">
                        {/* First Name */}
                        <div className="form-control">
                            <label htmlFor="firstName" className="label">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                defaultValue={data.firstName}
                                className="input input-bordered w-full text-gray-800"
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div className="form-control">
                            <label htmlFor="lastName" className="label">Last Name</label>
                            <input
                                type="text"
                                name="LastName"
                                id="lastName"
                                placeholder="lastName"
                                defaultValue={data.lastName}
                                className="input input-bordered w-full text-gray-800"
                                required
                            />
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-200">
                        <div className="form-control col-span-2">
                            <label htmlFor="additionalInfo" className="label">Additional Info</label>
                            <textarea
                                id="additionalInfo"
                                name="additionalInfo"
                                placeholder="Any additional information?"
                                className="textarea textarea-bordered w-full text-gray-800"
                                defaultValue={data.additionalInfo}
                            ></textarea>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
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

export default RegisterUpdateModal;