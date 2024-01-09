import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

function Footer({ content }) {
  function notReady(e) {
    e.preventDefault();
    alert("준비중 입니다 죄송합니다");
  }
  return (
    <footer>
      <div className="footer"> 
        <div className="footer_notice">

        </div>
        <div className="footer_menu">
          <div className="footer_link">
            <ul className="cf">
              <li><Link to="#" onClick={notReady}>회사소개</Link></li>
              <li><Link to="#" onClick={notReady}>인재채용</Link></li>
              <li><Link to="#" onClick={notReady}>서비스 소개</Link></li>
              <li><Link to="#" onClick={notReady}>이용약관</Link></li>
              <li><Link to="#" onClick={notReady}>개인정보 처리방침</Link></li>
              <li><Link to="#" onClick={notReady}>고객센터</Link></li>
            </ul>
          </div>
          <div className="footer_copyright">
            <span>콘텐츠웨이브 주식회사</span>
            <span>대표이사 이태현</span>
            <span className="last">고객센터 1599-3709 (평일 09:00~18:00 / 점심시간 12:00~13:00 / 주말 및 공휴일 휴무)</span>
            <br />
            <span>사업자등록번호 220-88-38020</span>
            <span className="last">호스팅서비스제공자 : 마이크로소프트 유한회사, 구글클라우드코리아 유한회사, 아마존웹서비시즈코리아 유한회사</span>
            <br />
            <span>통신판매업 신고번호 : 제 2021-서울영등포-0585호</span>
            <span className="last">통신판매업 정보 공개 : <Link to="#" className="info_link" onClick={notReady}>http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020</Link></span>
            <br />
            <address>서울특별시 영등포구 여의나루로 60 포스트타워 19층</address>
            <span className="last">전자우편주소 : <Link to="#" onClick={notReady}>helpdesk@wavve.com</Link></span>
            <span className="copyright">Copyright© 콘텐츠웨이브(주) All rights reserved.</span>
          </div>
          <div className="footer_wavveOn">
            <div className="footer_logo">
              <img src={content.f_img1} alt="footer_logo" />
            </div>
            <select name="wavve_sel" id="wavve_sel">
              <option value="사업자용 웨이브 가입" hidden>사업자용 웨이브 가입</option>
              <option value="웨이브온 서비스 소개">웨이브온 서비스 소개</option>
              <option value="웨이브온 PC방 서비스">웨이브온 PC방 서비스</option>
              <option value="웨이브온 도서관 서비스">웨이브온 도서관 서비스</option>
              <option value="웨이브온 병원 서비스">웨이브온 병원 서비스</option>
              <option value="웨이브온 숙박 서비스">웨이브온 숙박 서비스</option>
              <option value="웨이브온 일반 서비스">웨이브온 일반 서비스</option>
            </select>
            <div className="footer_sns">
              <Link to="#" onClick={notReady}>
                <img src={content.f_img2} alt="facebook" />
              </Link>
              <Link to="#" onClick={notReady}>
                <img src={content.f_img3} alt="naver" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer