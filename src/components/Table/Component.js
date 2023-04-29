import React from "react";
import Input from "../Input/Component";
import Select from "../Select/Component";

function Component({ columns, dataSource }) {
  const [sortBy, setSortBy] = React.useState("");
  const [searchText, setSearchText] = React.useState("");

  const getDataSource = () => {
    const tempData = [...dataSource];

    // sort by
    if (sortBy) {
      tempData.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
          return 1;
        } else if (a[sortBy] < b[sortBy]) {
          return -1;
        } else {
          return 0;
        }
      });
    }

    return tempData.filter((row) => {
      return JSON.stringify(row)
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  };

  return (
    <div>
      <div className="flex justify-between mb-5 items-center">
        <Input
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search"
          label="Search"
        />

        <Select
          options={columns}
          labelProperty="headerName"
          valueProperty="fieldName"
          value={sortBy}
          onChange={(v) => {
            setSortBy(v);
          }}
          label="Sort By"
        />
      </div>

      <table className="border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column) => (
              <th
                key={column.fieldName}
                className="border border-gray-300 p-2 text-left"
              >
                {column.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getDataSource().map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td
                  key={column.fieldName}
                  className="border border-gray-300 p-2"
                >
                  {row[column.fieldName]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Component;
