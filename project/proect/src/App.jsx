import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";

import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

import ChatBot from "./components/ChatBot"; // <-- импортируем чат-бота

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <ChatBot /> {/* <-- добавляем компонент чат-бота */}
    </BrowserRouter>
  );
}

export default App;