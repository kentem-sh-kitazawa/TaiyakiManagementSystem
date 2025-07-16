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
            <EditForm
              purchaseTaiyakis={purchaseTaiyakis}
              taiyakiInfos={taiyakiInfos}
              taiyakiSizes={taiyakiSizes}
              selectedId={selectedId}
              setPurchaseTaiyakis={setPurchaseTaiyakis}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
