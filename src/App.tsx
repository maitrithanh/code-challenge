import { useState } from "react";
import "./App.css";
import LoginForm from "./components/popup/LoginForm";
import Home from "./pages/Home";
import LanguageSelector from "./components/utils/LanguageSelector";
import Nav from "./components/header/Nav";
import Shop from "./pages/Shop";
// import Admin from "./pages/Admin";

function App() {
  const [loginDialog, setLoginDialog] = useState(false);

  const handleOpenLogin = () => {
    setLoginDialog((curr) => !curr);
  };
  return (
    <>
      <LoginForm loginDialog={loginDialog} handleOpenLogin={handleOpenLogin} />
      {/* <TopHeader /> */}
      <div className="sm:max-w-[1306px] mx-auto sticky top-0 bg-white pb-4">
        <div className="relative flex justify-between w-full">
          <Nav handleOpenLogin={handleOpenLogin} />
        </div>
      </div>
      <div className="sm:max-w-[1306px] mx-auto">
        {/* <Home handleOpenLogin={handleOpenLogin} /> */}
        {/* <Admin /> */}
        <Shop />
        <LanguageSelector />
      </div>
    </>
  );
}

export default App;
