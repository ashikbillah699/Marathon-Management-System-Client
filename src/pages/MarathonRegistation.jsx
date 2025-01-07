import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { Helmet } from "react-helmet";

const MarathonRegistation = () => {
    const [marathon, setMarathon] = useState({});
    const { user } = useContext(AuthContext);
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            const fatchAllMarathons = async () => {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/marathons/${id}`)
                setMarathon(data)
            }
            fatchAllMarathons()
        } catch (err) {
            console.log(err.message);
            toast.err(err.message);
        }
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const marathonTitle = marathon.marathonTitle;
        const marathonStartDate = marathon.marathonStartDate;
        const email = user?.email;
        const contactNumber = e.target.contactNumber.value;
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const additionalInfo = e.target.additionalInfo.value;

        const registrationData = {
            marathonTitle, marathonStartDate, email,
            contactNumber, firstName, lastName, additionalInfo, marathonId: marathon._id
        }

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/registration`, registrationData)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Registration Successful!! 🏃‍♂️",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        e.target.reset();
                        navigate('/myApplyList')

                    }
                })
        }
        catch (err) {
            toast.error(err.message);
        }
        e.target.reset();
    }

    return (
        <div className="max-w-4xl mx-auto ">
            <Helmet>
                <title>Marathon Registration</title>
            </Helmet>
            <div className="text-center my-10">
                <h2 className="text-white text-3xl font-semibold inline-block border-b border-red-500 px-10"> Ragistration</h2>
            </div>
            <div className="p-5">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Left Section: Email & Marathon Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-200">
                        <div className="form-control">
                            <label htmlFor="marathonName" className="label">Marathon Name</label>
                            <input
                                type="text"
                                id="marathonName"
                                name="marathonTitle"
                                value={marathon?.marathonTitle || ''}
                                className="input input-bordered w-full text-gray-800"
                                readOnly
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="marathonName" className="label">Start Date</label>
                            <input
                                type="date"
                                id="marathonStartDate"
                                value={marathon?.marathonStartDate
                                    ? format(new Date(marathon?.marathonStartDate), 'yyyy-MM-dd')
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
                                value={user?.email || ""}
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
                                placeholder="John"
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
                                placeholder="Doe"
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
                            ></textarea>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MarathonRegistation;