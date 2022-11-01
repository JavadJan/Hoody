import React from "react";
import './SearchBox.css';

function SearchBox() {
  return (
    <div className="box">
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <label htmlFor="" className="icon">
          <i className="fas fa-search"></i>
        </label>
      </div>
    </div>
  );
}

export default SearchBox;
