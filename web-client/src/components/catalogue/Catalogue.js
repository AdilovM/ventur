import React from 'react';

function ListingCard({ image, title, location, price, rating }) {
  return (
    <div className="listing-card">
      <img src={image} alt={title} />
      <div className="listing-info">
        <h2>{title}</h2>
        <p>{location}</p>
        <div className="listing-price-rating">
          <span>{price} per day</span>
          <span>{rating}</span> {/* You can use some star icons here for better visuals */}
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
