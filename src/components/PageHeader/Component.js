import React from "react";
import classNames from "classnames";

function Component({
  size = "4xl",
  textColor,
  underlined = false,
  bold = false,
  align = "left",
  uppercase = false,
  title
}) {
  let textSize = "text-4xl";
  switch (size) {
    case "6xl":
      textSize = "text-6xl";
      break;
    case "5xl":
      textSize = "text-5xl";
      break;
    case "4xl":
      textSize = "text-4xl";
      break;
    case "2xl":
      textSize = "text-2xl";
      break;
    case "xl":
      textSize = "text-xl";
      break;
    case "lg":
      textSize = "text-lg";
      break;
    case "md":
      textSize = "text-md";
      break;
    case "sm":
      textSize = "text-sm";
      break;
    case "xs":
      textSize = "text-xs";
      break;
  }
  return (
    <h1
      className={classNames(`${textSize}`, {
        uppercase: uppercase,
        "font-semibold": bold,
        underline: underlined,
      })}
      style={{
        color: textColor,
        textAlign: align,
      }}
    >
      {title}
    </h1>
  );
}

export default Component;
