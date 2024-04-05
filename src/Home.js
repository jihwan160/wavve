import React from 'react'
import './Home.scss'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'

function Home() {
  return (
    <div id='wrap'>
      <Header content={h_img} />
      <Main />
      <Footer content={f_img} />
    </div>
  )
}

export default Home

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

