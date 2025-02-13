import { Link, useNavigate } from "react-router-dom";
import fnt from "../pages/images/fnt.jpeg";

import React, { useState } from "react";

const TopNav = () => {
  const navigate = useNavigate();
  const route = window.location.href.split("/")[3];
  const [isOpen, setIsOpen] = useState(false);

  // document.addEventListener("click", (event) => {
  //     var navbar = document.querySelector("nav div.container-fluid div#top-navbar");
  //     var _opened = navbar.classList.contains("show");
  //     if (_opened === true) {
  //         navbar.classList.toggle('show');
  //     }
  // });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: "Personal Loan", path: "/personalloan" },
    { label: "Business Loan", path: "/businessloan" },
    { label: "Home Loan", path: "/homeloan" },
    { label: "Apply", path: "/enquiry" },
    { label: "Track", path: "/track" },
  ];

  return (
    <nav className="container bg-gradient-to-r from-indigo-500 via-purple-500 to-red-300 sticky top-5 z-50 rounded-4">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255, 255, 255, 0.1)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,149.3C960,181,1056,235,1152,256C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={fnt}
                  className="h-14 w-14 rounded-full"
                  alt="Company Logo"
                />
              </Link>
            </div>

            <Link to="/" className="text-decoration-none">
              <h5 className="ml-3 mt-2.5 text-white font-serif font-light hidden xl:text-lg md:block md:text-xs">
                Frontiernext Solutions Private Limited
              </h5>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`${
                    route.includes(item.path.slice(1))
                      ? "bg-white text-green-500"
                      : "text-white hover:bg-gray-900"
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className={`${
                  route.includes(item.path.slice(1))
                    ? "bg-white text-green-500"
                    : "text-white hover:bg-gray-900"
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
