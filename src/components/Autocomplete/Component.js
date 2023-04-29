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
  const inputRef = React.useRef(null);
  const [inputValue, setInputValue] = React.useState("");
  const [focusIn, setFocusIn] = React.useState(false);
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

  const getOptions = () => {
    if (inputValue === "") return [];
    return options.filter((option) =>
      option[labelProperty].toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>

      {!focusIn && (
        <div
          className={classNames(
            "border border-gray-500 p-2 flex justify-between items-center cursor-pointer",
            {
              "opacity-50 cursor-not-allowed pointer-events-none": disabled,
            }
          )}
          onClick={() => {
            setFocusIn(true);
            inputRef?.current?.focus();
            setShowOptions(true);
            if (value) {
              setInputValue(
                options.find((option) => option[valueProperty] === value)[
                  labelProperty
                ] || ""
              );
            }
          }}
        >
          <span>{getSelectedOptionLabel()}</span>
          <i class="ri-arrow-down-s-line"></i>
        </div>
      )}

      {focusIn && (
        <input
          type="text"
          className="border border-gray-500 p-2 w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
        />
      )}

      {showOptions && getOptions()?.length > 0 && (
        <div className="border border-gray-500 flex flex-col gap-5 px-5 p-2 w-full">
          {getOptions().map((option) => (
            <div
              className="cursor-pointer flex gap-5 items-center"
              onClick={() => {
                onChange(option[valueProperty]);
                setInputValue("");
                setFocusIn(false);
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
