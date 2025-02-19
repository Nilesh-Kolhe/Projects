import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";

const EMICalculator = ({
  loanType,
  minAmount,
  maxAmount,
  minDuration,
  maxDuration,
  minInterest,
  maxInterest,
}) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(minAmount);
  const [duration, setDuration] = useState(minDuration);
  const [durationType, setDurationType] = useState("Yr");
  const [interestRate, setInterestRate] = useState(minInterest);
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const calculateEMI = () => {
      const p = amount;
      const r = interestRate / (12 * 100);
      const n = durationType === "Yr" ? duration * 12 : duration;

      const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const total = emi * n;

      setMonthlyEMI(Math.round(emi));
      setTotalAmount(Math.round(total));
      setTotalInterest(Math.round(total - p));
    };
    calculateEMI();
  }, [amount, duration, durationType, interestRate]);

  const pieData = [
    { name: "Principal Amount", value: amount },
    { name: "Total Interest", value: totalInterest },
  ];

  const COLORS = ["#2563eb", "#eab308"];

  useEffect(() => {
    setAmount(minAmount);
    setDuration(minDuration);
    setInterestRate(minInterest);
  }, [loanType, minAmount, minDuration, minInterest]);

  return (
    <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg">
      <div className="space-y-8 shadow-lg rounded-3xl p-8 shadow-slate-600">
        {/* Loan Amount Slider */}
        <div>
          <label className="block text-gray-700 mb-2">Loan amount</label>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-500">₹</span>
            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(
                  Math.min(Math.max(e.target.value, minAmount), maxAmount)
                )
              }
              className="w-32 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="range"
            min={minAmount}
            max={maxAmount}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>₹{minAmount.toLocaleString()}</span>
            <span>₹{maxAmount.toLocaleString()}</span>
          </div>
        </div>

        {/* Loan Duration */}
        <div>
          <label className="block text-gray-700 mb-2">Loan duration</label>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="number"
              value={duration}
              onChange={(e) =>
                setDuration(
                  Math.min(Math.max(e.target.value, minDuration), maxDuration)
                )
              }
              className="w-20 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <input
            type="range"
            min={minDuration}
            max={maxDuration}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>
              {minDuration} {durationType}
            </span>
            <span>
              {maxDuration} {durationType}
            </span>
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-gray-700 mb-2">Rate of interest</label>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="number"
              value={interestRate}
              onChange={(e) =>
                setInterestRate(
                  Math.min(Math.max(e.target.value, minInterest), maxInterest)
                )
              }
              className="w-24 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span>%</span>
          </div>
          <input
            type="range"
            min={minInterest}
            max={maxInterest}
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>{minInterest}% p.a</span>
            <span>{maxInterest}% p.a</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between p-8">
        <div>
          <div className="text-center bg-green-500 mx-auto w-60 text-white pt-2 rounded-lg mb-8">
            <p className="">Monthly EMI</p>
            <p className="font-bold font-sans text-4xl pb-4">
              ₹{monthlyEMI.toLocaleString()}
            </p>
          </div>

          <div className="flex flex-col justify-center px-3 shadow-sm rounded-2xl">
            <div className="flex flex-col justify-center items-center">
              <PieChart width={200} height={200}>
                <Pie
                  data={pieData}
                  cx={100}
                  cy={100}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </div>

            <div className="space-y-4 mb-1">
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                  Principal Amount :
                </span>
                <span className="font-bold">₹{amount.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  Total Interest Payable :
                </span>
                <span className="font-bold">
                  ₹{totalInterest.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center font-semibold">
                <span className="flex items-center">
                  Total Amount Payable :
                </span>
                <span className="font-bold">
                  ₹{totalAmount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
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

export default EMICalculator;
