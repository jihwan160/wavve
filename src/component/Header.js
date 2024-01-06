import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header({ content }) {

  return (
    <header>
      <div className="header">
        <div className="header_info">
          <div className="header_info_list">
            <ul className="cf">
              <li>이벤트</li>
              <li>웨이브온</li>
              <li>쿠폰·코인<span><img src={content.h_img1} alt="down_arrow" /></span></li>
              <li>이용권</li>
              <li>로그인</li>
            </ul>
          </div>
        </div>

        <div className="header_gnb">
          <div className="header_gnb_list cf">
            <h1>
              <Link to="/"><img src={content.h_img2} alt="logo" /></Link>
            </h1>
            <div className="header_gnb_menu">
              <ul className="cf">
                <li>홈</li>
                <li>카테고리</li>
                <li>LIVE</li>
                <li>MY</li>
              </ul>
            </div>
            <div className="search"><Link to="#"><img src={content.h_img3} alt="search" /></Link></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header