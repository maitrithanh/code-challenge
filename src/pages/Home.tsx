import React from "react";
import Nav from "../components/header/Nav";
import Carousel from "../components/utils/Carousel";
import CategoryCard from "../components/card/CategoryCard";

interface HomeProps {
  handleOpenLogin: () => void;
}

const Home: React.FC<HomeProps> = ({ handleOpenLogin }) => {
  return (
    <div className="mx-4 lg:max-w-[1306px]">
      <div className="relative flex justify-between w-full">
        <Nav handleOpenLogin={handleOpenLogin} />
      </div>
      <div className="pt-5">
        <Carousel />
      </div>

      <div id="homeContent" className="pt-5">
        <div>
          <h3 className=" uppercase text-xl font-bold">danh mục nổi bật</h3>
          <div className="mt-2 grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-4">
            <CategoryCard
              link="#"
              content="Mỹ phẩm"
              img="./category/cate1.webp"
            />
            <CategoryCard
              link="#"
              content="Chăm sóc cơ thể"
              img="./category/cate2.webp"
            />
            <CategoryCard
              link="#"
              content="Chăm sóc cá nhân"
              img="./category/cate3.webp"
            />
            <CategoryCard
              link="#"
              content="Chăm sóc da"
              img="./category/cate4.webp"
            />
            <CategoryCard
              link="#"
              content="Chăm sóc nhà"
              img="./category/cate5.webp"
            />
            <CategoryCard
              link="#"
              content="Mặt nạ"
              img="./category/cate6.webp"
            />
            <CategoryCard
              link="#"
              content="Kem chống nắng"
              img="./category/cate7.webp"
            />
            <CategoryCard
              link="#"
              content="Răng miệng"
              img="./category/cate8.webp"
            />
            <CategoryCard
              link="#"
              content="Sữa tắm"
              img="./category/cate9.webp"
            />
            <CategoryCard
              link="#"
              content="Nước hoa"
              img="./category/cate10.webp"
            />
            <CategoryCard
              link="#"
              content="Tẩy da body"
              img="./category/cate11.webp"
            />
            <CategoryCard
              link="#"
              content="Dưỡng da"
              img="./category/cate12.webp"
            />
            <CategoryCard
              link="#"
              content="Chăm sóc tóc"
              img="./category/cate13.webp"
            />
            <CategoryCard
              link="#"
              content="Tẩy trang"
              img="./category/cate14.webp"
            />
            <CategoryCard
              link="#"
              content="Vệ sinh"
              img="./category/cate15.webp"
            />
            <CategoryCard
              link="#"
              content="Dưỡng da nam"
              img="./category/cate6.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
