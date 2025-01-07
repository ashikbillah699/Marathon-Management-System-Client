/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { MdDriveFileRenameOutline } from "react-icons/md";
import RegisterUpdateModal from "../components/registerUpdateModal";
import { Helmet } from "react-helmet";


const MyApplyList = () => {
    const { user } = useContext(AuthContext);
    const [allRegistration, setAllRegistration] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [applyData, setApplyData] = useState({})
    const [search, setSearch] = useState('')

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    console.log(allRegistration)


    const fatchAllallRegistration = async () => {
        if (!user?.email) {
            console.log("User email is not available");
            return;
        }
        try {
            await axios.get(`${import.meta.env.VITE_API_URL}/registationsSpecific/${user?.email}?search=${search}`)
                .then(res => {
                    setAllRegistration(res.data)
                })
        }
        catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        fatchAllallRegistration()
    }, [user?.email, search]);

    // delete data
    const handleDelete = (id) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios.delete(`${import.meta.env.VITE_API_URL}/registation/${id}`)
                        .then(res => {
                            if (res.data.deletedCount) {
                                console.log(res.data)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                            fatchAllallRegistration();
                        })
                }
            });


        } catch (err) {
            toast.error(err.message);
        }
    }

    // update data
    const handleUpdeate = registration => {
        setApplyData(registration)
        openModal();
    }
    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>My Apply List</title>
            </Helmet>
            <div className="text-center my-12">
                <h2 className="text-white text-3xl font-semibold inline-block border-b border-red-500 px-10">All Registrations</h2>
            </div>
            {/* search input */}
            <div>
                <label className="input  flex items-center bg-gray-800 border border-red-500 gap-2 max-w-60">
                    <input
                        onChange={e => setSearch(e.target.value)}
                        type="text"
                        className="text-white"
                        placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70 text-white">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            {
                allRegistration.map(registration => <div
                    key={registration._id}
                    className="mt-10 flex flex-col md:flex-row border border-red-500 text-white rounded-xl shadow-md p-4 items-center gap-4"> {/* Image Section */}
                    <div className="flex items-center gap-4 md:w-5/12">
                        <img
                            referrerPolicy="no-reffer"
                            className="rounded-full w-16"
                            alt="user img"
                            src={user?.photoURL}
                        />
                        <div>
                            <h2 className="text-xl md:text-xl font-semibold mb-2">
                                {registration.firstName} {registration.lastName}
                            </h2>
                            <p className="text-gray-400 text-sm ">{registration.additionalInfo}</p>
                        </div>
                    </div>
                    <div className="divider divider-horizontal divider-error"></div>
                    <div className="w-full md:w-4/12 ">
                        <div className="flex flex-col sm:items-center md:items-start lg:items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <MdDriveFileRenameOutline className=" text-xl text-red-500" />
                                <span className="text-xl">{registration.marathonTitle}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-red-500" />
                                <span>{format(new Date(registration.marathonStartDate), 'PP')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="divider divider-horizontal divider-error"></div>
                    <div className="w-full md:w-3/12 text-center md:text-right sm:space-x-5 lg:space-x-5 md:space-y-5 ">
                        <button onClick={() => handleUpdeate(registration)} className="border border-white py-2 px-8 text-sm rounded-xl hover:bg-green-500 duration-700 hover:border-green-900  w-full sm:w-auto">
                            Update
                        </button>
                        <button onClick={() => handleDelete(registration._id)} className="border py-2 px-8 text-sm rounded-xl bg-red-500 duration-700 border-red-500  w-full sm:w-auto">
                            Delete
                        </button>
                    </div>

                    {/* update modal */}
                    {/* <UpdateModal data={applyData} isOpen={isModalOpen} onClose={closeModal} fatchAllallRegistration={fatchAllallRegistration}></UpdateModal> */}
                    <RegisterUpdateModal data={applyData} isOpen={isModalOpen} onClose={closeModal} fatchAllallRegistration={fatchAllallRegistration}></RegisterUpdateModal>
                </div>)
            }
        </div>
    );
};

export default MyApplyList;