
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img from './../../../../assets/Images/benner2.jpg'
import img1 from './../../../../assets/Images/banner3.jpg'
import img2 from './../../../../assets/Images/benner4.jpg'


const Slider = () => {
    return (
        <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20 mt-10"
      >
        <SwiperSlide> <img src= {img} alt="" /></SwiperSlide>
        <SwiperSlide> <img src= {img1} alt="" /></SwiperSlide>
        <SwiperSlide> <img src= {img2} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        
      </Swiper>
    );
};

export default Slider;