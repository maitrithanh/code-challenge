import React from "react";
import Carousel from "../components/utils/Carousel";
import CategoryHomeSection from "../components/section/CategoryHomeSection";
import NewProductsHome from "../components/section/NewProductsHome";

interface HomeProps {
  handleOpenLogin: () => void;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="mx-4 lg:max-w-[1306px]">
      <div className="pt-5">
        <Carousel />
      </div>
      <CategoryHomeSection />
      <NewProductsHome />
    </div>
  );
};

export default Home;
