import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import PokemonContainer from "./components/PokemonContainer";
import { nanoid } from "nanoid";

function App() {
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [pkmContainerData, setPkmContainerData] = useState([]);

  const arr = Array.from({ length: 700 }, (_, i) => i);

  const shuffeArr = (arr) => {
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

  // console.log(getPkm(shuffled));

  const makePkmContainerData = (arr) => {
    const data = [];
    // console.log(arr);
    arr.map((item) => {
      item.map((pkm) => {
        const newItem = {
          name: pkm.name,
          sprite: pkm.sprites["front_default"],
          clicked: false,
          id: nanoid(),
        };
        data.push(newItem);
      });
    });

    // console.log(data);
    return data;
  };

  const toggleId = (item) => {
    //if id matches
    //flip the id from false to true

    setPkmContainerData((prevData) => {
      return prevData.map((pkm) => {
        if (pkm.id === item.id) {
          return { ...item, clicked: true };
        }
        return pkm;
      });
    });

    // console.log(item);
    // console.log(pkmContainerData);
  };

  useEffect(() => {
    const data = makePkmContainerData(allPokemonData);
    setPkmContainerData(data);
  }, [allPokemonData]);

  // console.log(allPokemonData);
  console.log(pkmContainerData);

  useEffect(() => {
    const shuffledPkm = getPkm(shuffled);
    const fetchPost = async () => {
      try {
        const response = Array.from({ length: 10 }, (_, i) => {
          return fetch(
            `https://pokeapi.co/api/v2/pokemon/${shuffledPkm[i]}`
          ).then((response) => response.json());
        });

        const allPokemonData = await Promise.all(response);

        setAllPokemonData((prevData) => {
          return [...prevData, allPokemonData];
        });
        setLoaded(true);
      } catch (error) {
        console.error("Failed to fetch pokemon data", error);
      }
    };

    fetchPost();
  }, []);

  if (loaded) {
    return (
      <>
        <h1>Vite + React</h1>

        <main>
          {pkmContainerData.map((pkm) => {
            return (
              <PokemonContainer
                key={pkm.id}
                pkmData={pkm}
                func={toggleId}
                src={pkm.sprite}
              />
            );
          })}
        </main>
        {/* <PokemonContainer /> */}
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
