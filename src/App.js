import { BrowserRouter } from "react-router-dom";
import RouteComponent from "./components/RouteComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import sass from "./sass/components/container.module.scss";

function App() {
  return (
    <BrowserRouter>
      <header className={sass.container}>
        <Header />
      </header>
      <main className={sass.container}>
        <RouteComponent />
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
