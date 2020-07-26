import React from "react";

const SearchBar = ({ value, change, submit }) => {
  return (
    <form onSubmit={submit} className="fadeIn">
      <span>
        <i className="fa fa-search"></i>
      </span>
      <input
        className="searchbar"
        type="text"
        name="city"
        value={value}
        onChange={change}
        placeholder="Search By City..."
      />
    </form>
  );
};

export default SearchBar;
