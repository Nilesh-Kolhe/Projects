import { useState } from "react";
import { LOAN_LIMITS } from "./LoanConstants";
import EMICalculator from "./EMICalculator";
import EligibilityCalculator from "./EligibilityCalculator";

const FinancialCalculator = () => {
  const [activeCalculator, setActiveCalculator] = useState("emi");
  const [loanType, setLoanType] = useState("Personal Loan");

  // const loanTypes = Object.keys(LOAN_LIMITS);
  const currentLimits = LOAN_LIMITS[loanType];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="font-bold mb-2 font-serif text-cyan-700">
          Financial Tools
        </h2>
        <p className="text-xl font-medium text-gray-600">
          Explore our tools to help you make informed financial decisions
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        {/* <div className="relative">
          <select
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            className="px-8 h-12 rounded-xl focus:ring-2
                    placeholder:text-slate-400
                    text-slate-700 text-sm border border-slate-200
                    py-2 transition duration-300
                    ease focus:outline-none focus:border-slate-400
                    hover:border-slate-400 focus:shadow-md 
                    appearance-none cursor-pointer
                    bg-white/80 backdrop-blur-sm
                    w-60 sm:w-80 shadow-md"
          >
            {loanTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <svg
            className="h-6 w-2 ml-1 absolute top-3 right-4 text-slate-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div> */}

        <div className="flex gap-2">
          <button
            onClick={() => setActiveCalculator("emi")}
            className={`${
              activeCalculator === "emi"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } my-auto h-10 px-4 rounded-xl transition-colors`}
          >
            EMI Calculator
          </button>
          <button
            onClick={() => setActiveCalculator("eligibility")}
            className={`${
              activeCalculator === "eligibility"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } my-auto h-10 px-4 rounded-xl transition-colors`}
          >
            Eligibility Calculator
          </button>
        </div>
      </div>

      {activeCalculator === "emi" ? (
        <EMICalculator loanType={loanType} {...currentLimits} />
      ) : (
        <EligibilityCalculator loanType={loanType} {...currentLimits} />
      )}

      <p className="text-sm text-gray-500 mt-4">
        Disclaimer: The aforementioned values, calculations and results are for
        illustrative and informational purposes only and may vary basis various
        parameters laid down by the lender.
      </p>
    </div>
  );
};

export default FinancialCalculator;
