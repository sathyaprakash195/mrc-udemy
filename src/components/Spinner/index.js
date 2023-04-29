import React from "react";
import Spinner from "./Component";

function Index() {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="border p-5 flex flex-col gap-5 border-gray-300 w-full">
        <span>Basic Spinner with default props</span>
        <Spinner />
      </div>

      <div className="border p-5 flex flex-col gap-5 border-gray-300 w-full">
        <span>Custom Border Color Spinner</span>
        <Spinner spinnerColor="green" />
      </div>

      <div className="border p-5 flex flex-col gap-5 border-gray-300 w-full">
        <span>Medium spinner</span>
        <Spinner spinnerSize="medium" />
      </div>

      <div className="border p-5 flex flex-col gap-5 border-gray-300 w-full">
        <span>Large spinner</span>
        <Spinner spinnerSize="large" />
      </div>
    </div>
  );
}

export default Index;
