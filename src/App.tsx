import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Main from "./components/pages/Main";

const dummyData = {
  rose: {
    singular: {
      nominative: "rosa",
      genetive: "rosae",
      dative: "rosae",
      accusative: "rosam",
      ablative: "rosā",
    },
    plural: {
      nominative: "rosae",
      gentive: "rosārum",
      dative: "rosīs",
      accsative: "rosās",
      ablative: "rosīs",
    },
  },
};

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full  bg-gradient-to-r from-sky-600 to-sky-500 ">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/options" element={<p>Dupa for now</p>} />
      </Routes>
    </div>
  );
}

export default App;
