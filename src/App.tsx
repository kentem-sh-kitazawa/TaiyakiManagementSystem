import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./components/HomePage";

import type { PurchaseTaiyakiType } from "./Types/PurchaseTaiyakiType";
import PurchaseEditForm from "./components/PurchaseEditForm";

function App() {
  const [purchaseTaiyakis, setPurchaseTaiyakis] = useState<
    PurchaseTaiyakiType[]
  >([]);
  const [selectedTaiyaki, setSelectedTaiyaki] = useState<PurchaseTaiyakiType>();
  const [myMoney, setMyMoney] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              purchaseTaiyakis={purchaseTaiyakis}
              selectedTaiyaki={selectedTaiyaki}
              myMoney={myMoney}
              setSelectedTaiyaki={setSelectedTaiyaki}
              setPurchaseTaiyakis={setPurchaseTaiyakis}
              setMyMoney={setMyMoney}
            />
          }
        />
        <Route
          path="/purchaseForm"
          element={
            <PurchaseEditForm
              setPurchaseTaiyakis={setPurchaseTaiyakis}
              myMoney={myMoney}
              setMyMoney={setMyMoney}
            />
          }
        />
        <Route
          path="/editForm"
          element={
            <PurchaseEditForm
              myMoney={myMoney}
              selectedTaiyaki={selectedTaiyaki}
              setMyMoney={setMyMoney}
              setPurchaseTaiyakis={setPurchaseTaiyakis}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
