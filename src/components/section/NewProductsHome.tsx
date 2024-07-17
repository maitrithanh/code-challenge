import React from "react";
import ProductCard from "../card/ProductCard";

const NewProductsHome = () => {
  return (
    <>
      <div className="pt-5">
        <h3 className=" uppercase text-xl font-bold text-center">sản phẩm</h3>
        <div className="pt-5 grid grid-cols-5 gap-4">
          <ProductCard
            link="#"
            title="[SET QUÀ TẶNG] Combo Sữa Tắm Dưỡng Thể Hoa Bưởi – Sáng Da Sau 4 Tuần"
            normalPrice={320000}
            discount={0}
            img="/products/p2.png"
          />
          <ProductCard
            link="#"
            title="Combo Trang Điểm 3 Bước (Kem Chống Nắng + Kem Nền + Kem Má)"
            normalPrice={600000}
            discount={16}
            img="/products/p1.png"
          />
          <ProductCard
            link="#"
            title="Nước Tẩy Trang Rau Má Dành Cho Da Dầu Mụn"
            normalPrice={320000}
            discount={0}
            img="/products/p3.jpg"
          />
          <ProductCard
            link="#"
            title="Mặt Nạ Ngừa Mụn Rau Má Dành Cho Da Dầu"
            normalPrice={320000}
            discount={0}
            img="/products/p4.jpg"
          />
          <ProductCard
            link="#"
            title="Kem Dưỡng Ẩm Ngừa Lão Hóa Tơ Tằm – Dưỡng Ẩm Chuyên Sâu Với Coenzym Q10"
            normalPrice={320000}
            discount={0}
            img="/products/p5.jpg"
          />
        </div>

        <div className="flex justify-center">
          <a
            href="#"
            className="px-4 py-2 my-4 text-black font-bold rounded-full text-lg border border-main"
          >
            Xem thêm
          </a>
        </div>
      </div>
    </>
  );
};

export default NewProductsHome;
