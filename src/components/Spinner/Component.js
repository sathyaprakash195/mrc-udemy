import React from "react";
import classNames from "classnames";

function Component({
  borderSize = 4,
  spinnerSize = "small", // small, medium, large
  spinnerColor = "gray",
}) {
  return (
    <div
      className={classNames("rounded-full animate-spin", {
        "h-10 w-10": spinnerSize === "small",
        "h-20 w-20": spinnerSize === "medium",
        "h-40 w-40": spinnerSize === "large",
      })}
      style={{
        borderColor: spinnerColor,
        borderTopColor: "transparent",
        borderWidth: borderSize,
      }}
    ></div>
  );
}

export default Component;
