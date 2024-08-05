import React from "react";
import Search from "./Search";

function Header({ onSearchFormSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchFormSubmit={onSearchFormSubmit} />
    </header>
  );
}

export default Header;
