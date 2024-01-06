import React, { useEffect, useState } from 'react'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';

import './Fetch_api_1.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

function Fetch_api_1({url_1}) {
  
  const [movies, setMovies] = useState([])
  
  const option = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }

  useEffect(() => {
    fetch(url_1, option)
    .then(response => response.json())
    .then(response => {
      setMovies(response.results)
    })
  }, []);
  
  return (
    <>
      <h1 className='title'>
        인기 급상승 영화(주간 기준)
      </h1>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        navigation
      >
        {movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id} className='sec_swiper_slide'>
              <Link to='/Detail' state={{movie: movie}}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
              </Link>
            </SwiperSlide>
        )
      })}
      </Swiper>
    </>
  )

  // return (
  //   <>
  //   {movies.map((movie) => {
  //     return (
  //       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
  //     )
  //   })}
  //   </>
  // )

  // return (
  //   <>
  //     {movies.map((movies) => (
  //       <Api_1
  //         key={movies.id}
  //         poster_path={movies.poster_path}
  //         movies={movies}
  //       >
  //       </Api_1>
  //     ))}
  //   </>
  // )
}

export default Fetch_api_1