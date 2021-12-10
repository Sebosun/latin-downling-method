import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/pages/About";
import Main from "./components/pages/Main";
import Options from "./components/pages/Options";
import Navigation from "./components/ui/Navigation";
import FetchData from "./FetchData";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="h-full">
      <div className="grid grid-rows-main items-center justify-items-center h-full ">
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 1.5,
          }}
          className="w-5/6 md:w-4/6	lg:w-3/6 xl:w-2/6"
        >
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Main />} />
              <Route path="/options" element={<Options />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </motion.div>
        <Navigation />
      </div>
      <FetchData />
    </div>
  );
}

export default App;
