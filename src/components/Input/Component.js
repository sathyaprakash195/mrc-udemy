import React from "react";
import classNames from "classnames";

function Input({
  value,
  onChange,
  rounded,
  disabled,
  label,
  placeholder,
  errorMessage,
}) {
  const inputClassNames = classNames(
    "py-2 px-3 border border-gray-400 w-full",
    {
      [`rounded-${rounded}`]: rounded !== "none",
      "bg-gray-200": disabled,
      "border-red-500": errorMessage,
    }
  );

  return (
    <div>
      <label className="text-gray-700 text-sm">{label}</label>
      <input
        type="text"
        className={inputClassNames}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />

      {errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
    </div>
  );
}

export default Input;
