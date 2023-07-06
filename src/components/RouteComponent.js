import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Accommodation from "../pages/Accommodation";
import Error404 from "../pages/Error404";

function RouteComponent() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accommodation/:id" element={<Accommodation />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default RouteComponent;
