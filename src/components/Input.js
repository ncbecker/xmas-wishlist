import "./Input.css";
// import giftbox from "./gift-box.svg";
import React from "react";

export default function CreateInput() {
  const [wish, setWish] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let wishes = null;
    try {
      wishes = JSON.parse(localStorage.getItem("wishes")) || [];
    } catch (error) {
      console.error(error);
      wishes = [];
    }
    const newWishes = [...wishes, wish];
    localStorage.setItem("wishes", JSON.stringify(newWishes));
    setWish("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="addwish"
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
