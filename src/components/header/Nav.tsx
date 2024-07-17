import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiStorefrontThin } from "react-icons/pi";
import { TfiCommentAlt } from "react-icons/tfi";
import { TbShoppingBag } from "react-icons/tb";
import SuggestionTag from "./SuggestionTag";

interface NavProps {
  handleOpenLogin: () => void;
}

const Nav: React.FC<NavProps> = ({ handleOpenLogin }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <div className="pt-5 pb-5 max-h-20 flex">
            <img src="./logo.svg" alt="" />

            <div className="relative w-[442px] flex items-center">
              <input
                className=" rounded-full h-11 px-3 border border-[rgba(0,0,0,.09)] hover:outline-none focus-within:outline-none w-full"
                type="text"
                placeholder="Bạn muốn tìm gì?"
              />
              <button className=" absolute right-2">
                <CiSearch size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-12 items-center w-full">
            <div className="">
              <a href="#" className="flex items-center gap-1 font-bold">
                <PiStorefrontThin size={28} />
                Hệ thống cửa hàng
              </a>
            </div>

            <div className="">
              <a href="#" className="flex items-center gap-1 font-bold">
                <TfiCommentAlt size={22} />
                Blog
              </a>
            </div>

            <div className="flex items-center font-bold gap-3">
              <button className="bg-transparent" onClick={handleOpenLogin}>
                Đăng nhập / Đăng ký
              </button>
              <div
                className="relative border border-[rgba(0,0,0,.2)] p-2 rounded-full"
                title="Cart"
              >
                <TbShoppingBag size={24} />
                <span className="absolute -top-1 -right-3 bg-red-600 h-[14px] w-[14px] flex justify-center items-center rounded-full text-white p-3 text-sm">
                  10
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <SuggestionTag />
        </div>
      </div>
    </>
  );
};

export default Nav;
