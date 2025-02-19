import LoanCalculator from "../components/LoanCalculator";

const BusinessLoan = () => {
  return (
    <div>
      <LoanCalculator
        defaultLoanType="Business Loan"
        allowLoanTypeChange={false}
        minAmount={100000}
        maxAmount={1000000000}
        minDuration={2}
        maxDuration={28}
        minInterest={13.99}
        maxInterest={28}
      />
    </div>
  );
};

export default BusinessLoan;
