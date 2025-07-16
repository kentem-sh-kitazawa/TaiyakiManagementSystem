import { type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import NavigationButton from "./NavigationButton";
import BaseButton from "./BaseButton";
import useRadioButtonGroup from "./useRadioButtonGroup";
import type { taiyaki } from "../Types/TaiyakiType";
import type { PurchaseTaiyakiType } from "../Types/PurchaseTaiyakiType";

import TaiyakiSize from "../Types/TaiyakiSizeType";
import TaiyakiName from "../Types/TaiyakiNameType";

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
  const { radioButtonGroup: nameRadioButton, selectedValue: selectedName } =
    useRadioButtonGroup({ values: taiyakiNames, label: "メニュー" });
  const { radioButtonGroup: sizeRadioButton, selectedValue: selectedSize } =
    useRadioButtonGroup({ values: taiyakiSizes, label: "サイズ" });

  const navigate = useNavigate();

  const handleOnPurchase = () => {
    if (selectedName === TaiyakiName[2] && selectedSize !== TaiyakiSize.L) {
      alert(`${TaiyakiName[2]}は${TaiyakiSize.L}しか選べません。`);
      return;
    }

    const priceIndex = taiyakiSizes.findIndex((size) => size === selectedSize);

    const newPurchaseTaiyaki: PurchaseTaiyakiType = {
      id: uuidv4(),
      name: selectedName,
      price: taiyakiInfos.find((info) => info.name === selectedName)!.price[
        priceIndex
      ],
      size: selectedSize,
      type: taiyakiInfos.find((info) => info.name === selectedName)!.type,
    };
    setPurchaseTaiyakis((prev) => [...prev, newPurchaseTaiyaki]);
    navigate("/");
  };

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
