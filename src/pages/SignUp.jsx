import Lottie from "lottie-react";
import register_enimation from '../assets/Animation - 1733964488290.json'
import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="relative">
            <div className="flex justify-center items-center my-16">
                <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
                    <p className="text-center text-blue-500 pb-2">Register</p>
                    <h2 className="text-2xl font-bold text-center mb-4">Start for free Today</h2>
                    <p className="text-center text-sm text-gray-600 mb-6">
                        Access to all features. No credit card required.
                    </p>

                    <button onClick="" className="btn btn-outline btn-block mb-4">
                        <img
                            src="https://www.google.com/favicon.ico"
                            alt="Google"
                            className="inline w-4 h-4 mr-2"
                        />
                        Sign up with Google
                    </button>

                    <p className="text-center text-sm text-gray-600 mb-4 divider">Or continue with</p>

                    <form onSubmit="">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input
                                    name="userName"
                                    type="text"
                                    placeholder="Username"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                />
                                <small className="text-red-500">error message</small>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Re-Password</span>
                                </label>
                                <input
                                    name="rePassword"
                                    type="password"
                                    placeholder="Re-Password"
                                    className="input input-bordered"
                                />
                            </div>
                        </div>

                        {/* Checkbox */}
                        <div className="form-control mb-6 mt-4">
                            <label className="cursor-pointer flex items-center">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                />
                                <span className="ml-2 text-sm">
                                    Agree our <a href="#" className="text-blue-500">terms and policy</a>
                                </span>
                            </label>
                        </div>

                        <button className="btn btn-primary btn-block">Submit & Register</button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account? <Link to="/signIn" className="text-blue-500">Sign in</Link>
                    </p>
                </div>
            </div>

            <div className="absolute top-52 right-32 h- w-80">
                <Lottie animationData={register_enimation}></Lottie>
            </div>
        </div>

    );
};

export default SignUp;