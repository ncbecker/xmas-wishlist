import "./Input.css";
import giftbox from "./assets/Add.svg";

export default function CreateInput({ handleSubmit, wish, setWish }) {
  return (
    <form className="input-form" onSubmit={(event) => handleSubmit(event)}>
      <label className="input-label">I wish for</label>

      <input
        required
        id="addwish"
        placeholder={"for a miracle"}
        type="text"
        value={wish}
        onChange={(event) => setWish(event.target.value)}
      />
      <button className="btn-submit">
        <img className="submit-symbol" src={giftbox} alt={"Gift Box"} />
      </button>
    </form>
  );
}
