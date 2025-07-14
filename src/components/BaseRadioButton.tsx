type Props = {
  value: string;
  inputName: string;
};

const BaseRadioButton = ({ value, inputName }: Props) => {
  return (
    <>
      <label>
        <input type="radio" name={inputName} value={value}></input>
        {value}
      </label>
    </>
  );
};

export default BaseRadioButton;
