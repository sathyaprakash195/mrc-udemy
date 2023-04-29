import classNames from "classnames";
import React from "react";

function Component({
  tabNames,
  tabContents,
  activeTab,
  setActiveTab,
  variant = "outlined",
  orientation = "horizontal",
  disabledTabs = [],
}) {
  return (
    <div
      className={classNames("flex", {
        "flex-row": orientation === "vertical",
        "flex-col": orientation === "horizontal",
      })}
    >
      <div
        className={classNames("flex flex-row gap-10 border-b px-3", {
          "flex-col": orientation === "vertical",
        })}
      >
        {tabNames.map((tabName, index) => (
          <div
            className={classNames("cursor-pointer py-2 px-3", {
              "border border-primary":
                variant === "outlined" && activeTab === index,
              "border-b-2 border-primary":
                variant === "underlined" && activeTab === index,
              "text-gray-400 pointer-events-none cursor-disabled":
                disabledTabs.includes(index),
            })}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {tabName}
          </div>
        ))}
      </div>

      <div className="mt-5 px-5">{tabContents[activeTab]}</div>
    </div>
  );
}

export default Component;
