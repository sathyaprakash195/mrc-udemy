import classNames from "classnames";
import React from "react";

function Component({
  options,
  value,
  onChange,
  label,
  labelProperty = "label",
  valueProperty = "value ",
  iconProperty = "",
  disabled,
}) {
  const [showOptions, setShowOptions] = React.useState(false);
  const getSelectedOptionLabel = () => {
    if (value === "") return label;
    const selectedOption = options.find(
      (option) => option[valueProperty] === value
    );
    return (
      <div className="flex gap-5 items-center">
        {selectedOption[iconProperty] && (
          <img
            src={selectedOption[iconProperty]}
            alt=""
            className="h-6 w-6 rounded"
          />
        )}
        <span>{selectedOption[labelProperty]}</span>
      </div>
    );
  };
  return (
    <div className="min-w-[200px]">
      <label className="text-sm text-gray-500">{label}</label>

      <div
        className={classNames(
          "border border-gray-500 p-2 flex justify-between items-center cursor-pointer",
          {
            "opacity-50 cursor-not-allowed pointer-events-none": disabled,
          }
        )}
        onClick={() => setShowOptions(!showOptions)}
      >
        <span>{getSelectedOptionLabel()}</span>
        <i class="ri-arrow-down-s-line"></i>
      </div>

      {showOptions && (
        <div className="border border-gray-500 p-2 flex flex-col gap-2 w-full min-w-[200px]">
          {options.map((option) => (
            <div
              className="cursor-pointer flex gap-5 items-center"
              onClick={() => {
                onChange(option[valueProperty]);
                setShowOptions(false);
              }}
            >
              {option[iconProperty] && (
                <img
                  src={option[iconProperty]}
                  alt=""
                  className="h-6 w-6 rounded"
                />
              )}
              <span>{option[labelProperty]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Component;
