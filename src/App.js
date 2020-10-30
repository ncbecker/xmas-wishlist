import "./App.css";
import CreateInput from "./components/Input";
import React, { useState } from "react";
import Wishlist from "./components/Wishlist";

function App() {
  const [currentWishes, setCurrentWishes] = useState(
    JSON.parse(localStorage.getItem("wishes")) || []
  );

  const [wish, setWish] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newWishes = [...currentWishes, wish];
    localStorage.setItem("wishes", JSON.stringify(newWishes));
    setWish("");

    setCurrentWishes(newWishes);
  }

  return (
    <main>
      <header>🎄 MY X-MAS WISHLIST 2020</header>
      <CreateInput wish={wish} handleSubmit={handleSubmit} setWish={setWish} />
      <Wishlist wishlistItems={currentWishes} />
    </main>
  );
}

export default App;
