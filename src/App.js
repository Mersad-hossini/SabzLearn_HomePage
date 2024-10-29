import React, { Component } from "react";
import "./App.css"
import NavbarSite from "./component/Header/Nav"
import Haeder from "./component/Header/Haeder"
import Course from "./component/Course/Course"
import LanguageBox from "./component/LanguageBox/MiniBox"
import SupportsBox from "./component/SupportsBox/SupportsBox"
import Footer from "./component/Footer/Footer"

export default class App extends Component {
  render() {
    return (
      <div className="body-container">
        <NavbarSite></NavbarSite>
        <Haeder></Haeder>
        <Course></Course>
        <LanguageBox></LanguageBox>
        <SupportsBox></SupportsBox>
        <Footer></Footer>
      </div>
    );
  }
}
