import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navlogo from "../../assets/img/logo/navlogo.png";
import { homeRoute, aboutUsRoute, servicesRoute, contactUsRoute, clientsroute } from "./base";


const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const renderNavItems = (items, parentIndex = null) => {
    return (
      <ul className="flex flex-col items-start space-y-2">
        {items.map((item, index) => (
          <li key={index} className="w-full">
            <div className="flex items-center justify-between w-full">
              <Link
                to={item.url}
                className="text-white font-medium text-[16px] transition-all duration-200 ease-in"
              >
                {item.title}
              </Link>
              {item.dropdown && (
                <button
                  onClick={() => toggleDropdown(parentIndex ? `${parentIndex}-${index}` : `${index}`)}
                  className="text-white ml-2"
                >
                  {openDropdown === (parentIndex ? `${parentIndex}-${index}` : `${index}`) ? "-" : "+"}
                </button>
              )}
            </div>
            {item.dropdown && openDropdown === (parentIndex ? `${parentIndex}-${index}` : `${index}`) && (
              <div className="ml-4">
                {renderNavItems(item.items, parentIndex ? `${parentIndex}-${index}` : `${index}`)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

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
            { title: "Integrated University Management System (IUMS)", url: "/products/iums" },
            { title: "Onscreen Evaluation Based Examination System", url: "/products/onscreen_evaluation_system" },
            { title: "eVetConnect", url: "/products/evetconnect" },
            { title: "Digital Document Circulation (DDC)", url: "/products/ddc" },
            { title: "Transport Management System (TMS)", url: "/products/tms" },
            { title: "Public Distribution System (PDS)", url: "/products/pds" },
            { title: "Rural Empowerment Solution (RES)", url: "/products/res" },
            { title: "Urban Development Solution (UDS)", url: "/products/uds" },
            { title: "State Mining & Geology Department Solution", url: "/products/mining_geology" },
            { title: "State Forest Corporations Solution (SFCS)", url: "/products/sfcs" },
            { title: "Defence Solution (EDS)", url: "/products/eds" },
            { title: "Museum and Art Gallery Solution (MAGS)", url: "/products/mags" },
            { title: "State Development Authorities Solution (SDAS)", url: "/products/sdas" },
            { title: "eNFINITY CRM", url: "/products/enfinity_crm" },
            { title: "eDRMS (Document Repository Management System)", url: "/products/edrms" },
            { title: "eNGAGE- (The Digital Workspace for eCollaboration)", url: "/products/engage" },
            { title: "Hospedien", url: "/products/hospedien" },
            { title: "e-Learning Suite (eLMS)", url: "/products/elms" },
          ],
        },
        {
          title: "IT & Infrastructure Products",
          url: "#",
          items: [
            { title: "Biometric Smart Card Solution (BSCS)", url: "/products/bscs" },
            { title: "Data Digitization & e-Book Management", url: "/products/data_digitization_ebooks" },
            { title: "Internet Management & Security Options (IMSO)", url: "/products/imso" },
            { title: "RFID Based Library Automation (LARFID)", url: "/products/larfid" },
            { title: "Digital Information KIOSK (DINFO)", url: "/products/dinfo" },
            { title: "Smart & Virtual Class (EZZY)", url: "/products/ezzysmart_class" },
            { title: "Smart Attendance System (ACTA)", url: "/products/acta" },
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
            { title: "Finance and Accounting", url: "/solutions/finance-and-accounting" },
            { title: "Human Resource Management", url: "/solutions/human-resource-management" },
            { title: "Purchase Management", url: "/solutions/purchase-management" },
            { title: "Operations Management", url: "/solutions/operations-management" },
            { title: "Asset & Inventory Management", url: "/solutions/asset-inventory-management" },
            { title: "Knowledge Management", url: "/solutions/knowledge-management" },
            { title: "CRM - Customer Service, Call Center & Sales Automation", url: "/solutions/crm-customer-service-call-center-sales-automation" },
            { title: "Security & Surveillance", url: "/solutions/security-surveillance" },
            { title: "BI and Data Warehousing", url: "/solutions/bi-data-warehousing" },
            { title: "Geo-Spatial Services & Solutions", url: "/solutions/geo-spatial-services-solutions" },
            { title: "Microsoft Dynamics Business Solution", url: "/solutions/microsoft-dynamics-business-solution" },
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
          title: "Email & Server Solutions",
          url: "#",
          items: [
            { title: "Integrated Online Management System", url: "/services/ioms" },
            { title: "Email Hosting", url: "/services/email_hosting" },
            { title: "Linux Mail Server", url: "/services/linux_mail_server" },
          ],
        },
        {
          title: "Web Services",
          url: "#",
          items: [
            { title: "Web Application", url: "/services/web_application" },
            { title: "Website Hosting", url: "/services/website_hoisting" },
            { title: "Web Designing and Development", url: "/services/web_designing_and_development" },
          ],
        },
      ]
      
    },
    {
      title: "CLIENTS",
      url: clientsroute,
    },
  ];

  return (
    <aside
      className={`w-full bg-[#231E62] h-screen fixed top-0 transition-all duration-200 ease-in z-20 lg:hidden ${
        isSidebarOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="absolute left-5">
        <img src={Navlogo} alt="logo" style={{ height: "150px", width: "150px" }} />
      </div>
      <span
        className="absolute right-3 top-5"
        onClick={() => setSidebarOpen(false)}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 4.75L4.75 11.25M4.75 4.75L11.25 11.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div className="flex flex-col items-start justify-center space-y-4 p-4 h-full">
        {renderNavItems(navlinks)}
      </div>
    </aside>
  );
};

export default Sidebar;
