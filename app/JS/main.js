// main.js
import "../css/style.css";
import { genshinCharacters } from "./genshin";
import { initializeFilter } from './filter.js';

// Get the container where character cards will be inserted
const container = document.querySelector("#characters-list");

function createCards() {
  genshinCharacters.forEach((character) => {
    const genshinHTML = `
      <div class="character-item" data-name="${character.name}" data-element="${character.element}">
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

// Create cards first before initializing the filter
createCards();

// Wait until the DOM is loaded and then initialize the filter functionality
document.addEventListener("DOMContentLoaded", function() {
  initializeFilter(); // Initialize the filter after the cards are created
});
