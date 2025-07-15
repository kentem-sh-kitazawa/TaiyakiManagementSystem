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
  const navigate = useNavigate();
  //ラジオボタンとvalue
  const { radioButtonGroup: nameRadioButton } = useRadioButtonGroup({
    values: taiyakiNames,
    selected: selectedName,
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
