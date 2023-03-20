import React from "react";
import Navbar from "../Nabvar/Navbar";
import HeaderCarousel from "../Section/Carousel";
import NavbarCard from "../Section/Card";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <>
      {" "}
      <Navbar />
      <HeaderCarousel />
      <div className="container">
        <NavbarCard />
      </div>
      <h1>hello world</h1>
      <Footer />
    </>
  );
}
