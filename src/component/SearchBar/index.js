import React, { useState } from 'react';

import './styles.scss';

export default function SearchBar({ setSearch, setPage, page }) {
  const [open, setOpen] = useState(false)
  const focusUsernameInputField = input => {
    if (input && open && page === 0) {
      input.focus()
    }
  };
  return (
    <div className={`search ${open && 'open'}`}>
      <input
        ref={focusUsernameInputField}
        type="search"
        onChange={(e) => {
          setPage(0)
          setSearch(escape(e.target.value) || 'dog')
        }} 
        className="search-box"
      />
      <span
        className="search-button"
        onClick={() => setOpen(!open)}
      >
        <span className="search-icon"></span>
      </span>
    </div>
  );
}
