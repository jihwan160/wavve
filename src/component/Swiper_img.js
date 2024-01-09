import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import './Swiper_img.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Link } from 'react-router-dom';


function Swiper_img({ content }) {
  function notReady(e) {
    e.preventDefault();
    alert("준비중 입니다 죄송합니다");
  }
  return (
    <Swiper 
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className='swiper'
      loop={true}
    >
      <SwiperSlide className='swiper_slide'>
        <Link to="#" onClick={notReady}>
          <img src={content.swiper_img1_1} alt="main_swiper_1_1" className="fir_img"/>
          <img src={content.swiper_img1_2} alt="main_swiper_1_2" className="sec_img" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide'>
        <Link to="#" onClick={notReady}>
          <img src={content.swiper_img2_1} alt="main_swiper_2_1" className="fir_img"/>
          <img src={content.swiper_img2_2} alt="main_swiper_2_2" className="sec_img" />
      </Link>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide'>
        <Link to="#" onClick={notReady}>
          <img src={content.swiper_img3_1} alt="main_swiper_3_1" className="fir_img"/>
          <img src={content.swiper_img3_2} alt="main_swiper_3_2" className="sec_img" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className='swiper_slide'>
        <Link to="#" onClick={notReady}>
          <img src={content.swiper_img4_1} alt="main_swiper_4_1" className="fir_img"/>
          <img src={content.swiper_img4_2} alt="main_swiper_4_2" className="sec_img" />
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}

export default Swiper_img