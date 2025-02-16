import LoanCalculator from "../components/LoanCalculator";

const BusinessLoan = () => {
  return (
    <div>
      <LoanCalculator
        defaultLoanType="Business Loan"
        allowLoanTypeChange={false}
        minAmount={100000}
        maxAmount={5000000}
        minDuration={2}
        maxDuration={8}
        minInterest={13.99}
        maxInterest={28}
      />
    </div>
  );
};

export default BusinessLoan;
