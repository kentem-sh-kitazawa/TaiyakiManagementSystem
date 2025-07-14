import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>HomePage</div>
      <button onClick={() => navigate("/purchaseForm")}>商品登録</button>
      <button>削除</button>
      <button onClick={() => navigate("/editForm")}>商品登録</button>
    </>
  );
};

export default HomePage;
