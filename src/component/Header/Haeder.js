import React, { Component } from "react";
import "./Header.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IoPlayOutline } from "react-icons/io5";

export default class Haeder extends Component {
  render() {
    return (
      <>
        <Container fluid className="mt-5 header-wrapper">
          <Row className="align-items-center">
            <Col lg={7}>
              <img
                src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/svgs/hero-dark.svg"
                style={{height:'auto',width:'100%'}}   
              />
            </Col>

            <Col lg={5} >
              <h1 className="header-title me-5">آکادمی آموزش <br /> برنامه نویسی سبزلرن</h1>
              <p className="header-text me-5">
                با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد
                بگیر و پیشرفت کن
              </p>
              <Row className="d-flex align-items-center">
                <Col className="button-wrapper">
                  <span className="btn-text">دوره های رایگان</span>
                  <button className="free-course">
                    <IoPlayOutline className="play-icon"></IoPlayOutline>
                  </button>
                </Col>
                <Col>
                  <button className="roadr_map_btn">
                    از این مسیر ها شروع کن
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
