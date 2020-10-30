import "./Input.css";
// import giftbox from "./gift-box.svg";
import React from "react";

export default function CreateInput() {
  return (
    <form>
      <input placeholder={"Tell me your wish"}></input>
      <button>
        🎁
        {/* <img src={giftbox} alt={"Gift Box"} /> */}
      </button>
    </form>
  );
}
