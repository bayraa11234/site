import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Layout from "./components/Layout";
import News from "./components/News/News";
import NotFound from "./components/NotFound";
import ContuctUs from "./components/ContuctUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/activity" element={<News />} />
        <Route path="/contuctUs" element={<ContuctUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
