import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/Header';
import Footer from '../component/Footer';

function Detail2() {
  const location = useLocation();
  const tv = location.state.tv;

  return (
    <>
      <Header content={h_img} />

      <div className="movie_area_cover">
        <div className="movie_area">
          <div className="image_area">
            <img src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`} alt={`${tv.name}`} />
          </div>
          <div className="detail_area">
            <h1>
              {tv.name}
            </h1>
          </div>
          
        </div>
      </div>

      <div className="movie_bottom_cover">
        <div className="movie_bottom">
          <div className="info_tab">
            <ul>
              <li><button className="on">상세정보</button></li>
            </ul>
          </div>
          <div className="movie_info cf"> 
            <div className="thumb_img">
              <img src={`https://image.tmdb.org/t/p/original${tv.poster_path}`} alt={`${tv.name}`} />
            </div>
            <div className="movie_desc">
              <h2>{tv.name}</h2>
              <p>{tv.overview}</p>
              <table className="table">
                <tbody>
                  <tr>
                    <th>개봉일</th>
                    <td>{tv.first_air_date}</td>
                  </tr>
                  <tr>
                    <th>평점</th>
                    <td>{tv.vote_average.toFixed(1)}점</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer content={f_img} />
    </>
  )
}

export default Detail2

const h_img = {
  h_img1: "./image/index/down_arrow.png",
  h_img2: "./image/index/logo.svg",
  h_img3: "./image/index/search.svg",
}

const f_img = {
  f_img1: "./image/index/footer_logo.svg",
  f_img2: "./image/index/facebook.png",
  f_img3: "./image/index/naver.png",
}