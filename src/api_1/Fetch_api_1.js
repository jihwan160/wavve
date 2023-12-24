import React, { useEffect, useState } from 'react'
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Api_1 from './Api_1';

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
      {movies.map((movies) => (
        <Api_1
          key={movies.id}
          poster_path={movies.poster_path}
          movies={movies.movies}
        >
        </Api_1>
      ))}
    </>
  )
}

export default Fetch_api_1