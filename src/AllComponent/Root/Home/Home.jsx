import Footer from "./Footer/Footer";
import Marque from "./Marque/Marque";
import Slider from "./Slider/Slider";
import Support from "./Support/Support";
import Testimonial from "./Testimonial/Testimonial";



const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <Marque></Marque>
            <Support></Support>
            <Testimonial></Testimonial>
            <Footer></Footer>

        </div>
    );
};

export default Home;