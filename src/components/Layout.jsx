import React from "react";
import Navbar from "../Nabvar/Navbar";
import HeaderCarousel from "../Section/Carousel";
import NavbarCard from "../Section/Card";
import Footer from "./Footer/Footer";
import Choise from "./Choise";
import Form from "./Form";
// import Slider from "./slider/Slider";
import Tabs from "./Tabs";
// import Scroll from "../components/Scroll"

export default function Layout() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="container">
        <HeaderCarousel />
        {/* <Scroll/> */}
        <Tabs />
        {/* <Slider /> */}
        <img src="up.png" alt="" className="fix" />
        <NavbarCard />
        <Choise />
      </div>
      <div className="bb p-4 ">
        <div className="container d-flex justify-content-end">
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
}
