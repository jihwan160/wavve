import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header_info">
          <div className="header_info_list">
            <ul className="cf">
              <li><Link to="#">이벤트</Link></li>
              <li><Link to="#">웨이브온</Link></li>
              <li><Link to="#">쿠폰·코인<span><img src="./image/index/down_arrow.png" alt="down_arrow" /></span></Link></li>
              <li><Link to="#">이용권</Link></li>
              <li><Link to="#">로그인</Link></li>
            </ul>
          </div>
        </div>

        <div className="header_gnb">
          <div className="header_gnb_list cf">
            <h1>
              <Link to="/"><img src="./image/index/logo.svg" alt="logo" /></Link>
            </h1>
            <div className="header_gnb_menu">
              <ul className="cf">
                <li><Link to="#">홈</Link></li>
                <li><Link to="#">카테고리</Link></li>
                <li><Link to="#">LIVE</Link></li>
                <li><Link to="#">MY</Link></li>
              </ul>
            </div>
            <div className="search"><Link to="#"><img src="./image/index/search.svg" alt="search" /></Link></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header