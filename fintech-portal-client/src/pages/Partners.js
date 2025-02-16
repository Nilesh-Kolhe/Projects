// import { useState, useEffect } from "react";
// import axios from "axios";
import SBI from "./images/banks/SBI.png";
import ICICI from "./images/banks/ICICI.png";
import Yes from "./images/banks/Yes.png";
import Indian from "./images/banks/Indian.png";
import Axis from "./images/banks/Axis.png";
import Kotak from "./images/banks/Kotak.png";
import BOI from "./images/banks/BOI.png";
import CBI from "./images/banks/CBI.png";

const Partners = () => {
  // const [todos, setTodos] = useState([]);

  const partners = [
    { src: SBI, alt: "SBI Bank" },
    { src: ICICI, alt: "ICICI Bank" },
    { src: Yes, alt: "Yes Bank" },
    { src: Indian, alt: "Indian Bank" },
    { src: Axis, alt: "Axis Bank" },
    { src: Kotak, alt: "Kotak Bank" },
    { src: BOI, alt: "Bank of India" },
    { src: CBI, alt: "Central Bank of India" },
  ];

  // useEffect(() => {
  //   const todosUri = `${process.env.REACT_APP_FINTECH_SERVER_URL}/todos`;
  //   console.log("Todos URI: ", todosUri);
  //   axios
  //     .get(todosUri)
  //     .then((response) => setTodos(response.data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div className="container mx-auto px-4 py-12 mt-10 mb-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-gray-500">
            Our <span className="text-gray-900">Partners</span>
          </h2>
          <p className="italic font-light text-gray-600 text-lg">
            "Empowering your financial journey with trusted partnership from
            leading banks."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-auto w-full max-w-[240px] object-contain filter hover:brightness-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
