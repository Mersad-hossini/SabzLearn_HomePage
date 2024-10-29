import React, { Component } from 'react'
import "./Course.css"
import Box from "./Box"
import { Container, Row, Col, Button } from "react-bootstrap"

import { IoMdArrowRoundBack } from "react-icons/io";


export default class Course extends Component {

    constructor(props) {
        super(props)

        this.state = {
            course: [
                {id: 1, img: 'https://sabzlearn.ir/wp-content/uploads/2024/02/Clean-Code-1536x864.webp', title: 'Clean Code برای برنامه نویسان JS', des: 'فرق بین یه برنامه‌نویس تازه‌کار و حرفه‌ای نوع دیدگاه و طرز کدنویسیشونه. برنامه‌نویس', teacher: 'محمدامین سعیدی راد', score: 4.3, students: 254, price: 1100000},

                {id: 2, img: 'https://sabzlearn.ir/wp-content/uploads/2024/02/Plugin-1536x864.webp', title: 'توسعه افزونه مرورگر با جاوااسکریپت', des: 'ما در این دوره، توسعه افزونه های مرورگر رو با پیاده سازی پروژه های کاربردی با دانش فرانت', teacher: 'مهرشاد براتی', score: 5.0, students: 254, price: 1300000 },

                {id: 3, img: 'https://sabzlearn.ir/wp-content/uploads/2024/04/api-1.webp', title: 'درک عمیق مفاهیم API از صفر مطلق', des: 'تو این دوره، دانشجو ها با مفاهیم پایه و اساسی API آشنا میشن و روش های مختلف', teacher: 'معین باغشیخی', score: 3.9, students: 254, price: 950000},

                {id: 4, img: 'https://sabzlearn.ir/wp-content/uploads/2024/02/TELEGRAM-1536x864.webp', title: 'آموزش ساخت ربات تلگرام با PHP', des: 'توی دوره فوق‌العاده جذاب و کاربردی "ربات تلگرام با PHP"، به دنیای عجیب و جذاب ربات', teacher: 'معین باغشیخی', score: 4.7, students: 254, price: 4350000},

                {id: 5, img: 'https://sabzlearn.ir/wp-content/uploads/2024/01/js%D9%BE%D8%B1%D9%88%DA%98%D9%87-1536x864.webp', title: 'پروژه های تخصصی با جاوا اسکریپت برای بازار کار', des: 'هیچ فرقی نمیکنه شما با چه کتابخونه یا فریمورکی کار میکنین. تو این دوره یاد میگیری', teacher: 'محمدامین سعیدی راد', score: 4.1, students: 254, price: 1100000},
                
                {id: 6, img: 'https://sabzlearn.ir/wp-content/uploads/2024/02/library-1536x864.webp', title: 'توسعه کتابخانه با جاوااسکریپت', des: 'توسعه کتابخانه، نمونه کاری قوی برای رزومه شما است و این دوره آموزشی یادگیری چنین', teacher: 'مهرشاد براتی', score: 4.8, students: 254, price: 2300000},

                {id: 7, img: 'https://sabzlearn.ir/wp-content/uploads/2024/03/api-php-1536x864.webp', title: 'آموزش جامع api نویسی با PHP', des: 'API یکی از پر کاربردترین اجزای نرم افزاریه که حتما باید بلد باشی! توی این دوره قراره api', teacher: 'معین باغشیخی', score: 4.8, students: 254, price: 2300000},

                {id: 8, img: 'https://sabzlearn.ir/wp-content/uploads/2024/03/badusb-1.webp', title: 'تست نفوذ با BadUSB', des: 'در این دوره کاربردی ما به مفهوم HID ATTACK و چگونگی پیاده سازی سناریو های جذاب از', teacher: 'اشکان مقدس', score: 4.8, students: 254, price: 2300000},

                {id: 9, img: 'https://sabzlearn.ir/wp-content/uploads/2024/02/nodejs-1536x864.webp', title: 'آموزش حرفه ای NodeJS بدون پیش نیاز', des: 'الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…', teacher: 'محمدامین سعیدی راد', score: 4.8, students: 254, price: 2300000},
            ]
        }
    }

  render() {
    return (
      <>
        <Container>
            <Row>
                <Col xs={12} className='d-flex justify-content-between '>
                    <Button variant='success'>
                        <IoMdArrowRoundBack></IoMdArrowRoundBack>
                        مشاهده همه دوره ها
                    </Button>
                    <h2 className='course-title'>آخرین دوره های سبزلرن</h2>
                </Col>
                <Col className='text-end course-text'>سکوی پرتاپ شما به سمت موفقیت</Col>
            </Row>
            <Row className='mt-5 gy-4'>
                {this.state.course.map(course => (
                    <Box key={course.id} {...course} />
                ))}
            
            </Row>
        </Container>
      </>
    )
  }
}
