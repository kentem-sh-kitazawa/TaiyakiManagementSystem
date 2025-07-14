import "../Styles/BaseButton.css";

type Props = {
  label: string;
  onClick: () => void;
};

const BaseButton = ({ label, onClick }: Props) => {
  return (
    <button className="base-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default BaseButton;
