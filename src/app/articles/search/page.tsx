import React from "react";

interface searchPropsPage {
  searchParams: { searchText: string };
}

export default function search({ searchParams }: searchPropsPage) {
  console.log(searchParams.searchText);

  return (
    <div className="lg:p-12 p-4">
      search Items :
      <span className="underline font-semibold text-red-600">
        {searchParams.searchText}
      </span>
    </div>
  );
}
