import "./Wishlist.css";
import React from "react";
import PropTypes from "prop-types";
import WishlistItem from "./WishlistItem";

export default function Wishlist({ wishlistItems }) {
  return (
    <div className="wishlist-container">
      <ul className="wishlist">
        {wishlistItems.map((wish) => (
          <WishlistItem key={wish} wish={wish} />
        ))}
      </ul>
    </div>
  );
}

Wishlist.propTypes = {
  wishlistItems: PropTypes.any,
};
