import React from "react";
import Button from "../Button/Component";

function Component({
  open,
  setOpen,
  title,
  content,
  closable,
  footer,
  width = 500,
  okText = "Ok",
  cancelText = "Cancel",
  onOk,
  onCancel,
}) {
  return (
    open && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div
          className="bg-white shadow p-5 border rounded"
          style={{ width: width }}
        >
          <div className="flex justify-between text-black uppercase">
            <span className="font-bold">{title}</span>
            {closable && (
              <span className="cursor-pointer" onClick={() => setOpen(false)}>
                X
              </span>
            )}
          </div>

          {footer && (
            <div className="flex justify-end gap-5 mt-5">
              <Button title={cancelText} onClick={onCancel} variant="outlined" textColor="primary"/>
              <Button title={okText} onClick={onOk} />
            </div>
          )}
        </div>
      </div>
    )
  );
}

export default Component;
