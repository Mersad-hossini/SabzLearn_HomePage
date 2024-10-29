import React, { Component } from 'react'
import "./MiniBox.css"
import { Container, Row, Col} from "react-bootstrap"
import { TbBrandPython } from "react-icons/tb";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { SiOpenvpn } from "react-icons/si";
import { HiCodeBracket } from "react-icons/hi2";

export default class LanguageBox extends Component {
  render() {
    return (
      <>
          <Container className='box-container'>
              <Row className='text-end'>
                  <Col xs={12}>
                      <h2>نقشه راه ها</h2>
                  </Col>
                  <Col xs={12}>
                      <p className='top_box-des'>نقشه های راه برای شروع اصولی یادگیری</p>
                  </Col>
              </Row>
              <Row className="gy-3">
                  <Col>
                      <div className="box-wrapper skill-box m-auto">
                          <Row>
                              <Col xs={12}>
                                    <TbBrandPython />
                              </Col>
                              <Col xs={12} className="my-3">
                                <span className="title-box">مهارت های نرم</span>
                              </Col>
                              <Col xs={12}>
                                <span className="course-number">6 دوره</span>
                              </Col>
                          </Row>
                      </div>
                  </Col>

                  <Col>
                      <div className="box-wrapper python-box m-auto">
                          <Row>
                              <Col xs={12}>
                                    <IoExtensionPuzzleOutline />
                              </Col>
                              <Col xs={12} className="my-3">
                                <span className="title-box">پایتون</span>
                              </Col>
                              <Col xs={12}>
                                <span className="course-number">6 دوره</span>
                              </Col>
                          </Row>
                      </div>
                  </Col>

                  <Col>
                      <div className="box-wrapper hack-box m-auto">
                          <Row>
                              <Col xs={12}>
                                    <SiOpenvpn />
                              </Col>
                              <Col xs={12} className="my-3">
                                <span className="title-box">امنیت</span>
                              </Col>
                              <Col xs={12}>
                                <span className="course-number">9 دوره</span>
                              </Col>
                          </Row>
                      </div>
                  </Col>
                  
                  <Col>
                      <div className="box-wrapper frontEnd-box m-auto">
                          <Row>
                              <Col xs={12}>
                                    <HiCodeBracket />
                              </Col>
                              <Col xs={12} className="my-3">
                                <span className="title-box">فرانت اند</span>
                              </Col>
                              <Col xs={12}>
                                <span className="course-number">28 دوره</span>
                              </Col>
                          </Row>
                      </div>
                  </Col>
              </Row>
          </Container>
      </>
    )
  }
}
