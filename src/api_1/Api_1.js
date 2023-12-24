import React from 'react'
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

function Api_1({ movies,poster_path }) {
  
  const swiper = new Swiper('.swiper', {
    modules: { Navigation },
  });
  
  // < Swiper >
  //   {movies && movies.map(movie => (
  //     <SwiperSlide key={movie.id}>
  //       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
  //     </SwiperSlide>
  //   ))}
  // </Swiper>

  < Swiper >
    <SwiperSlide>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
    </SwiperSlide>

</Swiper>

  // return (
  //   <h3><img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/></h3>
  // )
}

export default Api_1