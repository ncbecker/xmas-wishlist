import "./Input.css";
import giftbox from "./gift-box.svg";

export default function CreateInput({ handleSubmit, wish, setWish }) {
  return (
    <form className="input-form" onSubmit={(event) => handleSubmit(event)}>
      <input
        required
        id="addwish"
        placeholder={"Tell me your wish"}
        type="text"
        value={wish}
        onChange={(event) => setWish(event.target.value)}
      />
      <button>
        <img src={giftbox} alt={"Gift Box"} />
      </button>
    </form>
  );
}
