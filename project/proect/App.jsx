import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";

import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Services from "./src/pages/Services";
import Contacts from "./src/pages/Contacts";
import Projects from "./src/pages/Projects";

import ScrollToTop from "./src/components/ScrollToTop";
import NotFound from "./src/pages/NotFound";

import ChatBot from "./src/components/ChatBot"; // <-- импортируем чат-бота

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