import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Layout from "./components/Layout";
import News from "./components/News/News";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/news" element={<News/>}/>
    </Routes>
      {/* <Navbar />
      <HeaderCarousel />
      <NavbarCard />
      <h1>hello world</h1> */}
    </>
  );
}

export default App;
