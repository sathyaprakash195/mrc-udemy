import React from "react";
import Input from "./Component";

function Index() {
  const [values = {}, setValues] = React.useState({
    basicInputUsername: "",
    roundedInputUsername: "",
    disabledInputUsername: "sathya",
    errorInputUsername: "",
  });
  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="flex flex-col gap-2 border w-full p-2">
        <span>Basic Input</span>

        <Input
          label="Username"
          value={values.basicInputUsername}
          onChange={(e) => {
            setValues({
              ...values,
              basicInputUsername: e.target.value,
            });
          }}
          placeholder="Enter your username"
        />
      </div>

      <div className="flex flex-col gap-2 border w-full p-2">
        <span>Rounded Input</span>

        <Input
          label="Username"
          value={values.roundedInputUsername}
          onChange={(e) => {
            setValues({
              ...values,
              roundedInputUsername: e.target.value,
            });
          }}
          placeholder="Enter your username"
          rounded="lg"
        />
      </div>

      <div className="flex flex-col gap-2 border w-full p-2">
        <span>Disabled Input</span>

        <Input
          label="Username"
          value={values.disabledInputUsername}
          onChange={(e) => {
            setValues({
              ...values,
              disabledInputUsername: e.target.value,
            });
          }}
          placeholder="Enter your username"
          rounded="lg"
          disabled
        />
      </div>

      <div className="flex flex-col gap-2 border w-full p-2">
        <span>Error Input</span>

        <Input
          label="Username"
          value={values.errorInputUsername}
          onChange={(e) => {
            setValues({
              ...values,
              errorInputUsername: e.target.value,
            });
          }}
          placeholder="Enter your username"
          rounded="lg"
          errorMessage="Username is required"
        />
      </div>
    </div>
  );
}

export default Index;
