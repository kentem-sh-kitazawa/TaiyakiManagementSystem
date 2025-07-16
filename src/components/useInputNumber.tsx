import { useMemo, useState, type ChangeEvent } from "react";

const useInputNumber = () => {
  const [valueNumber, setValueNumber] = useState(0);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.valueAsNumber;
    if (!isNaN(inputValue)) {
      setValueNumber(inputValue);
    }
  };

  const InputNumber = useMemo(
    () => <input type="number" onChange={handleOnChange} value={valueNumber} />,
    [valueNumber]
  );

  return { InputNumber, valueNumber };
};

export default useInputNumber;
