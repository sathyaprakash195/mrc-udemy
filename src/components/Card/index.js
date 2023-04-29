import React from "react";
import Card from "./Component";

function Index() {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col gap-5">
        <span>Basic card</span>

        <Card
          title="Basic card"
          content={
            <>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
              fugit facere consequatur provident vitae voluptatem iste velit
              sunt et ad reiciendis iusto eos quae delectus rerum at facilis
              praesentium aliquam.
            </>
          }
        />
      </div>

      <div className="flex flex-col gap-5">
        <span>Card with footer</span>

        <Card
          title="Card with footer"
          footer
          okText="Save Data"
          cancelText="Cancel"
          onOk={() => alert("data saved")}
          onCancel={() => alert("cancel")}
          content={
            <>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
              fugit facere consequatur provident vitae voluptatem iste velit
              sunt et ad reiciendis iusto eos quae delectus rerum at facilis
              praesentium aliqua
            </>
          }
        />
      </div>
    </div>
  );
}

export default Index;
