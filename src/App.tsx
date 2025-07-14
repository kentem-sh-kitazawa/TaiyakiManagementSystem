import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import PurchaseForm from "./components/PurchaseForm";
import EditForm from "./components/EditForm";
import type { taiyaki } from "./Types/TaiyakiType";

function App() {
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
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/editForm" element={<EditForm />}></Route>
        <Route
          path="/purchaseForm"
          element={
            <PurchaseForm
              taiyakiInfos={taiyakiInfos}
              taiyakiSizes={taiyakiSizes}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
