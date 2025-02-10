import React from "react";
import { Shield, Clock, DollarSign, Briefcase, Target } from "lucide-react";
import { Link } from "react-router-dom";

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="p-6">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-purple-100 rounded-lg">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const PersonalLoan = () => {
  const benefits = [
    {
      icon: Target,
      title: "Versatile Usage",
      description:
        "You can use the loan amount for anything you want, such as paying for a dream vacation, covering medical bills, or consolidating debt.",
    },
    {
      icon: Shield,
      title: "No Risk to Assets",
      description:
        "Since personal loans are unsecured, collateral is not required. Without the need for collateral, there’s no risk to your personal assets, making it a safe borrowing option.",
    },
    {
      icon: Clock,
      title: "Quick Access to Funds",
      description:
        "You can access a lump sum amount as quickly as 24-36 hours. This flexibility allows you to cover immediate financial needs or emergencies without delay.",
    },
    {
      icon: DollarSign,
      title: "Fixed Monthly Payments",
      description:
        "Fixed monthly payments allow you to create a budget and plan for other expenses throughout the loan term, keeping your finances stable",
    },
    {
      icon: Briefcase,
      title: "Available for All Professionals",
      description:
        "Personal loans for salaried and self-employed individuals offer flexible financial solutions customized to meet diverse income needs. This ensures access to low-risk funds and helps manage finances effectively.",
    },
    {
      icon: Shield,
      title: "No Risk to Assets",
      description:
        "Unsecured loan with no collateral requirement, ensuring your personal assets remain protected.",
    },
  ];

  return (
    <div className="max-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits of Personal Loan
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why our personal loans are the smart choice for your
            financial needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/enquiry" className="text-decoration-none text-white">
            <button
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium 
                            hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Apply Now
            </button>
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Quick approval process • Competitive rates • Transparent terms
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoan;
