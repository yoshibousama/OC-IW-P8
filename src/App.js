import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import sass from "./sass/components/container.module.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <header className={sass.container}>
        <Header />
      </header>
      <main className={sass.container}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/accommodation/:id" element={<Accommodation />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
