import React from "react";
import Button from "./Component";

function Index() {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col items-start">
        <span>Primary Button</span>
        <Button title="Primary Button" onClick={() => {}} />
      </div>

      <div className="flex flex-col items-start">
        <span>Primary Button with On Click</span>
        <Button
          title="Button with On Click"
          onClick={() => alert("Primary Button Clicked")}
        />
      </div>

      <div className="flex flex-col items-start">
        <span>Outlined Button</span>
        <Button title="Primary Outlined" variant="outlined" 
        textColor="primary"
        />
      </div>

      <div className="flex flex-col items-start">
        <span>Disabled Button</span>
        <Button title="Disabled" disabled />
      </div>

      <div className="flex flex-col items-start">
        <span>Rounded Button</span>
        <Button title="Rounded" rounded="lg" />
      </div>

      <div className="flex flex-col items-start">
        <span>Custom Background Button</span>
        <Button title="Custom Background" color="#5F264A" />
      </div>

      <div className="flex flex-col items-start">
        <span>Custom Text</span>
        <Button title="Custom Text" textColor="#BFCCB5"  color="#393646" />
      </div>
    </div>
  );
}

export default Index;
