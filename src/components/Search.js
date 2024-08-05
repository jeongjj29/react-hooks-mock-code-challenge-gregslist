import React, { useState } from "react";

function Search({ onSearchFormSubmit }) {
  const [formValue, setFormValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearchFormSubmit(e.target.search.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={formValue}
        onChange={(e) => {
          setFormValue(e.target.value);
        }}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
