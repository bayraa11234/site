import React from "react";
import Navbar from "../Nabvar/Navbar";
import HeaderCarousel from "../Section/Carousel";
import NavbarCard from "../Section/Card";
import Footer from "./Footer/Footer";
import Choise from "./Choise";
import Form from "./Form";

export default function Layout() {
  return (
    <>
      {" "}
      <Navbar />
      <HeaderCarousel />
      <div className="container">
        <NavbarCard />
        <Choise/>
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
