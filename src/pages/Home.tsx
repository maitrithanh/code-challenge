import Carousel from "../components/utils/Carousel";
import CategoryHomeSection from "../components/section/CategoryHomeSection";
import NewProductsHome from "../components/section/NewProductsHome";
import { useLocation } from "react-router-dom";
import { infoShop } from "../hooks/Info";

interface HomeProps {
  handleOpenLogin: () => void;
}

const Home: React.FC<HomeProps> = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  const getInfoShop = infoShop(pathName);

  return (
    <div className="mx-4 lg:max-w-[1306px]">
      <p>{getInfoShop?.shopName}</p>
      <div className="pt-5">
        <Carousel />
      </div>
      <CategoryHomeSection />
      <NewProductsHome shopId={pathName} />
    </div>
  );
};

export default Home;
