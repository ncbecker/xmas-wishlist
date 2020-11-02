import "./Wishlist.css";
import React from "react";
import PropTypes from "prop-types";
import WishlistItem from "./WishlistItem";

export default function Wishlist({ wishlistItems, onClickRemove }) {
  return (
    <div className="wishlist-container">
      <ul className="wishlist">
        {wishlistItems.map((wish) => (
          <WishlistItem key={wish} wish={wish} onClickRemove={onClickRemove} />
        ))}
      </ul>
    </div>
  );
}

Wishlist.propTypes = {
  wishlistItems: PropTypes.any,
};
