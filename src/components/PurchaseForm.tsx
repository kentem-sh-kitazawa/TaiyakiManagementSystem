  return <div>PurchaseForm</div>;
import { type Dispatch, type SetStateAction } from "react";
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
};

export default PurchaseForm;
