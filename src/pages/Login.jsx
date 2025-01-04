import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import login_enimation from '../assets/Animation - 1733964488290.json'


const Login = () => {
    return (
        <div className="relative max-w-7xl mx-auto">
            <div className="flex justify-center items-center my-16">
                <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                    <p className="text-center text-blue-500 pb-2">Welcome back</p>
                    <h2 className="text-2xl font-bold text-center mb-4">Member Login</h2>
                    <p className="text-center text-sm text-gray-600 mb-6">
                        Access to all features. No credit card required.
                    </p>

                    <button onClick='' className="btn btn-outline btn-block mb-4">
                        <img
                            src="https://www.google.com/favicon.ico"
                            alt="Google"
                            className="inline w-4 h-4 mr-2"
                        />
                        Sign up with Google
                    </button>

                    <p className="text-center text-sm text-gray-600 mb-4 divider">Or continue with</p>

                    <form onSubmit=''>
                        <div className="form-control mb-4">
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
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="input input-bordered"
                            />
                            <small className="text-red-500">error massage</small>
                        </div>
                        <div className="form-control mb-6">
                            <label className="cursor-pointer flex items-center">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                />
                                <span className="ml-2 text-sm">
                                    Remember me <a href="#" className="text-blue-500 ml-32">Forget Password</a>
                                </span>
                            </label>
                        </div>
                        <button className="btn btn-primary btn-block">Sign in</button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                    Don&apos;t have an Account?<Link to='/signUp' className="text-blue-500">Sign up</Link>
                    </p>
                </div>
            </div>
            <div className="absolute top-20 right-28 h-96 w-80">
                <Lottie animationData={login_enimation}></Lottie>
            </div>
        </div>
    );
};

export default Login;