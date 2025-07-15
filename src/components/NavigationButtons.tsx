import type { Dispatch, SetStateAction } from "react";

import NavigationButton from "./NavigationButton";
import BaseButton from "./BaseButton";

import "../Styles/NavigationButtons.css";

import type { PurchaseTaiyakiType } from "../Types/PurchaseTaiyakiType";

type Props = {
  selectedId: string;
  setPurchaseTaiyakis: Dispatch<SetStateAction<PurchaseTaiyakiType[]>>;
  setSelectedId: Dispatch<SetStateAction<string>>;
};

const NavigationButtons = ({
  selectedId,
  setPurchaseTaiyakis,
  setSelectedId,
}: Props) => {
  const handleOnDelete = () => {
    setPurchaseTaiyakis((prev) => {
      const updataTaiyakis = prev.filter(
        (taiyaki) => taiyaki.id !== selectedId
      );
      setSelectedId("");
      return updataTaiyakis;
    });
  };

  return (
    <div className="navigation-buttons">
      <NavigationButton label="追加" url="/purchaseForm" />
      <BaseButton label="削除" onClick={handleOnDelete} />
      <NavigationButton label="編集" url="/editForm" selectedId={selectedId} />
    </div>
  );
};

export default NavigationButtons;
