import About from "../components/About";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import UpCommingEvent from "../components/UpCommingEvent";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>RecePoint</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <UpCommingEvent></UpCommingEvent>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;