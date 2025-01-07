import About from "../components/About";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import UpCommingEvent from "../components/UpCommingEvent";
import { Helmet } from "react-helmet";
import HomeMarathons from "./HomeMarathons";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>RecePoint</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <HomeMarathons></HomeMarathons>
            <ChooseUs></ChooseUs>
            <UpCommingEvent></UpCommingEvent>
        </div>
    );
};

export default Home;