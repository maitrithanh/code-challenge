import CategoryCard from "../card/CategoryCard";
import { useTranslation } from "react-i18next";

const CategoryHomeSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="homeContent" className="pt-5">
        <div></div>
        <div>
          <h3 className=" uppercase text-xl font-bold text-center">
            {t("Category")}
          </h3>
          <div className="mt-2 pt-5 grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-4">
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
    </>
  );
};

export default CategoryHomeSection;
