import Lottie from "lottie-react";
import register_enimation from '../assets/Animation - 1733964488290.json'
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";


const SignUp = () => {
    const {getSignUp, googleSignUp, profileUpdate} = useContext(AuthContext);
    const [error, setError] = useState('')

    // password Authentication sign up handle
    const handleSubmit = e => {
        e.preventDefault();
        const fullName = e.target.fullName.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(fullName, photoUrl, email, password);
        setError('')
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            return setError('Password must contain at least 1 uppercase letter, 1 lowercase letter, and at least 6 characters long.')
        }

        getSignUp(email, password)
        .then(result=>{
            console.log(result.user)
            if(result.user){
                toast.success('Explore and enjoy our features today!')
                e.target.reset();
                profileUpdate({
                    displayName: fullName,
                    photoURL: photoUrl
                });
            }
        })
        .catch(err =>{
            console.log(err.message);
            setError(err.message)
            toast.error(err.message)
        })
    }

    // google signup handle
    const handleGooleSignUp = () =>{
        googleSignUp()
        .then(result=>{
            console.log(result.user)
            if(result.user){
                toast.success('Explore and enjoy our features today!')
            }
        })
        .catch(err =>{
            console.log(err.message);
            toast.error(err.message)
        })
    }

    return (
        <div className="relative max-w-7xl mx-auto">
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <div className="flex justify-center items-center my-16">
                <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
                    <p className="text-center text-blue-500 pb-2">Sign up</p>
                    <h2 className="text-2xl font-bold text-center mb-4">Start for free Today</h2>
                    <p className="text-center text-sm text-gray-600 mb-6">
                        Access to all features. No credit card required.
                    </p>

                    <button onClick={handleGooleSignUp}  className="btn btn-outline btn-block mb-4">
                        <img
                            src="https://www.google.com/favicon.ico"
                            alt="Google"
                            className="inline w-4 h-4 mr-2"
                        />
                        Sign up with Google
                    </button>

                    <p className="text-center text-sm text-gray-600 mb-4 divider">Or continue with</p>

                    <form onSubmit={handleSubmit}>
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
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    name="photoUrl"
                                    type="url"
                                    placeholder="photoUrl"
                                    className="input input-bordered"
                                    required
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
                                    required
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
                                    required
                                />
                                <small className="text-red-500">{error}</small>
                            </div>
                        </div>

                        {/* Checkbox */}
                        <div className="form-control mb-6 mt-4">
                            <label className="cursor-pointer flex items-center">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                    required
                                />
                                <span className="ml-2 text-sm">
                                    Agree our <a href="#" className="text-blue-500">terms and policy</a>
                                </span>
                            </label>
                        </div>

                        <button className="btn btn-primary btn-block">Submit & Register</button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account? <Link to="/login" className="text-blue-500">login</Link>
                    </p>
                </div>
            </div>

            <div className="absolute top-52 right-32 h- w-72">
                <Lottie animationData={register_enimation}></Lottie>
            </div>
        </div>

    );
};

export default SignUp;