import { useEffect, type Dispatch, type SetStateAction } from "react";

import NavigationButtons from "./NavigationButtons";
import type { PurchaseTaiyakiType } from "../Types/PurchaseTaiyakiType";
import useInputNumber from "./useInputNumber";

import "../Styles/HomePage.css";

type Props = {
  purchaseTaiyakis: PurchaseTaiyakiType[];
  selectedTaiyaki: PurchaseTaiyakiType | undefined;
  myMoney: number;
  setMyMoney: Dispatch<SetStateAction<number>>;
  setSelectedTaiyaki: Dispatch<SetStateAction<PurchaseTaiyakiType | undefined>>;
  setPurchaseTaiyakis: Dispatch<SetStateAction<PurchaseTaiyakiType[]>>;
};

const HomePage = ({
  purchaseTaiyakis,
  selectedTaiyaki,
  myMoney,
  setMyMoney,
  setSelectedTaiyaki,
  setPurchaseTaiyakis,
}: Props) => {
  const { InputNumber, valueNumber } = useInputNumber();
  const getTotal = () => {
    let total = 0;
    purchaseTaiyakis.forEach((taiyaki) => {
      total += taiyaki.price;
    });
    return total;
  };

  const handleOnClick = (selectedTaiyaki: PurchaseTaiyakiType) => {
    setSelectedTaiyaki(selectedTaiyaki);
  };

  useEffect(() => {
    setSelectedTaiyaki(undefined);
  }, [setSelectedTaiyaki]);

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
          {purchaseTaiyakis.map((taiyaki) => (
            <tr
              className={
                taiyaki.id === selectedTaiyaki?.id ? "selected-taiyaki" : ""
              }
              key={taiyaki.id}
              onClick={() => handleOnClick(taiyaki)}
            >
              <td>{taiyaki.name}</td>
              <td>{taiyaki.type}</td>
              <td>{taiyaki.size}</td>
              <td>{taiyaki.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="navigation-panel">
        <NavigationButtons
          selectedTaiyaki={selectedTaiyaki}
          setSelectedTaiyaki={setSelectedTaiyaki}
          setPurchaseTaiyakis={setPurchaseTaiyakis}
        />
        <p>使ったお金:{getTotal()}</p>
          {InputNumber}
      </div>
    </div>
      <progress id="file" max={myMoney} value={getTotal()}></progress>
  );
};

export default HomePage;
