import { useNavigate } from "react-router-dom";
const NavigationPanel = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/purchaseForm")}>追加</button>
      <button>削除</button>
      <button onClick={() => navigate("/editForm")}>編集</button>
    </>
  );
};

export default NavigationPanel;
