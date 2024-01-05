import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/Header';
import './Detail.scss'
import Footer from '../component/Footer';

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
          </div>
          
        </div>
      </div>

      <div class="movie_bottom_cover">
        <div class="movie_bottom">
          <div class="info_tab">
            <ul>
              <li><button class="on">상세정보</button></li>
            </ul>
          </div>
          <div class="movie_info cf"> 
            <div class="thumb_img">
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.title}`} />
            </div>
            <div class="movie_desc">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <table class="table">
                <tbody>
                  <tr>
                    <th>개봉일</th>
                    <td>{movie.release_date}</td>
                  </tr>
                  <tr>
                    <th>평점</th>
                    <td>{movie.vote_average.toFixed(1)}점</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Detail