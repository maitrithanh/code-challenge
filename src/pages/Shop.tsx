import React, { useState } from "react";
import Input from "../components/utils/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/utils/Button";
import { formatCurrency } from "../utils/formatCurrency";
import { MdEdit } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

const Shop = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [toggleView, setToggleView] = useState("profile");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      account: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
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
          Hồ sơ
        </button>
        <button
          className={`p-2 px-8 font-bold rounded-md ${
            toggleView === "product"
              ? "bg-lightMain text-main border border-main"
              : "text-gray-600"
          } `}
          onClick={() => setToggleView("product")}
        >
          Sản phẩm
        </button>
      </div>

      {toggleView == "profile" && (
        <div>
          <div className="my-4 flex flex-col gap-4">
            <Input
              id="shopName"
              label={"Tên shop"}
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />

            <div className="flex gap-4">
              <Input
                id="banner1"
                type="file"
                label={"Banner 1"}
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              <Input
                id="banner2"
                type="file"
                label={"Banner 2"}
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              <Input
                id="banner3"
                type="file"
                label={"Banner 3"}
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
          </div>

          <Button
            loading={isLoading}
            label={"Lưu hồ sơ"}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      )}

      {toggleView === "product" && (
        <div>
          <button className="mt-4 p-2 px-8 bg-main rounded-md font-bold text-white">
            Tạo sản phẩm
          </button>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex gap-4 border p-2 rounded-md">
              <div>
                <img src="./products/p1.png" alt="p1" width={80} />
              </div>
              <div className="font-semibold">
                <p className=" text-2xl">Sản phẩm abc</p>
                <div className="flex items-center gap-2 text-xl ">
                  <span className="text-gray-600 line-through">
                    {formatCurrency(123123)}
                  </span>
                  <span className=" text-rose-600 font-semibold">
                    {formatCurrency(123123)}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex gap-4 border p-2 rounded-md">
              <div>
                <img src="./products/p1.png" alt="p1" width={80} />
              </div>
              <div className="font-semibold">
                <p className=" text-2xl">Sản phẩm abc</p>
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
        </div>
      )}
    </div>
  );
};

export default Shop;
