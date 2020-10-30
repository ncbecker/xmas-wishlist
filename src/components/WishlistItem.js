import React from "react";
import "./WishlistItem.css";
import PropTypes from "prop-types";

export default function WishlistItem({ wish }) {
  return <li className="List-item">{wish}</li>;
}

WishlistItem.propTypes = {
  wish: PropTypes.any,
};