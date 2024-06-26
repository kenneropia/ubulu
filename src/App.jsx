import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import React from "react";
import Ci from "./pages/ci/Ci";

import University from "./pages/university/University";
import Startup from "./pages/Startup/Startup";
import Talent from "./pages/Talent/Talent";

import Career from "./pages/Career/Career";
import Program from "./pages/Programs/Program";
import Contact from "./pages/Contact/Contact";
import Privacy from "./pages/Privacy/Privacy";
import Webinar from "./pages/Webinar/Webinar";
import Pitch from "./pages/Pitch/Pitch";
import Corporateinnovation from "./pages/Corporate-Innovation/Corporateinnovation";
import BreakPoint from "./components/Breakpoint";
const App = () => {
  return (
    <Router>
      <BreakPoint />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Corporateinnovation />} />
        <Route path="/corporate-innovation" element={<Ci />} />
        <Route path="*" element={<Home />} />
        <Route path="/university" element={<University />} />
        <Route path="/startup-boost" element={<Startup />} />
        <Route path="/community" element={<Talent />} />

        <Route path="/career" element={<Career />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/accelerator-programs" element={<Pitch />} />
        <Route path="/consulting-services" element={<Webinar />} />
      </Routes>
    </Router>
  );
};

export default App;
