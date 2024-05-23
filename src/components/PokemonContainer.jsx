import "../styles/PokemonContainer.css";

export default function PokemonContainer({ pkmData, func, src, name, data }) {
  const imgStyle = pkmData.clicked
    ? { backgroundColor: "green" }
    : { backgroundColor: "red" };
  return (
    <div className="pokemon--icons" onClick={() => func(pkmData)}>
      <img src={src} alt="Pokemon image" style={imgStyle} />
    </div>
  );
}
