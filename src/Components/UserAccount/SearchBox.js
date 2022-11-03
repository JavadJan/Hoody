import React, {useState} from "react";
import './SearchBox.css';

function SearchBox() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
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
