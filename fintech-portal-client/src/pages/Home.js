// import axios from 'axios';
import { useState } from "react";
// import Button from "../ui-components/Button";
import ImageCarousel from "../components/ImageCarousel";
import { useNavigate } from "react-router-dom";
import LoanProductsGrid from "../components/LoanProductsGrid";
import HeroSection from "../components/HeroSection";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //     axios.get(`${process.env.REACT_APP_FINTECH_SERVER_URL}/todos`)
  //         .then(response => setTodos(response.data))
  //         .catch(error => console.error(error));
  // }, []);

  return (
    <>
      <div id="home" className="">
        <div className="w-full">
          <div className="container mx-auto px-4">
            <div className="mx-auto">
              <div className=" bg-white shadow-lg rounded-5 pb-3 text-center mx-auto">
                <ImageCarousel />

                <p className="font-semibold text-gray-800 my-6 md:mb-12 px-4 text-sm md:text-lg">
                  Track your application today and get instant updates on your
                  loan application status.
                </p>

                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => navigate("/track")}
                  className="group relative bg-gradient-to-r from-violet-500 to-violet-600 text-center 
                                            text-sm font-semibold uppercase inline-flex items-center gap-2 text-white rounded-xl
                                            shadow-lg shadow-green-500/30 transition-all duration-300 ease-in-out
                                            hover:shadow-violet-500/40 hover:translate-y-[-2px] active:translate-y-[1px]
                                            px-4 py-3.5"
                >
                  Track Now
                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isHovered ? "transform translate-x-1" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <LoanProductsGrid totalItemsPerPages={4} />

        <HeroSection />
        {/* <div className="container mx-auto px-4">
                    <div className='text-center mb-12'>
                        <h1 className='text-6xl font-bold mb-2 font-serif text-cyan-700'>Frontiernext</h1>
                        <p className='text-xl font-medium text-gray-600'>Your Trusted Partner for Loan Guidance</p>
                    </div>
                    
                    <div className='bg-white shadow-lg rounded-xl p-8 text-center mb-12 max-w-3xl mx-auto'>
                        <p className="text-2xl font-light mb-6">Earn on every loan enquiry</p>
                        <button 
                            bg="green" 
                            onClick={() => navigate("/enquiry")}
                            className="bg-green-600 px-4 py-3 text-center text-sm font-semibold inline-block 
                            text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md
                            hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 
                            focus-visible:ring-green-600 focus-visible:ring-offset-2 active:scale-95"
                        >
                            Apply Now
                        </button>
                    </div>
                </div> */}

        <div className="container relative min-h-[40vh] mx-auto px-4 -mt-32">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-2 font-serif text-cyan-700">
              Financial Tools
            </h2>
            <p className="text-xl font-medium text-gray-600">
              Explore our tools to help you make informed financial decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Loan Calculator</h3>
              <p className="text-gray-600 mb-4">
                Calculate your loan payments and interest rates.
              </p>
              <button
                onClick={() => navigate("/loan-calculator")}
                className="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block 
                                        text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md
                                        hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 
                                        focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
              >
                Calculate Now
              </button>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">
                Credit Score Checker
              </h3>
              <p className="text-gray-600 mb-4">
                Check your credit score for free.
              </p>
              <button
                onClick={() => navigate("/credit-score")}
                className="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block 
                                        text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md
                                        hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 
                                        focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
              >
                Check Now
              </button>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Budget Planner</h3>
              <p className="text-gray-600 mb-4">
                Plan your budget and manage your finances.
              </p>
              <button
                onClick={() => navigate("/budget-planner")}
                className="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block 
                                        text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md
                                        hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 
                                        focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
              >
                Plan Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
