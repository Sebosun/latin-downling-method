import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Main from "./components/pages/Main";
import Options from "./components/pages/Options";
import Navigation from "./components/ui/Navigation";
import FetchData from "./FetchData";

function App() {
  return (
    <div className="h-full">
      <div className="grid grid-rows-main items-center justify-items-center h-full ">
        <div className="w-5/6	 md:w-2/6">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/options" element={<Options />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Navigation />
      </div>
      <FetchData />
    </div>
  );
}

export default App;
