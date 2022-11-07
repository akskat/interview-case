import { Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getAllPokemon } from "../api/GetAPI";
//import { Spinner, Button } from "@chakra-ui/react";

import { POKEMONS } from "../constants";

const MainTable = () => {
  const [buttonPressed, setButtonPressed] = useState<Boolean>(false);
  const [handleClick, setHandleClick] = useState<Boolean>(false);
  const pokemons = getAllPokemon;

  function handleOnClick() {
    console.log("onClick");
    setButtonPressed(!buttonPressed);
    setHandleClick(true);
  }

  useEffect(() => {
    if (handleClick === true) {
      setTimeout(() => {
        setHandleClick(false);
      }, 500);
    }
  }, [handleClick]);

  return (
    <div>
      <button onClick={handleOnClick}>Click here to fetch 10 pokemons</button>
      {handleClick ? <span>spinner</span> : null}
    </div>
  );
};

export default MainTable;
