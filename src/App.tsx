import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./components/HomePage";

import type { taiyaki } from "./Types/TaiyakiType";
import type { PurchaseTaiyakiType } from "./Types/PurchaseTaiyakiType";
import PurchaseEditForm from "./components/PurchaseEditForm";

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
            <PurchaseEditForm setPurchaseTaiyakis={setPurchaseTaiyakis} />
          }
        />
        <Route
          path="/editForm"
          element={
            <PurchaseEditForm
              selectedTaiyaki={selectedTaiyaki}
              setPurchaseTaiyakis={setPurchaseTaiyakis}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
