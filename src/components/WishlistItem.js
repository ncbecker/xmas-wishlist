import React from "react";
import "./WishlistItem.css";
import PropTypes from "prop-types";

export default function WishlistItem({ wish }) {
  return (
    <li className="list-item">
      {wish}
      <div className="checkbox">
        <input type="checkbox" id="done" name="done" />
        <label htmlFor="done">🎅🏻</label>
      </div>{" "}
    </li>
  );
}

WishlistItem.propTypes = {
  wish: PropTypes.any,
};
