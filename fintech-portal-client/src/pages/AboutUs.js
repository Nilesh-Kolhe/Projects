import React, { useRef, useEffect } from "react";
import { Building2, Users, TrendingUp, Award } from "lucide-react";

const AboutUs = () => {
  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.scrollIntoView({ behavior: "instant" });
  }, []);

  const stats = [
    { number: "2005", label: "Founded", icon: Building2 },
    { number: "1000+", label: "Dreams Fulfilled", icon: Users },
    { number: "₹100Cr+", label: "Loans Disbursed", icon: TrendingUp },
    { number: "15+", label: "Years of Trust", icon: Award },
  ];

  return (
    <div ref={refContainer} className="min-h-screen mt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-violet-600 to-violet-400 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl md:text-2xl max-w-3xl opacity-90">
            Empowering dreams through accessible financial solutions since 2005
          </p>
        </div>
      </div>
      {/* Stats Section */}
      <div className=" py-12 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-violet-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=" bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                The dynamic journey of Frontiernext is hinged on one simple
                philosophy :
                <span className="font-semibold text-violet-700">
                  {" "}
                  Everyone deserves to live their lives to their fullest
                  potential.
                </span>
              </p>

              <div className="space-y-6 text-gray-600">
                <p>
                  The seed that was sown way back in 2005 by three passionate
                  individuals from the banking sector has reaped numerous
                  milestones as we walk through the journey of making
                  transformative impact in the lives of people. Yet, the most
                  valuable asset we've reaped is the unwavering faith of our
                  customers borne from our credibility to help them make
                  responsible decisions about their finance.
                </p>

                <p>
                  Over the years our services have enhanced, we have evolved and
                  our business has grown. But what has remained as solid as a
                  rock is our core philosophy of making loans accessible to
                  people from all walks of life. 1000 fulfilled dreams across
                  the country and crores of loans later, we give ourselves a pat
                  on the back knowing someone, somewhere is living a life of
                  their dreams with the support of Frontiernext.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To make financial services accessible, affordable, and
                  transparent for all.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be India's most trusted and innovative financial services
                  partner.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Our Values
                </h3>
                <p className="text-gray-600">
                  Integrity, Innovation, and Customer-First approach in
                  everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
