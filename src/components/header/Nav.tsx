import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiStorefrontThin } from "react-icons/pi";
import { TfiCommentAlt } from "react-icons/tfi";
import { TbShoppingBag } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { getUser, removeUser } from "../../hooks/Login";
// import SuggestionTag from "./SuggestionTag";
import { IoIosLogOut } from "react-icons/io";
import { HiBuildingStorefront } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

interface NavProps {
  handleOpenLogin: () => void;
}

const Nav: React.FC<NavProps> = ({ handleOpenLogin }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");

  const r = getUser();
  useEffect(() => {
    if (r) {
      setRole(r.role);
      setUsername(r.shopName);
    }
  }, [r]);

  const logout = () => {
    removeUser();
    setRole("");
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <div className="pt-5 pb-5 max-h-20 flex">
            <img
              className=" cursor-pointer"
              src="./logo.svg"
              alt="logo"
              onClick={() => navigate("/")}
            />

            <div className="relative w-[442px] flex items-center">
              <input
                className=" rounded-full h-11 px-3 border border-[rgba(0,0,0,.09)] hover:outline-none focus-within:outline-none w-full"
                type="text"
                placeholder={t("WantToSearch")}
              />
              <button className=" absolute right-2">
                <CiSearch size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-12 items-center w-full">
            {role == "shop" ? (
              <div className="">
                <a
                  href="/my-shop"
                  className="flex items-center gap-1 font-bold text-main"
                >
                  <HiBuildingStorefront size={28} />
                  {t("MyStore")}
                </a>
              </div>
            ) : (
              <div className="">
                <a
                  href="/chain-stores"
                  className="flex items-center gap-1 font-bold"
                >
                  <PiStorefrontThin size={28} />
                  {t("ChainStores")}
                </a>
              </div>
            )}

            <div className="">
              <a href="#" className="flex items-center gap-1 font-bold">
                <TfiCommentAlt size={22} />
                Blog
              </a>
            </div>

            <div className="flex items-center font-bold gap-3">
              {role ? (
                <>
                  {username}
                  <button
                    className="bg-transparent"
                    onClick={logout}
                    title="logout"
                  >
                    <IoIosLogOut size={24} />
                  </button>
                </>
              ) : (
                <button className="bg-transparent" onClick={handleOpenLogin}>
                  {t("Login")} / {t("Register")}
                </button>
              )}

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
        {/* <div className="">
          <SuggestionTag />
        </div> */}
      </div>
    </>
  );
};

export default Nav;
