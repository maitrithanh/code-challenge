import { getUser } from "../hooks/Login";
import { shop } from "../data/shop";
import { useTranslation } from "react-i18next";

const Admin = () => {
  const r = getUser();

  const checkRoute = () => {
    if (r) {
      if (r.role === "admin") {
        return true;
      }
    }
    return false;
  };

  const { t } = useTranslation();

  return (
    <div>
      {checkRoute() === true && (
        <button className="p-4 rounded-md bg-lightMain text-main font-bold">
          {t("CreateShop")}
        </button>
      )}

      <div>
        {shop.map((item, index) => {
          return (
            <a key={index} className="py-4" href={`/` + item.shopId}>
              <div className="relative my-4 border hover:border-main p-4 rounded-md">
                <div>
                  <p className="text-main font-bold uppercase">
                    {item.shopName}
                  </p>
                  <div className="bg-lightMain w-fit px-4 rounded-full text-main">
                    {item ? t("Active") : t("DeActive")}
                  </div>
                </div>
                {checkRoute() === true && (
                  <button className="absolute right-4 top-10 text-rose-600 px-4 rounded-full font-semibold">
                    {t("DeActive")}
                  </button>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
