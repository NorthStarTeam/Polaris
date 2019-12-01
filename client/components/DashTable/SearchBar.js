import React, { useRef } from 'react';

const SearchBar = ({ filTxt, onUserInput }) => {
  const inputEl = useRef(null);
  const handleChange = () => {
    // console.log('inputEl.current.value', inputEl.current);
    onUserInput(inputEl.current.value);
  };

  return (
    <input
      className="search"
      type="text"
      placeholder="Search..."
      value={filTxt}
      ref={inputEl}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
