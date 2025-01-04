import About from "../components/About";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import UpCommingEvent from "../components/UpCommingEvent";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <UpCommingEvent></UpCommingEvent>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;