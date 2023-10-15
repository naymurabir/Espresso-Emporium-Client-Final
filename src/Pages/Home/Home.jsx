import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div className="text-center">
            <Banner></Banner>
            <Features></Features>
            <Products></Products>

        </div>
    );
};

export default Home;