import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Oferecemos from "./pages/Oferecemos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FaleConosco from "./pages/faleConosco";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/oferecemos" element={<Oferecemos />} />
            <Route path="/fale-conosco" element={<FaleConosco />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}