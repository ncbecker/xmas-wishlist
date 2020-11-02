import React from "react";
import "./WishlistItem.css";
import PropTypes from "prop-types";
import editIcon from "./assets/Edit.svg";
import checkIcon from "./assets/Check.svg";
import cancelIcon from "./assets/Cancel.svg";

export default function WishlistItem({ wish, onClickRemove }) {
  return (
    <li className="list-item">
      {wish}
      <div className="list-item-btn-container">
        <button className="list-btn" id="edit">
          <img className="list-btn-symbol edit" src={editIcon} alt="editk" />
        </button>
        <button className="list-btn" id="done">
          <img className="list-btn-symbol check" src={checkIcon} alt="check" />
        </button>
        <button
          className="list-btn"
          id="cancel"
          onClick={() => onClickRemove(wish)}
        >
          <img
            className="list-btn-symbol cancel"
            src={cancelIcon}
            alt="cancel"
          />
        </button>
      </div>{" "}
    </li>
  );
}

WishlistItem.propTypes = {
  wish: PropTypes.any,
};
