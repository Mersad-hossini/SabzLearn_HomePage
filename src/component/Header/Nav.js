import React, { Component } from "react";
import "./Nav.css"
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 
export default class NavbarSite extends Component {
  render() {
    return (
      <>
        <Navbar dir="rtl" expand="lg" className="shadow p-4 navbar-site">
          <Container fluid>
            <Navbar.Brand href="#">
                <img width={80} height={50} src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/logo.webp" alt="sabzlearn" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="my-2 my-lg-0 gap-4 pe-3 navbarScroll"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link className="navbar-link" href="#action1">فرانت اند</Nav.Link>
                <Nav.Link className="navbar-link" href="#action2">امنیت</Nav.Link>
                <Nav.Link className="navbar-link" href="#action2">پایتون</Nav.Link>
                <Nav.Link className="navbar-link" href="#">پی اچ پی</Nav.Link>
                <Nav.Link className="navbar-link" href="#action1">ارتقای مهارت ها</Nav.Link>
                <Nav.Link className="navbar-link" href="#action1">مقالات</Nav.Link>
              </Nav>
                <div className="input-wrapper me-auto">
                  <input type="text" placeholder="چیو میخوای یاد بگیری؟" />
                <a href="#">
                  <IoIosSearch></IoIosSearch>
                </a>
                </div>
                <button className="light-btn mx-3"> 
                   <MdOutlineLightMode></MdOutlineLightMode>
                </button>
                <button className="light-btn"> 
                   <MdOutlinePersonOutline></MdOutlinePersonOutline>
                </button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
