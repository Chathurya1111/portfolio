import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import ProjectDetails from "./pages/ProjectDetails"

function App() {
  return (
    
    <BrowserRouter>
    <div className="app-container">

      <Navbar />
      <div className="page-content">
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetails />} />

      </Routes>
      </div>
      <Footer/>
      </div>
    </BrowserRouter>
    
  );

}

export default App;