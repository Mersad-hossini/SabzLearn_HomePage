import React, { Component } from 'react'
import "./SupportsBox.css"
import { Container, Row, Col} from "react-bootstrap"
import { SiGooglemessages } from "react-icons/si";
import { FaClipboardCheck, FaBookOpen } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";

export default class SupportsBox extends Component {
  render() {
    return (
        <Container className="support-section">
            <Row>
                <Col xs={12}>
                    <h2 >ما چه کمکی میتونیم بهت بکنیم</h2>
                </Col>
                <Col xs={12}>
                    <span className='top_box-des'>از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره</span>
                </Col>
            </Row>

            <Row>
                <Col xs={12} className="support-box-wrapper mb-3">
                    <Row>
                        <Col xs={10} className='my-auto'>
                            <h5>پشتیبانی دائمی</h5>
                            <p className='support-text'>هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی.</p>
                        </Col>
                        <Col xs={2} className="box-wrapper my-auto">
                            <SiGooglemessages />
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} className="support-box-wrapper mb-3">
                    <Row>
                        <Col xs={10} className='my-auto'>
                            <h5>سراغ حرفه ای ها رفتیم</h5>                            
                            <p className='support-text'>به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید.</p>
                        </Col>
                        <Col xs={2} className="box-wrapper my-auto">
                            <FaClipboardCheck />
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} className="support-box-wrapper mb-3">
                    <Row>
                        <Col xs={10} className='my-auto'>
                            <h5>تضمین کاملترین محتوا</h5>                            
                            <p className='support-text'>بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.</p>
                        </Col>
                        <Col xs={2} className="box-wrapper my-auto">
                            <FaBookOpen />
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} className="support-box-wrapper mb-3">
                    <Row>
                        <Col xs={10} className='my-auto'>
                            <h5>پروژه محور در راستای بازار کار</h5>                            
                            <p className='support-text'>کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.</p>
                        </Col>
                        <Col xs={2} className="box-wrapper my-auto">
                            <AiOutlineWifi />
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
    )
  }
}
