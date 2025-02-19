import ImageCarousel from "../components/ImageCarousel";
import LoanProductsGrid from "../components/LoanProductsGrid";
import HeroSection from "../components/HeroSection";
import LoanCalculator from "../components/LoanCalculator";
import FinancialCalculator from "../components/FinancialCalculator";

const Home = () => {
  return (
    <div id="home" className="w-full">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <ImageCarousel />
          <LoanProductsGrid totalItemsPerPages={6} />
          <HeroSection />
          {/* <LoanCalculator /> */}
          <FinancialCalculator />
        </div>
      </div>
    </div>
  );
};

export default Home;
