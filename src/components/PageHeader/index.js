import React from "react";
import PageHeader from "./Component";

function Index() {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="border p-2 border-gray-300 w-full">
        <span>Basic Page Header with default props</span>
        <PageHeader title="Page Header" />
      </div>

      <div className="border p-2 border-gray-300 w-full">
        <span>Page Header with custom text-size (2xl)</span>
        <PageHeader title="Page Header" size="2xl" />
      </div>

      <div className="border p-2 border-gray-300 w-full">
        <span>Page Header with underline prop</span>
        <PageHeader title="Page Header" size="2xl" underlined />
      </div>

      <div className="border p-2 border-gray-300 w-full">
        <span>Page Header with bold</span>
        <PageHeader title="Page Header" size="2xl" bold />
      </div>

      <div className="border p-2 border-gray-300 w-full">
        <span>Page Header with uppercase</span>
        <PageHeader title="Page Header" size="2xl" uppercase />
      </div>

      <div className="border p-2 border-gray-300 w-full">
        <span>Page Header with align property</span>
        <PageHeader title="Page Header" size="2xl" align="center" />
      </div>

      <div className="border p-2 border-gray-300 w-full">
        <span>Page Header with custom text color</span>
        <PageHeader title="Page Header" size="2xl" textColor='green' />
      </div>
    </div>
  );
}

export default Index;
