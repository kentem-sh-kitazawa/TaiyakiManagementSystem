import { useEffect, useMemo, useState } from "react";

type Props = {
  values: string[];
  label: string;
  initializeValue?: string;
  isDisabled?: boolean;
};

const useRadioButtonGroup = ({
  values,
  label,
  initializeValue,
  isDisabled,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState(
    initializeValue ?? values[0]
  );

  const radioButtonGroup = useMemo(
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
                  checked={selectedValue === value}
                  disabled={isDisabled}
                  onChange={() => {
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
    [isDisabled, label, selectedValue, values]
  );
  return { selectedValue, radioButtonGroup };
};

export default useRadioButtonGroup;
