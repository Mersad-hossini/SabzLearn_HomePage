import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap"

import { GoPeople } from "react-icons/go";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdStar } from "react-icons/md";

export default class Box extends Component {
  render() {
    let {img, title, des, teacher, score, students, price} = this.props

    return (
      <>
        <Col xs={12} md={4}>
          <Card className="border-0">
            <Card.Img
              variant="top"
              src={img}
              style={{ height: "auto", width: "100%" }}
            />
            <Card.Body className="card-body">
              <Card.Title className="box-title text-end">
                {title}
              </Card.Title>
              <Card.Text className="my-4 box-text text-end">
                {des}
              </Card.Text>
              <Row>
                <Col xs={4}>
                  <MdStar className="star-icon"></MdStar>
                  <span>{score}</span>
                </Col>
                <Col xs={8} className="text-end">
                  <span className="teacher">{teacher}</span>
                  <MdOutlinePersonOutline></MdOutlinePersonOutline>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs={6}>
                  <span className="price">{price}</span>
                </Col>
                <Col xs={6} className="text-end">
                  <span className="student">{students}</span>
                  <GoPeople></GoPeople>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
