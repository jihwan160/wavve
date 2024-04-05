import React from 'react'
import Swiper_img from './Swiper_img';
import { api_Key } from '../myApi';
import Fetch_api_1 from '../api_1/Fetch_api_1';
import Fetch_api_2 from '../api_2/Fetch_api_2';

import './Main.scss'

function Main() {

  const url_1 = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_Key}&language=ko-KR`
  const url_2 = `https://api.themoviedb.org/3/trending/tv/week?api_key=${api_Key}&language=ko-KR`
  return (
    <main>
      <div className='swiper_img'>
        <Swiper_img content={swiper_img} />
      </div>
      <div className='api_swiper'>
        <Fetch_api_1 url_1={url_1}/>
      </div>
      <div className='api_swiper2'> 
        <Fetch_api_2 url_2={url_2} />
      </div>
    </main>
  )
}

export default Main

const swiper_img = {
  swiper_img1_1: "./image/index/main_swiper_1_1.webp",
  swiper_img1_2: "./image/index/main_swiper_1_2.webp",
  swiper_img2_1: "./image/index/main_swiper_2_1.webp",
  swiper_img2_2: "./image/index/main_swiper_2_2.webp",
  swiper_img3_1: "./image/index/main_swiper_3_1.webp",
  swiper_img3_2: "./image/index/main_swiper_3_2.webp",
  swiper_img4_1: "./image/index/main_swiper_4_1.webp",
  swiper_img4_2: "./image/index/main_swiper_4_2.webp",

}