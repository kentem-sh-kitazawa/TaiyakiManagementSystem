import { useEffect, type Dispatch, type SetStateAction } from "react";
import NavigationButtons from "./NavigationButtons";

import type { PurchaseTaiyakiType } from "../Types/PurchaseTaiyakiType";
import "../Styles/HomePage.css";

type Props = {
  purchaseTaiyakis: PurchaseTaiyakiType[];
  selectedId: string;
  setPurchaseTaiyakis: Dispatch<SetStateAction<PurchaseTaiyakiType[]>>;
  setSelectedId: Dispatch<SetStateAction<string>>;
};

const HomePage = ({
  purchaseTaiyakis,
  selectedId,
  setPurchaseTaiyakis,
  setSelectedId,
}: Props) => {
  const getTotal = () => {
    let total = 0;
    purchaseTaiyakis.forEach((taiyaki) => {
      total += taiyaki.price;
    });
    return total;
  };
  const handleOnClick = (id: string) => {
    setSelectedId(id);
  };
  useEffect(() => {
    setSelectedId("");
  }, [setSelectedId]);
  return (
    <div className="home-page-content">
      <table>
        <thead>
          <tr>
            <td>種類</td>
            <td>中身</td>
            <td>サイズ</td>
            <td>価格</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>あ</td>
            <td>あ</td>
            <td>あ</td>
            <td>あ</td>
          </tr>
        </tbody>
      </table>
      <div className="navigation-panel">
        <NavigationButtons />
        <p>使ったお金:</p>
      </div>
    </div>
  );
};

export default HomePage;
