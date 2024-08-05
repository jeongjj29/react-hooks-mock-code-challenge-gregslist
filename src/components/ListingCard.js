import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const [isFavorited, setIsFavorited] = useState(false);

  function handleFavoriteButtonClick() {
    setIsFavorited(!isFavorited);
  }

  function handleTrashButtonClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    }).then(() => {
      onDeleteListing(listing);
    });
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button
            className="emoji-button favorite active"
            onClick={handleFavoriteButtonClick}
          >
            ★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={handleFavoriteButtonClick}
          >
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button
          className="emoji-button delete"
          onClick={handleTrashButtonClick}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
