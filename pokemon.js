"use strict";

const BASE_URL = "https://pokeapi.co/api/v2/";
const $pokeArea = $("#pokemon-area");
const HEADERS = { 'content-type': 'application/json' };

async function getMon() {
    const monster = await axios.get(`${BASE_URL}pokemon/1`);
    console.log("mon: ", monster);
    let monSrc = monster.data.sprites.front_default;

    $pokeArea.append(
      $("<img>", {
        src: monSrc,
      }));
    return monster;
  }

  getMon();