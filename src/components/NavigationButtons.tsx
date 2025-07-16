import type { Dispatch, SetStateAction } from "react";

import NavigationButton from "./NavigationButton";
import BaseButton from "./BaseButton";
import type { PurchaseTaiyakiType } from "../Types/PurchaseTaiyakiType";

import "../Styles/NavigationButtons.css";

type Props = {
  selectedTaiyaki: PurchaseTaiyakiType | undefined;
  setSelectedTaiyaki: Dispatch<SetStateAction<PurchaseTaiyakiType | undefined>>;
  setPurchaseTaiyakis: Dispatch<SetStateAction<PurchaseTaiyakiType[]>>;
};

const NavigationButtons = ({
  selectedTaiyaki,
  setSelectedTaiyaki,
  setPurchaseTaiyakis,
}: Props) => {
  const handleOnDelete = () => {
    setPurchaseTaiyakis((prev) => {
      const updataTaiyakis = prev.filter(
        (taiyaki) => taiyaki.id !== selectedTaiyaki?.id
      );
      setSelectedTaiyaki(undefined);
      return updataTaiyakis;
    });
  };

  return (
    <div className="navigation-buttons">
      <NavigationButton label="追加" url="/purchaseForm" />
      <BaseButton label="削除" onClick={handleOnDelete} />
      <NavigationButton
        label="編集"
        url="/editForm"
        selectedId={selectedTaiyaki?.id}
      />
    </div>
  );
};

export default NavigationButtons;
