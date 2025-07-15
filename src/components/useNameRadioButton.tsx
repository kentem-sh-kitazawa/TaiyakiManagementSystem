import { useEffect, useMemo, useState } from "react";

type Props = {
  values: string[];
  label: string;
  selected?: string;
  isDisabled?: boolean;
};

const useNameRadioButton = ({ values, label, selected, isDisabled }: Props) => {
  const [selectedValue, setSelectedValue] = useState(values[0]);
  const [checkedName, setCheckedName] = useState(selected ?? values[0]);

  const radioButtonElement = useMemo(
    () => (
      <>
        <div className="taiyaki-select-form">
          <label>
            {label}
            {values.map((value, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name={values[0]}
                  value={value}
                  checked={checkedName === value}
                  disabled={isDisabled}
                  onChange={() => {
                    setCheckedName(value);
                    setSelectedValue(value);
                  }}
                />
                {value}
              </label>
            ))}
          </label>
        </div>
      </>
    ),
    [checkedName, isDisabled, label, values]
  );
  return { selectedValue, radioButtonElement };
};

export default useNameRadioButton;
