import React from "react";
import Button from "../Button/Component";
import Modal from "./Component";

function Index() {
  const [openClosableModal, setOpenClosableModal] = React.useState(false);
  const [openNonClosableModal, setOpenNonClosableModal] = React.useState(false);
  const [openCustomWidthModal, setOpenCustomWidthModal] = React.useState(false);
  const [openModalWithFooter, setOpenModalWithFooter] = React.useState(false);
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col border border-gray-300 p-5 w-full">
        <span>Closable Modal</span>
        <Button
          title="Open Closable Modal"
          onClick={() => setOpenClosableModal(true)}
        />

        <Modal
          open={openClosableModal}
          setOpen={setOpenClosableModal}
          title="Closable Modal"
          content="This is a closable modal content"
          closable={true}
        />
      </div>

      <div className="flex flex-col border border-gray-300 p-5 w-full">
        <span>Custom width</span>
        <Button
          title="Open Custom Width Modal"
          onClick={() => setOpenCustomWidthModal(true)}
        />

        <Modal
          open={openCustomWidthModal}
          setOpen={setOpenCustomWidthModal}
          title="Custom width modal"
          content="This is a custom width modal content"
          closable={true}
          width={800}
        />
      </div>

      <div className="flex flex-col border border-gray-300 p-5 w-full">
        <span>Non closable modal</span>
        <Button
          title="Open non closable modal"
          onClick={() => setOpenNonClosableModal(true)}
        />

        <Modal
          open={openNonClosableModal}
          setOpen={setOpenNonClosableModal}
          title="Non Closable modal"
          content="Non closable modal content"
          closable={false}
          width={800}
        />
      </div>

      <div className="flex flex-col border border-gray-300 p-5 w-full">
        <span>Modal with footer</span>
        <Button
          title="Open Modal With Footer"
          onClick={() => setOpenModalWithFooter(true)}
        />

        <Modal
          open={openModalWithFooter}
          setOpen={setOpenModalWithFooter}
          title="Modal with footer"
          content="This is a modal with footer content"
          closable={true}
          okText="Save"
          cancelText="Cancel"
          onOk={() => alert("Save")}
          onCancel={() => setOpenModalWithFooter(false)}
          footer={true}
          width={800}
        />
      </div>
    </div>
  );
}

export default Index;
