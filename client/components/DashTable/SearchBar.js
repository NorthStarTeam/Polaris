import React, { useRef } from 'react';

const SearchBar = ({ filTxt, onUserInput }) => {
  const inputEl = useRef(null);
  const handleChange = () => {
    console.log('inputEl.current.value', inputEl.current);
    onUserInput(inputEl.current.value);
    // console.log('filTex', filTxt);
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={filTxt}
        ref={inputEl}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
