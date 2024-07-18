import React from "react";
import ProductCard from "../card/ProductCard";
import { getProductMyShop } from "../../hooks/ShopProduct";
import { useTranslation } from "react-i18next";

const NewProductsHome = ({ shopId }: { shopId: string }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="pt-5">
        <h3 className=" uppercase text-xl font-bold text-center">
          {t("Product")}
        </h3>
        <div className="pt-5 grid grid-cols-5 gap-4">
          {getProductMyShop(shopId).map((item, index) => {
            return (
              <div key={index}>
                <ProductCard
                  link="#"
                  title={item.productName}
                  normalPrice={item.normalPrice}
                  discount={item.discount}
                  img={item.img}
                />
              </div>
            );
          })}
        </div>
        {getProductMyShop(shopId).length <= 0 && (
          <p className="flex justify-center items-center w-full text-2xl text-main">
            {t("NoProductsYet")}
          </p>
        )}
        <div className="flex justify-center">
          <a
            href="#"
            className="px-4 py-2 my-4 text-black font-bold rounded-full text-lg border border-main"
          >
            {t("ViewMore")}
          </a>
        </div>
      </div>
    </>
  );
};

export default NewProductsHome;
