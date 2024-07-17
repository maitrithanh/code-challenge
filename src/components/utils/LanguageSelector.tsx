import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex">
      <button
        onClick={() => changeLanguage("en")}
        className="p-2 m-2 flex gap-2 items-center"
      >
        <img src="./language/us.png" alt="en" width={30} />
        English
      </button>
      <button
        onClick={() => changeLanguage("vi")}
        className="p-2 m-2 flex gap-2 items-center"
      >
        <img src="./language/vn.png" alt="en" width={30} />
        Vietnamese
      </button>
    </div>
  );
};

export default LanguageSelector;
