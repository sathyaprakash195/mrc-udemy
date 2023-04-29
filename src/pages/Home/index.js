import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import classNames from "classnames";

function Home() {
  const [selectedComponent, setSelectedComponent] = React.useState("Button");
  const navigate = useNavigate();
  const components = [
    {
      name: "Button",
      path: "button",
    },
    {
      name: "Input",
      path: "input",
    },
    {
      name: "Select",
      path: "select",
    },
    {
      name: "Page Header",
      path: "pageheader",
    },
    {
      name: "Spinner",
      path: "spinner",
    },
    {
      name: "Card",
      path: "card",
    },
    {
      name: "Tabs",
      path: "tabs",
    },
    {
      name: "Table",
      path: "table",
    },
    {
      name: "Modal",
      path: "modal",
    },
    {
      name: "Autocomplete",
      path: "autocomplete",
    },
  ];

  return (
    <div className="flex gap-5">
      {/* navbar */}
      <div className="h-screen bg-primary fixed">
        <h1 className="text-2xl text-white px-10 my-10">SHEY UI</h1>
        <div className="flex flex-col gap-3 px-5">
          {components.map((component) => {
            return (
              <div
                key={component.name}
                onClick={() => {
                  setSelectedComponent(component.name);
                  navigate(`/${component.path}`);
                }}
                className={classNames("cursor-pointer px-5 py-2", {
                  "border border-white rounded":
                    window.location.pathname === `/${component.path}`,
                })}
              >
                <span className="text-white">{component.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* selected component */}
      <div className="px-10 my-10 w-full flex flex-col gap-5 ml-52">
        <h1 className="text-2xl text-primary">
          {selectedComponent}
        </h1>
        <hr />
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
