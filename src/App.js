import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Home from "./pages/Home";
import OurCourses from "./pages/courses";
import ContactUs from "./pages/contact";
import OurService from "./pages/services";
import AboutUs from "./pages/aboutus";
import RefundCancelPolicy from "./pages/cancelandrefund";
import TermsConditions from "./pages/termsandconstion";
import Privacypolicy from "./pages/privacyPolicy";
import GetTouchWithUs from "./components/common/GetTouchWithUs";
import NotFound from "./pages/notfound";
import CourseDetails from "./pages/courseDetail";
import WebMaintainence from "./pages/webmaintanance";

function App() {
  return (
    <Router >
      {/* basename="/mytech" */}
      <Navbar />
      <Routes>
        <Route path="/mytechreact" element={<Home />} />
        <Route path="/our-courses" element={<OurCourses />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-services" element={<OurService />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/refund-cancel-policy" element={<RefundCancelPolicy />} />
        <Route path="/terms&conditions" element={<TermsConditions />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/course/:category" element={<CourseDetails />} />
        <Route path="/web-maintainence" element={<WebMaintainence />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <GetTouchWithUs />
      <Footer />
    </Router>
  );
}

export default App;
