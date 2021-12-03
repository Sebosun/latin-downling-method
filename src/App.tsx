import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Main from "./components/pages/Main";
import Options from "./components/pages/Options";
import Navigation from "./components/ui/Navigation";
import FetchData from "./FetchData";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-300">
      <div className="w-full max-w-md p-4 md:max-w-xl">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/options" element={<Options />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <FetchData />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
