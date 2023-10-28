import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="flex items-start justify-center w-full">
      <input className=" outline-none border bg-transparent rounded p-2"
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}