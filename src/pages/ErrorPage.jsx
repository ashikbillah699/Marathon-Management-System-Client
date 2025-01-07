import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <div className="text-center">
                <h1 className="text-8xl font-extrabold text-red-500">404</h1>
                <p className="mt-4 text-2xl font-semibold">Oops! Page Not Found</p>
                <p className="mt-2 text-gray-400">
                    The page you&#39;re looking for doesn&#39;t exist or has been moved.
                </p>
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    onClick={() => navigate("/")}
                    className="btn btn-primary btn-wide text-white shadow-lg"
                >
                    Back to Home
                </button>
                <button
                    onClick={() => window.history.back()}
                    className="btn btn-secondary btn-wide text-white shadow-lg"
                >
                    Previous Page
                </button>
            </div>
            <div className="mt-8">
                <img
                    src="https://i.imgur.com/qIufhof.png"
                    alt="Not Found Illustration"
                    className="max-w-md rounded-lg"
                />
            </div>
        </div>
    );
};

export default ErrorPage;