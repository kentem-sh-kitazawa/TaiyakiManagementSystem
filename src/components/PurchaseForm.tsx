import { type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NavigationButton from "./NavigationButton";
import BaseButton from "./BaseButton";
import useNameRadioButton from "./useNameRadioButton";
import type { taiyaki } from "../Types/TaiyakiType";
import type { PurchaseTaiyakiType } from "../Types/PurchaseTaiyakiType";
import "../Styles/PurchaseForm.css";
type Props = {
  taiyakiInfos: taiyaki[];
  taiyakiSizes: string[];
  setPurchaseTaiyakis: Dispatch<SetStateAction<PurchaseTaiyakiType[]>>;
};
const PurchaseForm = ({
  taiyakiInfos,
  taiyakiSizes,
  setPurchaseTaiyakis,
}: Props) => {
  const taiyakiNames = taiyakiInfos.map((info) => {
    return info.name;
  });
  //ラジオボタンとvalue
  const { radioButtonElement: nameRadioButton, selectedValue: selectedName } =
    useNameRadioButton({ values: taiyakiNames, label: "メニュー" });
  const { radioButtonElement: sizeRadioButton, selectedValue: selectedSize } =
    useNameRadioButton({ values: taiyakiSizes, label: "サイズ" });
  const navigate = useNavigate();
  return (
    <div className="taiyaki-select-form">
      {nameRadioButton}
      {sizeRadioButton}
      <div>
        <BaseButton label="購入" onClick={handleOnPurchase} />
        <NavigationButton label="キャンセル" url="/" />
      </div>
    </div>
  );
};

export default PurchaseForm;
