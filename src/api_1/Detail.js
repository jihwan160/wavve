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
            <p>장르 : {movie.genre_ids}</p>
            {/* 878 sf
                28 액션
                12 모험
                14 판타지
                18 드라마
                36 역사
                35 코미디
                53 스릴러
                80 범죄
                10751 가족
                27 공포
                9648 미스터리
                16 애니메이션
                10402 로맨스 */}
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Detail