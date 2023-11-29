
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img from './../../../../assets/Images/benner2.jpg'
import img2 from './../../../../assets/Images/banner1.jpg'
import img3 from './../../../../assets/Images/mainbenner.jpg'
import img4 from './../../../../assets/Images/banner3.jpg'
import img5 from './../../../../assets/Images/benner4.jpg'
import img6 from './../../../../assets/Images/success6.jpg'
 


const Slider = () => {
    return (
      <div className='mt-6 pt-6 pb-4 bg-fuchsia-50' >
        <hr />
        <div>

      
        <p className='my-6 text-center text-slate-800 text-4xl font-bold'>Our successive moment</p>
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
        <SwiperSlide> <img className='h-[300px] w-[400px]' src= {img} alt="" /></SwiperSlide>
        <SwiperSlide> <img className='h-[300px] w-[400px]' src= {img2} alt="" /></SwiperSlide>
        <SwiperSlide> <img className='h-[300px] w-[400px]' src= {img3} alt="" /></SwiperSlide>
        <SwiperSlide> <img className='h-[300px] w-[400px]' src= {img4} alt="" /></SwiperSlide>
        <SwiperSlide> <img className='h-[300px] w-[400px]' src= {img5} alt="" /></SwiperSlide>
        <SwiperSlide> <img className='h-[300px] w-[400px]' src= {img6} alt="" /></SwiperSlide>
         
        
      </Swiper>
      </div>
      </div>
    );
};

export default Slider;