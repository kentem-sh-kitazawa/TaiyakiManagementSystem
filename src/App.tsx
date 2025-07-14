import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import PurchaseForm from "./components/PurchaseForm";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/purchaseForm" element={<PurchaseForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
