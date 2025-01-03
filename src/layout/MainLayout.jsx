import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";


const MainLayout = () => {
    return (
        <div >
            <div className="max-w-7xl mx-auto ">

                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;