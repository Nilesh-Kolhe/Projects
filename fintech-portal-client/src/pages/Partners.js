import SBI from "./images/banks/SBI.png";
import ICICI from "./images/banks/ICICI.png";
import Yes from "./images/banks/Yes.png";
import Indian from "./images/banks/Indian.png";
import Axis from "./images/banks/Axis.png";
import Kotak from "./images/banks/Kotak.png";
import BOI from "./images/banks/BOI.png";
import CBI from "./images/banks/CBI.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Partners = () => {
  const partners = [
    { src: SBI, alt: "SBI Bank" },
    { src: ICICI, alt: "ICICI Bank" },
    { src: Yes, alt: "Yes Bank" },
    { src: Indian, alt: "Indian Bank" },
    { src: Axis, alt: "Axis Bank" },
    { src: Kotak, alt: "Kotak Bank" },
    { src: BOI, alt: "Bank of India" },
    { src: CBI, alt: "Central Bank of India" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
    fade: false,
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    accessibility: false,
    adaptiveHeight: true,
  };

  return (
    <div className=" mx-auto py-12 mt-10 mb-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-gray-500">
            Our <span className="text-gray-900">Partner's</span>
          </h2>
          <p className="italic font-light text-gray-600 text-lg">
            "Empowering your financial journey with trusted partnership from
            leading banks."
          </p>
        </div>
      </div>

      <div className="relative mt-10">
        <div className="mx-auto px-0 z-20">
          <Slider {...settings}>
            {partners.map((image, index) => (
              <div key={index} className="relative">
                <div className="relative aspect-h-7 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[100px] object-fill"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partners;
