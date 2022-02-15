"use strict";

const BASE_URL = "https://pokeapi.co/api/v2/";
const $pokeArea = $("#pokemon-area");
const $pokeBtn = $("#get-mon-btn");
const HEADERS = { 'content-type': 'application/json' };

async function getMon() {
    let randomMon = randomInteger(1,898);
    const monster = await axios.get(`${BASE_URL}pokemon/${randomMon}`);
    console.log("mon: ", monster);
    let monSrc = monster.data.sprites.front_shiny;

    $pokeArea.append(
      $("<img>", {
        src: monSrc,
      }));
    return monster;
  }
$pokeBtn.on("click", getMon);
  // getMon();

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}