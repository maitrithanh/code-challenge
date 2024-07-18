import React, { useEffect, useState } from "react";
import Input from "../components/utils/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/utils/Button";
import { formatCurrency } from "../utils/formatCurrency";
import { MdEdit } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { getUser } from "../hooks/Login";
import { getProductMyShop } from "../hooks/ShopProduct";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const Shop = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [toggleView, setToggleView] = useState("profile");
  const navigate = useNavigate();

  const shopId = getUser();

  useEffect(() => {
    if (shopId.role == undefined) {
      navigate("/");
    }
  }, [shopId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      shopName: getUser().shopName,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const { t } = useTranslation();

  return (
    <div>
      <div className="flex gap-4">
        <button
          className={`p-2 px-8 font-bold rounded-md ${
            toggleView === "profile"
              ? "bg-lightMain text-main border border-main"
              : "text-gray-600"
          }`}
          onClick={() => setToggleView("profile")}
        >
          {t("Profile")}
        </button>
        <button
          className={`p-2 px-8 font-bold rounded-md ${
            toggleView === "product"
              ? "bg-lightMain text-main border border-main"
              : "text-gray-600"
          } `}
          onClick={() => setToggleView("product")}
        >
          {t("Product")}
        </button>
      </div>

      {toggleView == "profile" && (
        <div>
          <div className="my-4 flex flex-col gap-4">
            <Input
              id="shopName"
              label={t("ShopName")}
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>

          <Button
            loading={isLoading}
            label={t("SaveProfile")}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      )}

      {toggleView === "product" && (
        <div>
          <div className="flex justify-between items-center">
            <div>
              {t("TotalProduct")}: {getProductMyShop(shopId.shopId).length}
            </div>
            <button className="mt-4 p-2 px-8 bg-main rounded-md font-bold text-white">
              {t("CreateProduct")}
            </button>
          </div>
          {getProductMyShop(shopId.shopId).map((item, index) => {
            return (
              <div key={index} className="mt-4 flex flex-col gap-2">
                <div className="relative flex gap-4 border p-2 rounded-md">
                  <div>
                    <img src="./products/p1.png" alt="p1" width={80} />
                  </div>
                  <div className="font-semibold">
                    <p className=" text-2xl">{item.productName}</p>
                    <div className="flex items-center gap-2 text-xl ">
                      <span className="text-gray-600 line-through">
                        {formatCurrency(123123)}
                      </span>
                      <span className=" text-rose-600 font-semibold">
                        {formatCurrency(123123)}
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-10 right-4 gap-2 flex">
                    <button className="p-2 bg-yellow-100 rounded-md text-yellow-600">
                      <MdEdit size={22} />
                    </button>
                    <button className="p-2 bg-rose-100 rounded-md text-rose-600">
                      <FiTrash2 size={22} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Shop;
