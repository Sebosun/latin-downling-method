import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Main from "./components/pages/Main";
import FetchData from "./FetchData";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full  bg-gradient-to-r from-sky-600 to-sky-500 ">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/options" element={<p>Dupa for now</p>} />
      </Routes>
      <FetchData />
    </div>
  );
}

export default App;
