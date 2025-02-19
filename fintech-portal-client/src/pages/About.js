import React, { useState, useEffect } from "react";
// import axios from "axios";

import { useNavigate } from "react-router-dom";
import AboutBackground from "./images/Whoweare-1.jpg";

import { ArrowRight } from "lucide-react";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  // const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const todosUri = `${process.env.REACT_APP_FINTECH_SERVER_URL}/todos`;
  //   console.log("Todos URI: ", todosUri);
  //   axios
  //     .get(todosUri)
  //     .then((response) => setTodos(response.data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div className="w-full overflow-hidden shadow-md rounded-3xl -mt-10">
      <div className="p-6">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-100 to-red-200 h-64 rounded-lg">
            <img
              src={AboutBackground}
              alt="About Us"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="space-y-4 container">
            <p className="text-lg">
              <span className="font-bold text-blue-600">CapitalFlex</span> is
              the partner to top Premier Institutions serving you with the best
              possible deals from the basket of loans we provide. Your trust is
              our biggest asset, Something you can bank on!
            </p>

            <div className="flex justify-start">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => navigate("/aboutus")}
                className="group relative bg-gradient-to-r from-blue-500 to-blue-600 
                            text-sm font-semibold uppercase inline-flex items-center gap-2 
                            text-white rounded-xl px-4 py-3.5 shadow-lg 
                            transition-all duration-300 ease-in-out
                            hover:shadow-blue-500/40 hover:-translate-y-0.5
                            active:translate-y-0.5"
              >
                Read More
                <ArrowRight
                  className={`w-5 h-5 transition-transform duration-300
                            ${isHovered ? "translate-x-1" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
