import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import img from './../../../../assets/Images/success7.jpg'
import img2 from './../../../../assets/Images/success8.jpg'
import img3 from './../../../../assets/Images/success3.jpg'
import img4 from './../../../../assets/Images/success4.jpg'
import img5 from './../../../../assets/Images/success5.jpg'
 







const Carosole = () => {
    return (
        <div className="px-8 py-8 bg-teal-50">
            <div className="px-8 py-8 bg-sky-100">


                <Carousel  >
                    <div>
                        <img src={img} />
                        <p className="legend">Free medical Camp</p>
                    </div>
                    <div>
                        <img src={img2} />
                        <p className="legend">Operation</p>
                    </div>
                    <div>
                        <img src={img3} />
                        <p className="legend"> Free Checkup</p>
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