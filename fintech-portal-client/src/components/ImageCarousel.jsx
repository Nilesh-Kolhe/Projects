import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { X, ArrowRight } from "lucide-react";

import img1 from "../pages/images/CarLoan.png";
import img2 from "../pages/images/banner2.png";
import img3 from "../pages/images/HomeLoanBanner.png";
import img4 from "../pages/images/ArtboardBanner.png";
import img5 from "../pages/images/Untitled_design_3.PNG";
import img6 from "../pages/images/ivan-samkov.jpg";
import img7 from "../pages/images/ekaterina-bolovtsova.jpg";

const ImageCarousel = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    accessibility: true,
    adaptiveHeight: true,
  };

  const images = [
    {
      label: "Personal Loan",
      path: img1,
      route: "/personalloan",
      description: "Avail pre-approved Personal Loan",
      subText: "in 3 easy steps!",
      emi: "₹94/day*",
    },
    {
      label: "Business Loan",
      path: img2,
      route: "/businessloan",
      description: "Grow your business with",
      subText: "flexible business loans",
      emi: "₹150/day*",
    },
    {
      label: "Home Loan",
      path: img3,
      route: "/homeloan",
      description: "Make your dream home a reality",
      subText: "with affordable EMIs",
      emi: "₹200/day*",
    },
    {
      label: "Car Loan",
      path: img4,
      route: "/carloan",
      description: "Drive your dream car today",
      subText: "with instant approval",
      emi: "₹120/day*",
    },
    {
      label: "Education Loan",
      path: img5,
      route: "/educationloan",
      description: "Invest in your future",
      subText: "with education loans",
      emi: "₹80/day*",
    },
    {
      label: "Property Loan",
      path: img6,
      route: "/propertyloan",
      description: "Unlock the value of your property",
      subText: "with easy loans",
      emi: "₹175/day*",
    },
    {
      label: "Working Capital Loan",
      path: img7,
      route: "/workingcapitalloan",
      description: "Unlock the value of your property",
      subText: "with easy loans",
      emi: "₹175/day*",
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto px-0 z-20">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative">
              <div className="relative aspect-w-16 aspect-h-7 overflow-hidden rounded-3xl">
                <img
                  src={image.path}
                  alt={image.label}
                  className="w-full h-[500px] object-fill"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
                  <div className="absolute top-1/4 left-16 text-white">
                    <h2 className="text-4xl font-bold mb-2">
                      {image.description}
                    </h2>
                    <p className="text-xl mb-4">{image.subText}</p>
                    <div className="mb-6">
                      <div className="inline-block bg-blue-600 rounded-lg p-3 mb-2">
                        <span className="text-sm">EMI Starts from</span>
                        <div className="text-2xl font-bold">{image.emi}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(image.route)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                    >
                      Apply Now
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {showNotification && (
        <div className="container mx-auto -mt-3 z-0">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-3 rounded-b-lg">
            <div className="flex flex-col md:flex-row justify-end items-center space-y-4 md:space-y-0">
              <div className="w-full mr-12 md:w-auto text-center md:text-right">
                <Link
                  to="/track"
                  className="text-white inline-flex no-underline items-center"
                >
                  <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    // onClick={() => navigate("/track")}
                    className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-center 
                                text-sm font-semibold uppercase inline-flex items-center gap-2 text-white rounded-xl
                                shadow-lg shadow-green-500/30 transition-all duration-300 ease-in-out
                                hover:shadow-violet-500/40 hover:translate-y-[-2px] active:translate-y-[1px]
                                px-4 py-3"
                  >
                    Track Application Now
                    <ArrowRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isHovered ? "transform translate-x-1" : ""
                      }`}
                    />
                  </button>
                </Link>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="absolute top-2 right-2 md:relative md:top-0 md:right-0 hover:text-gray-200"
                aria-label="Close notification"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;