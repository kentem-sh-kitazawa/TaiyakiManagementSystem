  return <div>EditForm</div>;
import type { Dispatch, SetStateAction } from "react";
import useNameRadioButton from "./useNameRadioButton";
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
  //ラジオボタンとvalue
  const { radioButtonElement: nameRadioButton } = useNameRadioButton({
    values: taiyakiNames,
    selected: selectedName,
    label: "メニュー",
    isDisabled: true,
  });
};

export default EditForm;
