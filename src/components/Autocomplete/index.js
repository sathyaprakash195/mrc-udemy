import React from "react";
import Autocomplete from "./Component";
function Index() {
  const [value, setValue] = React.useState("");
 
  const countries = [
    {
      label: "India",
      value: "IN",
    },
    {
      label: "United States",
      value: "US",
    },
    {
      label: "United Kingdom",
      value: "UK",
    },
    {
      label: "Australia",
      value: "AU",
    },

    {
      label: "Germany",
      value: "DE",
    },
    {
      label: "France",
      value: "FR",
    },
    {
      label: "Italy",
      value: "IT",
    },
    {
      label: "Japan",
      value: "JP",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col border  border-gray-300 p-5 gap-3 w-full">
        <span>Basic Autocomplete</span>
        <Autocomplete
          options={countries}
          value={value}
          onChange={(v) => {
            setValue(v);
          }}
          label="Select Country"
          valueProperty="value"
          labelProperty="label"

        />

        <span>
          <span className="font-semibold">Selected Value:</span>{" "}
          {value ? value : "None"}
        </span>
      </div>
    </div>
  );
}

export default Index;
