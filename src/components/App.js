import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchedListings, setSearchedListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => {
        setListings(data);
      })
      .then(() => {
        setSearchedListings(listings);
      });
  }, []);

  function onDeleteListing(deletedListing) {
    const updatedListing = listings.filter(
      (listing) => listing.id !== deletedListing.id
    );
    setListings(updatedListing);
  }

  function onSearchFormSubmit(key) {
    setSearchedListings(listings);
    const updatedListings = listings.filter((listing) => {
      return listing.description.toLowerCase().includes(key.toLowerCase());
    });
    setSearchedListings(updatedListings);
  }

  return (
    <div className="app">
      <Header onSearchFormSubmit={onSearchFormSubmit} />
      <ListingsContainer
        listings={searchedListings}
        onDeleteListing={onDeleteListing}
      />
    </div>
  );
}

export default App;
