import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="search"
      name="query"
      placeholder="Search..."
      className="form-control mr-sm-2"
      aria-label="Search"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
