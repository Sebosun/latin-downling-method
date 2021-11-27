import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Main from "./components/pages/Main";
import Options from "./components/pages/Options";
import FetchData from "./FetchData";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full  bg-gray-300">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/options" element={<Options />} />
      </Routes>
      <FetchData />
    </div>
  );
}

export default App;
