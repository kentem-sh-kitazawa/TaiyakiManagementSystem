import NavigationButton from "./NavigationButton";
import BaseButton from "./BaseButton";

import "../Styles/NavigationButtons.css";

const NavigationButtons = () => {
  const handleOnDelete = () => {};

  return (
    <div className="navigation-buttons">
      <NavigationButton label="追加" url="/purchaseForm" />
      <BaseButton label="削除" onClick={handleOnDelete} />
      <NavigationButton label="編集" url="/editForm" />
    </div>
  );
};

export default NavigationButtons;
