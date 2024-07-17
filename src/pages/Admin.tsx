import React from "react";

const Admin = () => {
  return (
    <div>
      <button className="p-4 rounded-md bg-lightMain text-main font-bold">
        Tạo cửa hàng
      </button>

      <div>
        <a className="py-4" href="#">
          <div className="relative my-4 border hover:border-main p-4 rounded-md">
            <div>
              <p className="text-main font-bold uppercase">Cửa hàng 1</p>
              <div className="bg-lightMain w-fit px-4 rounded-full text-main">
                Bình thường
              </div>
            </div>
            <button className="absolute right-4 top-10 text-rose-600 px-4 rounded-full font-semibold">
              Huỷ kích hoạt
            </button>
          </div>
        </a>

        <a className="py-4" href="#">
          <div className="relative my-4 border hover:border-main p-4 rounded-md">
            <div>
              <p className="text-main font-bold uppercase">Cửa hàng 1</p>
              <div className="bg-lightMain w-fit px-4 rounded-full text-main">
                Bình thường
              </div>
            </div>
            <button className="absolute right-4 top-10 text-rose-600 px-4 rounded-full font-semibold">
              Huỷ kích hoạt
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Admin;
