import Footer from "../common/Footer";
import Navbar from "../common/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;