import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navlogo from "../../assets/img/logo/navlogo.png";
import { homeRoute, aboutUsRoute, servicesRoute, contactUsRoute } from "./base";
import Dropdownimg from "../../assets/img/home/down-arrow.png"
import Nextpng from "../../assets/img/home/next.png"

const Navbar = ({ setSidebarOpen }) => {
  const router = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown
  const dropdownRef = useRef(null); // Ref for dropdown container

  const navlinks = [
    {
      title: "HOME",
      url: homeRoute,
    },
    {
      title: "ABOUT US",
      url: aboutUsRoute,
    },
    {
      title: "PRODUCTS",
      url: "#",
      dropdown: true,
      items: [
        {
          title: "EINTITY (ERP, SCM and CRM Suite of Enterprise Expedien Products)",
          url: "#",
          items: [
            { title: "Integrated University Management System (IUMS)", url: "#" },
            { title: "Onscreen Evaluation Based Examination System", url: "#" },
            { title: "eVetConnect", url: "#" },
            { title: "Digital Document Circulation (DDC)", url: "#" },
            { title: "Transport Management System (TMS)", url: "#" },
            { title: "Public Distribution System (PDS)", url: "#" },
            { title: "Rural Empowerment Solution (RES)", url: "#" },
            { title: "Urban Development Solution (UDS)", url: "#" },
            { title: "State Mining & Geology Department Solution", url: "#" },
            { title: "State Forest Corporations Solution (SFCS)", url: "#" },
            { title: "Defence Solution (EDS)", url: "#" },
            { title: "Museum and Art Gallery Solution (MAGS)", url: "#" },
            { title: "State Development Authorities Solution (SDAS)", url: "#" },
            { title: "eNFINITY CRM", url: "#" },
            { title: "eDRMS (Document Repository Management System)", url: "#" },
            { title: "eNGAGE- (The Digital Workspace for eCollaboration)", url: "#" },
            { title: "Hospedien", url: "#" },
            { title: "e-Learning Suite (eLMS)", url: "#" },
          ],
        },
        {
          title: "IT & Infrastructure Products",
          url: "#",
          items: [
            { title: "Biometric Smart Card Solution (BSCS)", url: "#" },
            { title: "Data Digitization & e-Book Management", url: "#" },
            { title: "Internet Management & Security Options (IMSO)", url: "#" },
            { title: "RFID Based Library Automation (LARFID)", url: "#" },
            { title: "Digital Information KIOSK (DINFO)", url: "#" },
            { title: "Smart & Virtual Class (EZZY)", url: "#" },
            { title: "Smart Attendance System (ACTA)", url: "#" },
          ],
        },
      ],
    },
    {
      title: "SOLUTIONS",
      url: "#",
      dropdown: true,
      items: [

        {
          title: "Solutions by Business Function",
          url: "#",
          items: [
            { title: "Finance and Accounting", url: "#" },
            { title: "Human Resource Management", url: "#" },
            { title: "Purchase Management", url: "#" },
            { title: "Operations Management", url: "#" },
            { title: "Asset & Inventory Management", url: "#" },
            { title: "Knowledge Management", url: "#" },
            { title: "CRM - Customer Service, Call Center & Sales Automation", url: "#" },
            { title: "Security & Surveillance", url: "#" },
            { title: "BI and Data Warehousing", url: "#" },
            { title: "Geo-Spatial Services & Solutions", url: "#" },
          ],
        },
        {
          title: "Microsoft Dynamics Business Solution",
          url: "#",
          items: [
            { title: "Overview", url: "#" },
            { title: "Our Offerings", url: "#" },
            { title: "Product Capabilities", url: "#" },
            { title: "Industry Specific", url: "#" },
          ],
        },
      ],
    },
    {
      title: "SERVICES",
      url: servicesRoute,
      url: "#",
      dropdown: true,
      items: [

        {
          title: "",
          url: "#",
          items: [
            { title: "GPS Based Vehicle Tracking", url: "#" },
            { title: "Networking and Wi-Fi", url: "#" },
            { title: "Integrated Communication System", url: "#" },
            { title: "Cloud Services", url: "#" },
          ],
        },
        {
          title: "",
          url: "#",
          items: [
            { title: "Expedien Consulting", url: "#" },
            { title: "Manpower - Technical Resources Offshore/Onsite", url: "#" },
            { title: "Digitization Services", url: "#" },
            { title: "Call Center Establishment", url: "#" },

          ],
        },
      ],
    },
    {
      title: "CLIENTS",
      url: contactUsRoute,
    },
  ];


  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdown if clicking outside
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="flex items-center justify-between py-4 max-w-[1140px] mx-auto px-3 xl:px-0">
        <Link to={homeRoute} passHref>
          <img
            src={Navlogo}
            alt="logo"
            style={{ height: "150px", width: "150px" }}
          />
        </Link>

        <div className="flex items-center">
          <ul className="hidden lg:flex items-center space-x-4 pr-4">
            {navlinks.map((obj, index) =>
              obj.dropdown ? (
                <li key={index} ref={dropdownRef}>
                  <div className="flex justify-center items-center">
                    <p
                      onClick={() => toggleDropdown(obj.title)}
                      className="text-black font-medium text-opacity-70 hover:text-primary hover:text-opacity-100 font-medium text-base transition-all duration-200 ease-in cursor-pointer"
                    >
                      {obj.title}
                    </p>
                    <img src={Dropdownimg} alt="Dropdown Icon" className="w-4" />
                  </div>


                  {activeDropdown === obj.title && (
                    <div className="absolute left-[30%] mt-2 text-white shadow-lg rounded-md w-[800px] bg-[linear-gradient(222.96deg,#231E62_2.41%,#3671CA_99.1%)] max-h-64 h-64 overflow-y-auto">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                        {obj.items.map((item, i) => (
                          <div key={i} className="flex flex-col">
                            {item.title != "" &&
                              <div className="flex items-center">
                                <img src={Nextpng} className="w-4 h-4" alt="Dropdown" />
                                <h1 className="text-white font-semibold px-4 py-2">{item.title}</h1>
                              </div>
                            }

                            {/* Loop through sub-items and create a new column for each */}
                            {item.items && item.items.length > 0 && (
                              <ul className="flex flex-col pl-4">
                                {item.items.map((data, index) => (
                                  <li key={index} className="p-2">
                                    <Link
                                      to={data.url}
                                      className="block text-white hover:text-black text-opacity-80 hover:bg-gray-100"
                                    >
                                      {data.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </ul>
                    </div>
                  )}


                </li>
              ) : (
                <li key={index} className="flex flex-col sm:flex-row">
                  <Link
                    aria-label={obj.title}
                    passHref
                    to={obj.url}
                    className="text-black font-medium text-opacity-70 hover:text-primary hover:text-opacity-100 font-medium text-base transition-all duration-200 ease-in"
                  >
                    {obj.title}
                  </Link>
                </li>
              )
            )}
          </ul>

          <Link to="/contact-us">
            <button className="text-[16px]  shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white  w-[143px] sm:w-[173px] bg-[#231E62] h-[49px] rounded-[2px]">
              Contact us
            </button>
          </Link>

          <span className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 17H21M3 12H21M3 7H21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
