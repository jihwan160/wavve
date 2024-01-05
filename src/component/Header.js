import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header({content}) {
  return (
    <header>
      <div className="header">
        <div className="header_info">
          <div className="header_info_list">
            <ul className="cf">
              <li><Link to="#">이벤트</Link></li>
              <li><Link to="#">웨이브온</Link></li>
              <li><Link to="#">쿠폰·코인<span><img src={content.h_img1} alt="down_arrow" /></span></Link></li>
              <li><Link to="#">이용권</Link></li>
              <li><Link to="#">로그인</Link></li>
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
                <li><Link to="#">홈</Link></li>
                <li><Link to="#">카테고리</Link></li>
                <li><Link to="#">LIVE</Link></li>
                <li><Link to="#">MY</Link></li>
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