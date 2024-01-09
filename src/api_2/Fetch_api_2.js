import React, { useEffect, useState } from 'react'
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';

import './Fetch_api_2.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

function Fetch_api_2({url_2}) {
  
  const [tvs, setTvs] = useState([])
  
  const option2 = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }

  useEffect(() => {
    fetch(url_2, option2)
      .then(response => response.json())
      .then(response => {
        setTvs(response.results)
      })
  }, []);

  return (
    <>
      <h1 className='title'>
        인기 급상승 TV(주간 기준)
      </h1>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        navigation
      >
        {tvs.map((tv) => {
          return (
          <SwiperSlide key={tv.id} className='sec_swiper_slide'>
            <Link to='/Detail2' state={{tv : tv}}>
              <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} />
            </Link>
          </SwiperSlide>
          )
        })}

      </Swiper>
    </>
  )
}

export default Fetch_api_2