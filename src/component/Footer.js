import React from 'react'
import './Footer.scss'


function Footer({content}) {
  return (
    <footer>
      <div className="footer"> 
        <div className="footer_notice">

        </div>
        <div className="footer_menu">
          <div className="footer_link">
            <ul className="cf">
              <li><a href="#">회사소개</a></li>
              <li><a href="#">인재채용</a></li>
              <li><a href="#">서비스 소개</a></li>
              <li><a href="#">이용약관</a></li>
              <li><a href="#">개인정보 처리방침</a></li>
              <li><a href="#">고객센터</a></li>
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
            <span className="last">통신판매업 정보 공개 : <a href="#" className="info_link">http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020</a></span>
            <br />
            <address>서울특별시 영등포구 여의나루로 60 포스트타워 19층</address>
            <span className="last">전자우편주소 : <a href="#">helpdesk@wavve.com</a></span>
            <span className="copyright">Copyright© 콘텐츠웨이브(주) All rights reserved.</span>
          </div>
          <div className="footer_wavveOn">
            <div className="footer_logo">
              <img src={content.f_img1} alt="footer_logo" />
            </div>
            <select name="wavve_sel" id="wavve_sel">
              <option value="사업자용 웨이브 가입" disabled selected hidden>사업자용 웨이브 가입</option>
              <option value="웨이브온 서비스 소개">웨이브온 서비스 소개</option>
              <option value="웨이브온 PC방 서비스">웨이브온 PC방 서비스</option>
              <option value="웨이브온 도서관 서비스">웨이브온 도서관 서비스</option>
              <option value="웨이브온 병원 서비스">웨이브온 병원 서비스</option>
              <option value="웨이브온 숙박 서비스">웨이브온 숙박 서비스</option>
              <option value="웨이브온 일반 서비스">웨이브온 일반 서비스</option>
            </select>
            <div className="footer_sns">
              <a href="#">
                <img src={content.f_img2} alt="facebook" />
              </a>
              <a href="#">
                <img src={content.f_img3} alt="naver" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer