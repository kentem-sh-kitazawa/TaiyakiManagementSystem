import { useNavigate } from "react-router-dom";
import BaseButton from "./BaseButton";

type Props = {
  label: string;
  url: string;
};

const NavigationButton = ({ label, url }: Props) => {
  const navigate = useNavigate();
  const handleOnNavigate = () => {
    navigate(url);
  };
  return <BaseButton label={label} onClick={handleOnNavigate} />;
};

export default NavigationButton;
