import Carosole from "./Carosole/Carosole";
import Footer from "./Footer/Footer";
import Datetime from "./Header/Datetime/Datetime";
import Marque from "./Marque/Marque";
import POst from "./POst/POst";
import Slider from "./Slider/Slider";
import Support from "./Support/Support";
import Testimonial from "./Testimonial/Testimonial";



const Home = () => {
    return (
        <div>
            <Datetime></Datetime>
            <Carosole></Carosole>
            <POst></POst>
            <Support></Support>
            <Slider></Slider>
            <Marque></Marque>
            <Testimonial></Testimonial>
            <Footer></Footer>

        </div>
    );
};

export default Home;