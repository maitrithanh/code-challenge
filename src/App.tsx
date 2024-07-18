import { useState } from "react";
import "./App.css";
import LoginForm from "./components/popup/LoginForm";
import Home from "./pages/Home";
import Nav from "./components/header/Nav";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import "./i18n";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LanguageSelector from "./components/utils/LanguageSelector";

function App() {
  const [loginDialog, setLoginDialog] = useState(false);

  const handleOpenLogin = () => {
    setLoginDialog((curr) => !curr);
  };
  return (
    <Router>
      <LoginForm loginDialog={loginDialog} handleOpenLogin={handleOpenLogin} />
      {/* <TopHeader /> */}
      <div className="sm:max-w-[1306px] mx-auto sticky top-0 bg-white pb-4">
        <div className="relative flex justify-between w-full">
          <Nav handleOpenLogin={handleOpenLogin} />
        </div>
      </div>
      <div className="sm:max-w-[1306px] mx-auto">
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route
            path="/:id"
            element={<Home handleOpenLogin={handleOpenLogin} />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/chain-stores" element={<Admin />} />
          <Route path="/my-shop" element={<Shop />} />
        </Routes>
        {/* <Admin /> */}
        <LanguageSelector />
      </div>
    </Router>
  );
}

export default App;
