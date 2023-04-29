import React from "react";
import classNames from "classnames";

function Button({
  title,
  onClick,
  color = "primary",
  variant = "contained",
  disabled = false,
  rounded = "none", // none, sm, md, lg, full
  textColor = "white",
}) {
  const roundedClass = `rounded-${rounded}`;
  const colorClass = `bg-[${color}] text-white`;

  return (
    <button
      className={classNames("py-2 w-max px-3", {
        "bg-primary text-white": color === "primary" && variant === "contained" && textColor === "white",
        "bg-white text-primary border-primary border":
          color === "primary" && variant === "outlined" && textColor === "primary",

        "opacity-50 pointer-events-none cursor-not-allowed": disabled,
        [roundedClass]: rounded !== "none",
        [colorClass]: color !== "primary",
      })}
      style={{
        backgroundColor: color,
        color: textColor,
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
