import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [pokemonData, setPokemonData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const arr = Array.from({ length: 700 }, (_, i) => i);
  const shuffeArr = (arr) => {
    // const newArr = arr.slice(0);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  };

  const shuffled = shuffeArr(arr);
  const getPkm = (arr) => {
    return arr.splice(0, 10);
  };

  console.log(getPkm(shuffled));
  useEffect(() => {
    const shuffledPkm = getPkm(shuffled);
    const fetchPost = async () => {
      try {
        const response = Array.from({ length: 10 }, (_, i) => {
          return fetch(
            `https://pokeapi.co/api/v2/pokemon/${shuffledPkm[i]}`
          ).then((response) => response.json());
        });

        const pokemonData = await Promise.all(response);

        setPokemonData((prevData) => {
          return [...prevData, pokemonData];
        });
        setLoaded(true);
      } catch (error) {
        console.error("Failed to fetch pokemon data", error);
      }
      // const response = await Array.from({ length: 10 }, (_, i) => {
      //   fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then((response) =>
      //     response.json()
      //   );
      // });

      // const pokemonData = await Promise.all(response);

      // setPokemonData((prevData) => {
      //   return [...prevData, pokemonData];
      // });
      // setLoaded(true);

      // for (let i = 1; i <= 10; i++) {
      //   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);

      //   const data = await response.json();
      //   // console.log(data);

      //   // setPokemonData(data);
      //   setPokemonData((prevData) => {
      //     return [...prevData, data];
      //   });
      // }
      // setLoaded(true);
    };

    fetchPost();
  }, []);
  console.log(pokemonData);
  // const sprite = pokemonData.sprites["front_default"];

  if (loaded) {
    return (
      <>
        <h1>Vite + React</h1>
        {/* <div>{pokemonData[0].sprites["front_default"]}</div> */}
        {pokemonData[0].map((pkm, idx) => {
          console.log(`i am ${pkm.name}`);
          // <div>{pkm.sprites["front_default"]}</div>;
          return <img key={idx} src={pkm.sprites["front_default"]} alt="" />;
        })}
        {/* <img src={pokemonData[0].sprites["front_default"]} alt="" /> */}
      </>
    );
  }

  return (
    <>
      <div>Loading</div>
    </>
  );
}

export default App;
