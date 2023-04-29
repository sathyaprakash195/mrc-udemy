import React from "react";
import Select from "./Component";

function Index() {
  const [basicSelectValue, setBasicSelectValue] = React.useState("");
  const [customSelectValue, setCustomSelectValue] = React.useState("");
  const [iconSelectValue, setIconSelectValue] = React.useState("");
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
  ];

  const countriesPhoneCodes = [
    {
      country: "India",
      phoneCode: "+91",
      flag: "https://www.worldometers.info/img/flags/small/tn_in-flag.gif",
    },
    {
      country: "United States",
      phoneCode: "+1",
      flag: "https://www.worldometers.info/img/flags/small/tn_us-flag.gif",
    },
    {
      country: "United Kingdom",
      phoneCode: "+44",
      flag: "https://www.worldometers.info/img/flags/small/tn_uk-flag.gif",
    },
    {
      country: "Australia",
      phoneCode: "+61",
      flag: "https://www.worldometers.info/img/flags/small/tn_as-flag.gif",
    },
  ];

  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col border  border-gray-300 p-5 gap-3 w-full">
        <span>Basic Select</span>
        <Select
          options={countries}
          value={basicSelectValue}
          onChange={(value) => setBasicSelectValue(value)}
          label="Select Country"
        />

        <span>
          <span className="font-semibold">Selected Value:</span>{" "}
          {basicSelectValue}
        </span>
      </div>

      <div className="flex flex-col border  border-gray-300 p-5 gap-3 w-full">
        <span>Select with Custom Label nd Value Properties</span>
        <Select
          options={countriesPhoneCodes}
          value={customSelectValue}
          onChange={(value) => setCustomSelectValue(value)}
          label="Select Country Phone Code"
          labelProperty="country"
          valueProperty="phoneCode"
        />

        <span>
          <span className="font-semibold">Selected Value:</span>{" "}
          {customSelectValue}
        </span>
      </div>

      <div className="flex flex-col border  border-gray-300 p-5 gap-3 w-full">
        <span>Select with options including icon</span>
        <Select
          options={countriesPhoneCodes}
          value={iconSelectValue}
          onChange={(value) => setIconSelectValue(value)}
          label="Select Country Phone Code"
          labelProperty="country"
          valueProperty="phoneCode"
          iconProperty="flag"
        />

        <span>
          <span className="font-semibold">Selected Value:</span>{" "}
          {iconSelectValue}
        </span>
      </div>

      <div className="flex flex-col border  border-gray-300 p-5 gap-3 w-full">
        <span>Disabled Select</span>
        <Select
          options={countries}
          value={basicSelectValue}
          onChange={(value) => setBasicSelectValue(value)}
          label="Select Country"
          disabled
        />

        <span>
          <span className="font-semibold">Selected Value:</span>{" "}
          {basicSelectValue}
        </span>
      </div>
    </div>
  );
}

export default Index;
