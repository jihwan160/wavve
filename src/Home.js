import React from 'react'
import './Home.scss'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'

function Home() {
  return (
    <div id='wrap'>
      <Header />
      <Main />
      <Footer content={f_img} />
    </div>
  )
}

export default Home

const f_img = {
  f_img1: "./image/index/footer_logo.svg",
  f_img2: "./image/index/facebook.png",
  f_img3: "./image/index/naver.png",
}

