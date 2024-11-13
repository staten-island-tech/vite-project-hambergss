import "../css/style.css"; //to leave and enter the folder
import { genshinCharacters } from "./genshin";
import { themeBtn } from "./theme";
// main.js
import { initializeFilter } from './filter.js';

console.log(genshinCharacters);
console.log(themeBtn);
// Initialize the dropdown filter
initializeFilter();

const container = document.getElementById("characters-list");

function createCards() {
  genshinCharacters.forEach((character) => {
    const genshinHTML = `
        <div class="character-item">
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.altText}" class="character-image" />
        <p>Star: ${character.star}</p>
        <p>Banner: ${character.banner}</p>
        <p>Element: ${character.element}</p>
        <p>Weapon: ${character.weapon}</p>
        <p>Type: ${character.type}</p>
        <p>Tier: ${character.tier}</p>
        </div>
    `;
    container.insertAdjacentHTML("beforeend", genshinHTML);
  });
}

createCards();
