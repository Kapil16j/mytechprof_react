import React, { useState } from "react";
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
import Sidebar from "./components/common/Sidebar";
import { DownToUpLogo } from "./components/common/icon";
import ScrollToTop from "./components/common/scrolltotop";
import ServicesDetails from "./pages/servicesDetail";
import ProductDetails from "./pages/productDetail";
import SolutionPage from "./pages/solution";
import SolutionDetailPage from "./pages/solutiondetails";
import ClientsPage from "./pages/clients";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Router >
      <div
        onClick={scrollToTop}
        className="animate-bounce  cursor-pointer z-[99999999999] fixed right-5 bottom-5"
      >
        <DownToUpLogo />
      </div>
      <ScrollToTop />  
      {/* scroll to top is used to when change route going to top */}
      <Navbar setSidebarOpen={setSidebarOpen} />
      <Sidebar setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mytechreact" element={<Home />} />
        <Route path="/mytechpro" element={<Home />} />
        
        <Route path="/our-courses" element={<OurCourses />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-services" element={<OurService />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/refund-cancel-policy" element={<RefundCancelPolicy />} />
        <Route path="/terms&conditions" element={<TermsConditions />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/course/:category" element={<CourseDetails />} />
        <Route path="/services/:category" element={<ServicesDetails />} />
        <Route path="/products/:category" element={<ProductDetails />} />
        <Route path="/solutions" element={<SolutionPage />} />
        <Route path="/solutions/:category" element={<SolutionDetailPage />} />
        <Route path="/web-maintainence" element={<WebMaintainence />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <GetTouchWithUs />
      <Footer />
    </Router>
  );
}

export default App;
