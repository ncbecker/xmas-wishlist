import "./Input.css";
// import giftbox from "./gift-box.svg";
import React from "react";

export default function CreateInput() {
  const [wish, setWish] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(wish);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder={"Tell me your wish"}
        type="text"
        value={wish}
        onChange={(event) => setWish(event.target.value)}
      />
      <button>
        🎁
        {/* <img src={giftbox} alt={"Gift Box"} /> */}
      </button>
    </form>
  );
}
