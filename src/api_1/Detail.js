import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/Header';
import './Detail.scss'

function Detail() {
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <>
      <Header />

      <div className="movie_area_cover">
        <div className="movie_area">
          <div className="image_area">
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={`${movie.title}`} />
          </div>
          <div className="detail_area">
            <h1>
              {movie.title}
            </h1>
            <p>개봉날짜 : {movie.release_date}</p>
            <p>평점 : {movie.vote_average.toFixed(1)}점</p>
            <p className='overview'>줄거리 : {movie.overview}</p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Detail