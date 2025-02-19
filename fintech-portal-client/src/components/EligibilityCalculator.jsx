import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EligibilityCalculator = ({ loanType, maxAmount }) => {
  const navigate = useNavigate();
  const [employerName, setEmployerName] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState(15000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [loanDuration, setLoanDuration] = useState(1);
  const [durationType, setDurationType] = useState("Yr");
  const [eligibleAmount, setEligibleAmount] = useState(0);

  const employers = [
    "Government",
    "Public Sector",
    "Private Sector",
    "Self Employed",
    "Business Owner",
  ];

  useEffect(() => {
    const calculateEligibility = () => {
      const monthlyDisposableIncome = monthlyIncome - monthlyExpenses;
      const maxEMIAllowed = monthlyDisposableIncome * 0.5; // Assuming 50% of disposable income can go towards EMI
      const months = durationType === "Yr" ? loanDuration * 12 : loanDuration;
      const r = 12 / 100 / 12; // Assuming 12% annual interest rate

      // EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
      // Solving for P (Principal)
      const eligible = Math.round(
        (maxEMIAllowed * (Math.pow(1 + r, months) - 1)) /
          (r * Math.pow(1 + r, months))
      );

      setEligibleAmount(Math.min(eligible, maxAmount));
    };

    calculateEligibility();
  }, [monthlyIncome, monthlyExpenses, loanDuration, durationType]);

  return (
    <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg">
      <div className="space-y-8 shadow-lg rounded-3xl p-8 shadow-slate-600">
        {/* Employer Selection */}
        {/* <div>
          <label className="block text-gray-700 mb-2">Employer name</label>
          <select
            value={employerName}
            onChange={(e) => setEmployerName(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Employer Type</option>
            {employers.map((emp) => (
              <option key={emp} value={emp}>
                {emp}
              </option>
            ))}
          </select>
        </div> */}

        {/* Monthly Income */}
        <div>
          <label className="block text-gray-700 mb-2">Monthly Income</label>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">₹</span>
            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) =>
                setMonthlyIncome(Math.max(15000, Number(e.target.value)))
              }
              className="w-24 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="range"
            min={15000}
            max={500000}
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(Number(e.target.value))}
            className="w-full h-2 mt-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>₹{15000}</span>
            <span>₹{500000}</span>
          </div>
        </div>

        {/* Loan Duration */}
        <div>
          <label className="block text-gray-700 mb-2">Loan Duration</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={loanDuration}
              onChange={(e) =>
                setLoanDuration(Math.max(1, Number(e.target.value)))
              }
              className="w-24 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex border rounded">
              <button
                onClick={() => setDurationType("Yr")}
                className={`px-4 py-2 ${
                  durationType === "Yr"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700"
                }`}
              >
                Yr
              </button>
              <button
                onClick={() => setDurationType("Mo")}
                className={`px-4 py-2 ${
                  durationType === "Mo"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700"
                }`}
              >
                Mo
              </button>
            </div>
          </div>
          <div>
            <input
              type="range"
              min={1}
              max={72}
              value={loanDuration}
              onChange={(e) => setLoanDuration(Number(e.target.value))}
              className="w-full h-2 mt-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>
              {1} {durationType}
            </span>
            <span>
              {72} {durationType}
            </span>
          </div>
        </div>

        {/* Monthly Expenses */}
        <div>
          <label className="block text-gray-700 mb-2">Monthly Expenses</label>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">₹</span>
            <input
              type="number"
              value={monthlyExpenses}
              onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
              className="w-24 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="range"
            min={0}
            max={500000}
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
            className="w-full h-2 mt-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>₹{0}</span>
            <span>₹{500000}</span>
          </div>
        </div>
      </div>

      {/* Final Result */}
      <div className="flex flex-col items-center justify-center p-8">
        <p className="text-xl font-thin">
          You are eligible for a Personal Loan up to
        </p>

        <div className="text-center bg-green-500 mx-auto w-80 text-white pt-2 rounded-lg mb-8">
          <p className="">Eligible Amount</p>
          <p className="font-bold font-sans text-4xl pb-4">₹{eligibleAmount}</p>
        </div>

        {/* <button
          onClick={() =>
            navigate(`/${loanType.toLowerCase().replace(" ", "")}`)
          }
          className="mx-auto mt-4 group relative bg-gradient-to-r from-blue-500 to-blue-600 text-center
                        text-sm font-semibold uppercase inline-flex items-center gap-2 text-white rounded-lg
                        shadow-lg shadow-green-500/30 transition-all duration-300 ease-in-out
                        hover:shadow-blue-500/40 hover:translate-y-[-2px] active:translate-y-[1px]
                        px-6 py-3"
        >
          Apply Now
        </button> */}
      </div>
    </div>
  );
};

export default EligibilityCalculator;
