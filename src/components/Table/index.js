import React from "react";
import Table from "./Component";

function Index() {
  const dataSource = [
    {
      id: 1,
      name: "Mike",
      age: 32,
      accupation: "Software Engineer",
      salary: 100000,
    },
    {
      id: 2,
      name: "John",
      age: 32,
      accupation: "Software Engineer",
      salary: 100000,
    },
    {
      id: 3,
      name: "Michael",
      age: 28,
      accupation: "Designer",
      salary: 80000,
    },
    {
      id: 4,
      name: "Jane",
      age: 28,
      accupation: "Product Manager",
      salary: 120000,
    },
  ];

  const columns = [
    {
      headerName: "ID",
      fieldName: "id",
    },
    {
      headerName: "Name",
      fieldName: "name",
    },
    {
      headerName: "Age",
      fieldName: "age",
    },
    {
      headerName: "Accupation",
      fieldName: "accupation",
    },
    {
      headerName: "Salary",
      fieldName: "salary",
    },
  ];

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex flex-col border  border-gray-300 p-5 gap-3 w-full">
        <span>Basic Table</span>
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}

export default Index;
