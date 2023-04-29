import React from "react";
import Button from "../Button/Component";

function Component({
  title,
  footer,
  content,
  okText = "Save",
  cancelText = "Cancel",
  onOk = () => {},
  onCancel = () => {},
}) {
  return (
    <div className="border border-gray-300 rounded-lg p-5">
      <span className="font-semibold text-md">{title}</span>

      <div className="mt-5">{content}</div>

      {footer && (
        <div className="flex justify-end mt-5 gap-5">
          <Button title={cancelText} variant="outlined" textColor="primary"
            onClick={onCancel}
          />
          <Button title={okText} textColor="white"
            onClick={onOk}
          />
        </div>
      )}
    </div>
  );
}

export default Component;
