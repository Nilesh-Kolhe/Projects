// import axios from 'axios';
// import { useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import { useNavigate } from "react-router-dom";
import LoanProductsGrid from "../components/LoanProductsGrid";
import HeroSection from "../components/HeroSection";
import LoanCalculator from "../components/LoanCalculator";
// import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div id="home" className="w-full">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <ImageCarousel />
          <LoanProductsGrid totalItemsPerPages={6} />
          <HeroSection />
          <LoanCalculator />
        </div>
      </div>
    </div>
  );
};

export default Home;
