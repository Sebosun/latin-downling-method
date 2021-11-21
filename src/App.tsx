import Game from "./components/game/Game";
import Stats from "./components/stats/Stats";
import data from "./conjugations.json";

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
      <main>
        <Game />
        <Stats />
      </main>
    </div>
  );
}

export default App;
