import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Marathons from "../pages/Marathons";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivetRoute from "./PrivetRoute";
import AddMarathon from "../pages/AddMarathon";
import MyMarathons from "../pages/MyMarathons";
import MyApplyList from "../pages/MyApplyList";
import MarathonDetails from "../components/MarathonDetails";
import MarathonRegistation from "../pages/MarathonRegistation";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/marathons',
                element: <PrivetRoute><Marathons></Marathons></PrivetRoute>
            },
            {
                path: '/addMarathon',
                element: <PrivetRoute><AddMarathon></AddMarathon></PrivetRoute>
            },
            {
                path: '/marathonDetails/:id',
                element: <PrivetRoute><MarathonDetails></MarathonDetails></PrivetRoute>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/marathons/${params.id}`)
            },
            {
                path: '/marathonRagistation/:id',
                element: <PrivetRoute><MarathonRegistation></MarathonRegistation></PrivetRoute>
            },
            {
                path: '/myMarathons',
                element: <PrivetRoute><MyMarathons></MyMarathons></PrivetRoute>
            },
            {
                path:'/myApplyList',
                element: <PrivetRoute><MyApplyList></MyApplyList></PrivetRoute> 
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },{
        path:'*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;