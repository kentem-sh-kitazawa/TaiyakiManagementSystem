  return <div>PurchaseForm</div>;
import { type Dispatch, type SetStateAction } from "react";
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
  //ラジオボタンとvalue
  const { radioButtonElement: nameRadioButton, selectedValue: selectedName } =
    useNameRadioButton({ values: taiyakiNames, label: "メニュー" });
  const { radioButtonElement: sizeRadioButton, selectedValue: selectedSize } =
    useNameRadioButton({ values: taiyakiSizes, label: "サイズ" });
};

export default PurchaseForm;
