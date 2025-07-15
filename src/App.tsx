import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./components/HomePage";
import PurchaseForm from "./components/PurchaseForm";
import EditForm from "./components/EditForm";
import type { taiyaki } from "./Types/TaiyakiType";
import type { PurchaseTaiyakiType } from "./Types/PurchaseTaiyakiType";

function App() {
  const [purchaseTaiyakis, setPurchaseTaiyakis] = useState<
    PurchaseTaiyakiType[]
  >([]);
  const [selectedId, setSelectedId] = useState("");
  const taiyakiInfos: taiyaki[] = [
    { name: "通常たい焼き", type: "あんこ", price: [200, 150, 100] },
    { name: "カスタードたい焼き", type: "カスタード", price: [250, 200, 150] },
    {
      name: "デラックスたい焼き",
      type: "生クリームとカスタード",
      price: [300],
    },
  ];
  const taiyakiSizes: string[] = ["大", "中", "小"];
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              purchaseTaiyakis={purchaseTaiyakis}
              selectedId={selectedId}
              setPurchaseTaiyakis={setPurchaseTaiyakis}
              setSelectedId={setSelectedId}
            />
          }
        />
        <Route
          path="/purchaseForm"
          element={
            <PurchaseForm
              taiyakiInfos={taiyakiInfos}
              taiyakiSizes={taiyakiSizes}
              setPurchaseTaiyakis={setPurchaseTaiyakis}
            />
          }
        />
        <Route
          path="/editForm"
          element={
            <EditForm taiyakiInfos={taiyakiInfos} taiyakiSizes={taiyakiSizes} />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
