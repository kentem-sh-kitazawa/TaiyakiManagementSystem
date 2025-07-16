import type { Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import useRadioButtonGroup from "./useRadioButtonGroup";
import BaseButton from "./BaseButton";
import NavigationButton from "./NavigationButton";
import { taiyakiInfos, taiyakiSizes } from "../Utils/TaiyakiUtils";
import type { PurchaseTaiyakiType } from "../Types/PurchaseTaiyakiType";
import TaiyakiName from "../Types/TaiyakiNameType";
import TaiyakiSize from "../Types/TaiyakiSizeType";

type Props = {
  myMoney: number;
  selectedTaiyaki?: PurchaseTaiyakiType;
  setMyMoney: Dispatch<SetStateAction<number>>;
  setPurchaseTaiyakis: Dispatch<SetStateAction<PurchaseTaiyakiType[]>>;
};

const PurchaseEditForm = ({
  myMoney,
  selectedTaiyaki,
  setMyMoney,
  setPurchaseTaiyakis,
}: Props) => {
  const isEdit = !!selectedTaiyaki;

  const navigate = useNavigate();

  const { radioButtonGroup: nameRadioButton, selectedValue: selectedName } =
    useRadioButtonGroup({
      values: taiyakiInfos.map((info) => info.name),
      initializeValue: selectedTaiyaki?.name,
      label: "メニュー",
      isDisabled: isEdit,
    });

  const { radioButtonGroup: sizeRadioButton, selectedValue: selectedSize } =
    useRadioButtonGroup({ values: taiyakiSizes, label: "サイズ" });

  const purchaseTaiyakiPrice = taiyakiInfos.find(
    (info) => info.name === selectedName
  )!.price[taiyakiSizes.indexOf(selectedSize)];

  const handleOnPurchase = () => {
    if (selectedName === TaiyakiName.deluxe && selectedSize !== TaiyakiSize.L) {
      alert(`${TaiyakiName.deluxe}は${TaiyakiSize.L}しか選べません。`);
      return;
    }
    if (myMoney < purchaseTaiyakiPrice) {
      alert("所持金が足りません");
      return;
    } else {
      setMyMoney((prev) => prev - purchaseTaiyakiPrice);
    }
    const newPurchaseTaiyaki: PurchaseTaiyakiType = {
      id: uuidv4(),
      name: selectedName,
      price: purchaseTaiyakiPrice,
      size: selectedSize,
      type: taiyakiInfos.find((info) => info.name === selectedName)!.type,
    };
    setPurchaseTaiyakis((prev) => [...prev, newPurchaseTaiyaki]);
    navigate("/");
  };

  const handleOnEdit = () => {
    if (selectedName === TaiyakiName.deluxe && selectedSize !== TaiyakiSize.L) {
      alert(`${TaiyakiName.deluxe}は${TaiyakiSize.L}しか選べません。`);
      return;
    }

    if (myMoney + selectedTaiyaki!.price < purchaseTaiyakiPrice) {
      alert("所持金が足りません");
      return;
    } else {
      setMyMoney(
        (prev) => prev + selectedTaiyaki!.price - purchaseTaiyakiPrice
      );
    }
    setPurchaseTaiyakis((prev) => {
      return prev.map((taiyaki) =>
        taiyaki.id === selectedTaiyaki?.id
          ? {
              ...taiyaki,
              size: selectedSize,
              price: purchaseTaiyakiPrice,
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
      {isEdit ? (
        <BaseButton label="交換" onClick={handleOnEdit} />
      ) : (
        <BaseButton label="購入" onClick={handleOnPurchase} />
      )}

      <NavigationButton label="キャンセル" url="/" />
    </>
  );
};

export default PurchaseEditForm;
