import "../styles/PokemonContainer.css";

export default function PokemonContainer({ pkmData, func, src, name, data }) {
  return (
    <div className="pokemon--icons" onClick={(evt) => func(evt, pkmData)}>
      <img src={src} alt="Pokemon image" />
    </div>
  );
}
