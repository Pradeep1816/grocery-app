import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
function SearchHeader() {
  return (
    <div className="transition-all  border overflow-hidden col-span-5  md:col-auto md:col-span-auto shrink w-full flex items-center rounded-md md:px-5 p-2 bg-gray-100">
      <div className="text-right ml-2">
        <CiSearch className="text-3xl font-bold" />
      </div>
      <div className="ml-2">
        <h1 className="text-xs">Search for masala atta and more</h1>
      </div>
    </div>
  );
}

export default SearchHeader;
