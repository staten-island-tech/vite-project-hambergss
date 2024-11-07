import "../css/style.css"; //to leave and enter the folder
import { genshinCharacters } from "./genshin";

console.log(genshinCharacters);

const charactersListContainer = document.getElementById("characters-list");

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
        <p>Image: ${character.image}</p>
        </div>
    `;
  charactersListContainer.insertAdjacentHTML("beforeend", genshinHTML);
});
