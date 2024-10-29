import React, { Component } from 'react'
import "./Footer.css"
import { Container, Row, Col} from "react-bootstrap"
import { FaInstagram, FaTelegram } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
            <Row>
                <Col xm={12} sm={6} md={4} lg={3} className='mt-4'>
                    <h5 className="footer-title">شبکه های اجتماعی</h5>
                    <div className="mt-3">
                        <a href="#" className='a-link'>@sabzLearn_</a>
                        <FaInstagram className='instagram-icon'></FaInstagram>
                    </div>
                    <div className="mt-3">
                        <a href="#" className='a-link'>@sabzLearn</a>
                        <FaTelegram className='telegram-icon'></FaTelegram>
                    </div>
                </Col>
                <Col xm={12} sm={6} md={4} lg={3} className='mt-4'>
                    <h5 className="footer-title">لینک های مفید</h5>
                    <ul className="mt-3">
                        <li className='footer-link'><a href="#" className='a-link'>آموزش جاوااسکریپت</a></li>
                        <li className='footer-link my-3'><a href="#" className='a-link'>آموزش پایتون</a></li>
                        <li className='footer-link'><a href="#" className='a-link'>آموزش HTML</a></li>
                        <li className='footer-link my-3'><a href="#" className='a-link'>آموزش CSS</a></li>
                    </ul>
                </Col>
                <Col xm={12} sm={6} md={4} lg={3} className='mt-4'>
                    <h5 className="footer-title">دسترسی سریع</h5>
                    <ul className="mt-3">
                        <li className='footer-link'><a href="#" className='a-link'>قوانین و مقررات</a></li>
                        <li className='footer-link my-3'><a href="#" className='a-link'>ارسال تیکت</a></li>
                        <li className='footer-link'><a href="#" className='a-link'>همه دوره ها</a></li>
                    </ul>
                </Col>
                <Col xm={12} sm={6} md={4} lg={3} className='mt-4'>
                    <h5 className="footer-title">درباره ما</h5>
                    <p className="mt-3 about-us">سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند</p>
                </Col>
                <hr />
            </Row>
            <Row>
                <Col xs={12} sm={6} className='text-start'>
                    <span className='copy-right'>کلیه حقوق مادی و معنوی سایت برای سبز لرن محفوظ است.</span>
                </Col>
                <Col xs={12} sm={6}  className='text-end'>
                    <span className="website-name">ساخته شده با ❤️ در سبزلرن</span>
                </Col>
            </Row>
        </Container>
      </footer>
    )
  }
}
