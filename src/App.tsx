import { useState } from "react";
import "./App.css";
import TopHeader from "./components/header/TopHeader";
import LoginForm from "./components/popup/LoginForm";
import Home from "./pages/Home";

function App() {
  const [loginDialog, setLoginDialog] = useState(false);

  const handleOpenLogin = () => {
    setLoginDialog((curr) => !curr);
  };
  return (
    <>
      <LoginForm loginDialog={loginDialog} handleOpenLogin={handleOpenLogin} />
      <TopHeader />
      <div className="sm:max-w-[1306px] mx-auto">
        <Home handleOpenLogin={handleOpenLogin} />
      </div>
    </>
  );
}

export default App;
