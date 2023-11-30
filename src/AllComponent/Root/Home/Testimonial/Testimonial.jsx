import { useEffect, useState } from "react";
// import Swiper from "swiper";
// import { Navigation } from "swiper/modules";
// import { SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [rating, setrating] = useState(null)
    useEffect(() => {
        fetch('https://medical-camp-server-mu.vercel.app/feedback')
            .then(res => res.json())
            .then(data => {
                setrating(data);
                // console.log(data);
            })

    }, [])
    return (
        <div className="bg-slate-600 pt-6">
            <p className="font-bold text-3xl  text-center">Our Customers review</p>

            <div className="border-3">


                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <div>
                        {
                            rating?.map(ratings => <SwiperSlide key={ratings.Id}>
                                <div className='text-center my-10 mx-auto w-1/2'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={ratings.rating}
                                        readOnly
                                    />
                                </div>

                                <div className='m-20 text-center'>
                                    <p>{ratings.details}</p>
                                    <p className='text-xl font-semibold mt-6'>{ratings.name}</p>
                                </div>

                            </SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>


        </div>
    );
};

export default Testimonial;