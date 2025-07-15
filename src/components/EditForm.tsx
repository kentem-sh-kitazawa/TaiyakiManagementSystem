import { useNavigate } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
import NavigationButton from "./NavigationButton";
import useRadioButtonGroup from "./useRadioButtonGroup";
import type { taiyaki } from "../Types/TaiyakiType";
import type { PurchaseTaiyakiType } from "../Types/PurchaseTaiyakiType";
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
  return (
    <>
      {nameRadioButton}
      {sizeRadioButton}
      <NavigationButton label="キャンセル" url="/" />
    </>
  );
};

export default EditForm;
