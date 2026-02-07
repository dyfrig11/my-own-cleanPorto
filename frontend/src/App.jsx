import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import GithubFloatingIcon from "./components/GithubFloatingIcon.jsx";

import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import NakaseedGallery from "./pages/NakaseedGallery";
import FreastGallery from "./pages/FreastGallery.jsx";
import BIDTikGallery from "./pages/BIDTikGallery.jsx";
import HiwidigiGallery from "./pages/HiwidigiGallery.jsx";


function App() {
  return (
    <Router>
      {/* HEADER SELALU MUNCUL */}
      <Header />
      <GithubFloatingIcon />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/NakaseedGallery" element={<NakaseedGallery />} />
        <Route path="/FreastGallery" element={<FreastGallery />} />
        <Route path="/BIDTikGallery" element={<BIDTikGallery />} />
        <Route path="/HiwidigiGallery" element={<HiwidigiGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
