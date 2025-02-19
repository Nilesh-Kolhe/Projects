import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Clock, Wallet } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-[80vh] overflow-hidden">
      {/* Content */}
      {/* Main Card */}
      <div className="bg-white backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto mb-12 relative overflow-hidden">
        {/* Card Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 to-blue-50/50"></div>
        <div className="container relative mx-auto px-4 pt-20">
          <div className="text-center -mt-24">
            <h1 className="text-5xl md:text-7xl font-bold  bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
              CapitalFlex
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-600 mb-20">
              Your Trusted Partner for Loan Guidance
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8">
              Empowering your financial journey with seamless loan solutions and
              expert guidance
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center gap-3 text-gray-700">
                <Shield className="w-5 h-5 text-cyan-600" />
                <span>Secure Process</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="w-5 h-5 text-cyan-600" />
                <span>Quick Approval</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Wallet className="w-5 h-5 text-cyan-600" />
                <span>Competitive Rates</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex mx-auto justify-evenly items-center mt-10 sm:mt-36">
              <h2 className="text-2xl md:text-3xl font-light text-gray-800">
                Earn on every loan enquiry
              </h2>

              {/* CTA Button */}
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => navigate("/enquiry")}
                className="group relative bg-gradient-to-r from-green-500 to-emerald-600 px-4 sm:py-2 md:px-8 md:py-4 text-center 
                        text-base font-semibold inline-flex items-center gap-2 text-white rounded-xl
                        shadow-lg shadow-green-500/30 transition-all duration-300 ease-out
                        hover:shadow-green-500/40 hover:translate-y-[-2px] active:translate-y-[1px]"
              >
                Apply Now
                <ArrowRight
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isHovered ? "transform translate-x-1" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center mb-20">
          <div className="p-4">
            <div className="text-3xl font-bold text-cyan-700 mb-2">10k+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-cyan-700 mb-2">₹500Cr+</div>
            <div className="text-gray-600">Loans Disbursed</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-cyan-700 mb-2">50+</div>
            <div className="text-gray-600">Bank Partners</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-cyan-700 mb-2">4.8/5</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
