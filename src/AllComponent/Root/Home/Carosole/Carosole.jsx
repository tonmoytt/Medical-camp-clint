import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img from './../../../../assets/Images/benner2.jpg'
import img2 from './../../../../assets/Images/banner1.jpg'
import img3 from './../../../../assets/Images/mainbenner.jpg'
import img4 from './../../../../assets/Images/banner3.jpg'
import img5 from './../../../../assets/Images/benner4.jpg'







const Carosole = () => {
    return (
        <div className="px-8 py-8 bg-teal-50">
            <div className="px-8 py-8 bg-amber-100">


                <Carousel  >
                    <div>
                        <img src={img} />
                        <p className="legend">Free medical Camp</p>
                    </div>
                    <div>
                        <img src={img2} />
                        <p className="legend">LAB ReSearch</p>
                    </div>
                    <div>
                        <img src={img3} />
                        <p className="legend">HealthCare</p>
                    </div>
                    <div>
                        <img src={img4} />
                        <p className="legend">Medicine </p>
                    </div>
                    <div>
                        <img src={img5} />
                        <p className="legend">Professors</p>
                    </div>

                </Carousel>
            </div>
        </div>
    );
};

export default Carosole;