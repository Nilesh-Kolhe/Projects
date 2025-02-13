import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from "../pages/images/gradient_design_2.PNG";
import img2 from "../pages/images/gradient_design.PNG";
import img3 from "../pages/images/gradient_design_2.PNG";
import img4 from "../pages/images/gradient_design.PNG";

const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [img1, img2, img3, img4];

  return (
    <div className="container mx-auto px-0">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative p-1 transition-all">
            {/* <a href="/" className="block overflow-hidden ease-in-out"> */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover rounded-5"
            />

            {/* </a> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
