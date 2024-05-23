import "../styles/Button.css";

export default function Button({ func, text, name }) {
  return (
    <button onClick={func} className={name}>
      Play Again
    </button>
  );
}
