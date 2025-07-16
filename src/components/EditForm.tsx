import { useNavigate } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";

import NavigationButton from "./NavigationButton";
import useRadioButtonGroup from "./useRadioButtonGroup";
import BaseButton from "./BaseButton";
import type { taiyaki } from "../Types/TaiyakiType";
import type { PurchaseTaiyakiType } from "../Types/PurchaseTaiyakiType";
import TaiyakiName from "../Types/TaiyakiNameType";
import TaiyakiSize from "../Types/TaiyakiSizeType";

type Props = {
  purchaseTaiyakis: PurchaseTaiyakiType[];
  taiyakiInfos: taiyaki[];
  taiyakiSizes: string[];
  selectedId: string;
  setPurchaseTaiyakis: Dispatch<SetStateAction<PurchaseTaiyakiType[]>>;
};

const EditForm = ({
  purchaseTaiyakis,
  taiyakiInfos,
  taiyakiSizes,
  selectedId,
  setPurchaseTaiyakis,
}: Props) => {
  const taiyakiNames = taiyakiInfos.map((info) => {
    return info.name;
  });

  const navigate = useNavigate();

  //編集するたい焼きの名前
  const selectedName = purchaseTaiyakis.find(
    (taiyaki) => taiyaki.id === selectedId
  )!.name;

  //ラジオボタンとvalue
  const { radioButtonGroup: nameRadioButton } = useRadioButtonGroup({
    values: taiyakiNames,
    initializeValue: selectedName,
    label: "メニュー",
    isDisabled: true,
  });

  const { radioButtonGroup: sizeRadioButton, selectedValue: selectedSize } =
    useRadioButtonGroup({ values: taiyakiSizes, label: "サイズ" });

  const handleOnEdit = () => {
    if (selectedName === TaiyakiName[2] && selectedSize !== TaiyakiSize.L) {
      alert(`${TaiyakiName[2]}は${TaiyakiSize.L}しか選べません。`);
      return;
    }

    const priceIndex = taiyakiSizes.findIndex((size) => size === selectedSize);

    setPurchaseTaiyakis((prev) => {
      return prev.map((taiyaki) =>
        taiyaki.id === selectedId
          ? {
              ...taiyaki,
              size: selectedSize,
              price: taiyakiInfos.find((info) => info.name === selectedName)!
                .price[priceIndex],
            }
          : taiyaki
      );
    });
    navigate("/");
  };

  return (
    <>
      {nameRadioButton}
      {sizeRadioButton}
      <BaseButton label="交換" onClick={handleOnEdit} />
      <NavigationButton label="キャンセル" url="/" />
    </>
  );
};

export default EditForm;
