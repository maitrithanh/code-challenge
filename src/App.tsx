import "./App.css";
import TopHeader from "./components/header/TopHeader";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <TopHeader />
      <div className=" flex justify-center w-full">
        <Home />
      </div>
    </>
  );
}

export default App;
