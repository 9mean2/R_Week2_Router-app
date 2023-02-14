import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../About";
import Home from "../Home";
import Contact from "../Contact";
import Works from "../Works";
import Work from "../Work";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="works" element={<Works />} />
        <Route path="works/:id" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
