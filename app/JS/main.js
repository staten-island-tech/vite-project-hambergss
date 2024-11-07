import "../css/style.css"; //to leave and enter the folder
import { genshinCharacters } from "./genshin";

console.log(genshinCharacters);

const container = document.querySelector("characters-list");

function createCards(character) {
  genshinCharacters.forEach((character) => {
    const genshinHTML = `
        <div class="character-item">
        <h2>${character.name}</h2>
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

createCards(genshinCharacters);
