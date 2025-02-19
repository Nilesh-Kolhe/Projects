import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LoanCard = ({ icon, title, description, route }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm">
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-500 text-base leading-relaxed">{description}</p>
      <div className="flex gap-6">
        <Link to={"/enquiry"} className="no-underline">
          <button className="text-blue-500 text-md font-medium flex items-center hover:text-blue-700 transition-colors">
            Apply Now
            <i className="bi bi-chevron-right w-6 h-6 pt-0.5" />
          </button>
        </Link>
        <Link to={route} className="no-underline">
          <button className="text-emerald-600 text-md font-medium flex items-center hover:text-emerald-700">
            Learn More
            <i className="bi bi-chevron-right w-6 h-6 pt-0.5" />
          </button>
        </Link>
      </div>
    </div>
  </div>
);

// eslint-disable-next-line react/prop-types
const CarouselDots = ({ total, current, onDotClick }) => (
  <div className="flex justify-center gap-2 mt-8">
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        onClick={() => onDotClick(index)}
        className={`h-2 rounded-full transition-all duration-300 ${
          index === current ? "w-8 bg-blue-500" : "w-2 bg-gray-300"
        }`}
      />
    ))}
  </div>
);

const LoanProductsGrid = ({ totalItemsPerPages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = totalItemsPerPages;

  const products = [
    {
      icon: <i className="bi bi-cash-coin text-blue-500" />,
      title: "Personal Loan",
      description: "Quick and easy finances at competitive interest rates.",
      route: "/personalloan",
    },
    {
      icon: <i className="bi bi-building text-blue-500" />,
      title: "Business Loan",
      description: "Get loans upto Rs. 90 lakhs to grow your business.",
      route: "/businessloan",
    },
    {
      icon: <i className="bi bi-house text-blue-500" />,
      title: "Home Loan",
      description: "Affordable Home loan online in less that 10 minute",
      route: "/homeloan",
    },
    {
      icon: <i className="bi bi-car-front text-blue-500" />,
      title: "Vehicle Loan",
      description: "Get up to 95% of your car value and book your dream car.",
      route: "/autovehicleloan",
    },
    {
      icon: <i className="bi bi-credit-card text-blue-500" />,
      title: "Loan Against Property",
      description:
        "Get loans against your property at attractive interest rates.",
      route: "/loanagainstproperty",
    },
    {
      icon: <i className="bi bi-credit-card-2-front text-blue-500" />,
      title: "Commercial Vehicle Loan",
      description: "Get a affordable Commercial Vehicle Loan.",
      route: "/commercialvehicleloan",
    },
    {
      icon: <i className="bi bi-wallet2 text-blue-500" />,
      title: "Working Capital",
      description:
        "Secure and convenient digital wallet for all your transactions.",
      route: "/workingcapital",
    },
    {
      icon: <i className="bi bi-car-front text-blue-500" />,
      title: "Two Wheeler Loan",
      description: "Get your dream two wheeler bike.",
      route: "/twowheelerloan",
    },
  ];

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentPageItems = () => {
    const start = currentPage * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h2 className="text-4lg font-bold font-mono text-center mb-12 text-gray-500">
        Explore Our <span className="text-gray-900">Product's</span>
      </h2>

      <div className="relative">
        <button
          onClick={prevPage}
          className="absolute -left-5 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 transition-colors"
        >
          <i className="bi bi-chevron-left "> </i>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {getCurrentPageItems().map((product, index) => (
            <LoanCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              route={product.route}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          className="absolute -right-5 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 
                  bg-white rounded-full shadow-lg flex items-center justify-center z-10 
                  hover:bg-gray-50 transition-colors"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      <CarouselDots
        total={totalPages}
        current={currentPage}
        onDotClick={setCurrentPage}
      />
    </div>
  );
};

export default LoanProductsGrid;
