import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import fnt from "../pages/images/fnt.jpeg";

const TopNav = () => {
  const navigate = useNavigate();
  const route = window.location.href.split("/")[3];
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const productItems = [
    { label: "Personal Loan", path: "/personalloan" },
    { label: "Business Loan", path: "/businessloan" },
    { label: "Home Loan", path: "/homeloan" },
    { label: "Auto Loan", path: "/autoloan" },
    { label: "Loan Againest Property", path: "/loanagainestproperty" },
    { label: "Commercial Vehicle Loan", path: "/commercialvehicleloan" },
    { label: "Working Capital Loan", path: "/workingcapitalloan" },
  ];

  const navItems = [
    { label: "Home", path: "/landing" },
    {
      label: "Our Products",
      path: "/personalloan",
      hasDropdown: true,
      dropdownItems: productItems,
    },
    { label: "About Us", path: "/aboutus" },
    { label: "Contact Us", path: "/contact" },
    { label: "Track", path: "/track" },
    { label: "Refer & Earn", path: "/refer" },
  ];

  return (
    <nav className="container bg-gradient-to-r from-blue-500 to-blue-700 sticky top-5 z-50 rounded-4">
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
            <h5 className="ml-3 mt-2.5 text-white font-serif font-light hidden xl:text-lg md:block md:text-xs">
              Capital Flex
            </h5>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <div key={item.path} className="relative">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onMouseEnter={() => setIsProductsOpen(true)}
                        onMouseLeave={() => setIsProductsOpen(false)}
                        className={`${
                          route.includes(item.path.slice(1))
                            ? "bg-white text-green-500"
                            : "text-white hover:bg-gray-700"
                        } px-3 py-2 rounded-md text-sm font-medium transition-colors 
                        duration-200 flex items-center`}
                      >
                        {item.label}
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isProductsOpen && (
                        <div
                          onMouseEnter={() => setIsProductsOpen(true)}
                          onMouseLeave={() => setIsProductsOpen(false)}
                          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                        >
                          <div className="py-1">
                            {item.dropdownItems.map((dropdownItem) => (
                              <button
                                key={dropdownItem.path}
                                onClick={() => navigate(dropdownItem.path)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {dropdownItem.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => navigate(item.path)}
                      className={`${
                        route.includes(item.path.slice(1))
                          ? "bg-white text-green-500"
                          : "text-white hover:bg-gray-700"
                      } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
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
                className="h-6 w-6"
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
              <div key={item.path}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className={`${
                        route.includes(item.path.slice(1))
                          ? "bg-white text-green-500"
                          : "text-white hover:bg-gray-900"
                      } px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 flex items-center justify-between`}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transform ${
                          isProductsOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isProductsOpen && (
                      <div className="pl-4">
                        {item.dropdownItems.map((dropdownItem) => (
                          <button
                            key={dropdownItem.path}
                            onClick={() => {
                              navigate(dropdownItem.path);
                              setIsOpen(false);
                              setIsProductsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-gray-900 rounded-md"
                          >
                            {dropdownItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
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
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
