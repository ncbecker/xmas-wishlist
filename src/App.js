import "./App.css";
import "./Snowfall.css";
import CreateInput from "./components/Input";
import React, { useState } from "react";
import Wishlist from "./components/Wishlist";
import Logo from "./components/assets/logo.svg";

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
    <div>
      <header>
        <div className="logo-form-container">
          <a href="./index.html">
            <img className="logo" src={Logo} alt="logo" />
          </a>
          <CreateInput
            wish={wish}
            handleSubmit={handleSubmit}
            setWish={setWish}
          />
        </div>
      </header>
      <main>
        <Wishlist wishlistItems={currentWishes} />
      </main>
      <footer className="Snowfall"></footer>
    </div>
  );
}

export default App;
