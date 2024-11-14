import "../css/style.css";
import { genshinCharacters } from "./genshin";

document.addEventListener("DOMContentLoaded", function () {
  const DOMSelectors = {
    allList: document.querySelector("#alllist"),
    pyroSorter: document.querySelector("#pyrosorter"),
    hydroSorter: document.querySelector("#hydrosorter"),
    cryoSorter: document.querySelector("#cryosorter"),
    electroSorter: document.querySelector("#electrosorter"),
    dendroSorter: document.querySelector("#dendrosorter"),
    geoSorter: document.querySelector("#geosorter"),
    anemoSorter: document.querySelector("#anemosorter"),
    charactersList: document.querySelector("#characters-list"),
  };

  const charactersListContainer = document.getElementById("characters-list");

  function createCards(characters) {
    charactersListContainer.innerHTML = "";
    characters.forEach((character) => {
      const genshinHTML = `
        <div class="character-item">
          <h2>${character.name}</h2>
          <img class="character-image" src="${character.image}" alt="${character.altText}"/>
          <p>Star: ${character.star}</p>
          <p>Banner: ${character.banner}</p>
          <p>Element: ${character.element}</p>
          <p>Weapon: ${character.weapon}</p>
          <p>Type: ${character.type}</p>
          <p>Tier: ${character.tier}</p>
        </div>
      `;
      charactersListContainer.insertAdjacentHTML("beforeend", genshinHTML);
    });
  }
  createCards(genshinCharacters);

  // Add event listeners to the filter buttons
  DOMSelectors.allList.addEventListener("click", () => {
    createCards(genshinCharacters);
  });

  DOMSelectors.pyroSorter.addEventListener("click", () => {
    const pyroCharacters = genshinCharacters.filter(
      (character) => character.element === "Pyro"
    );
    createCards(pyroCharacters);
  });

  DOMSelectors.hydroSorter.addEventListener("click", () => {
    const hydroCharacters = genshinCharacters.filter(
      (character) => character.element === "Hydro"
    );
    createCards(hydroCharacters);
  });

  DOMSelectors.cryoSorter.addEventListener("click", () => {
    const cryoCharacters = genshinCharacters.filter(
      (character) => character.element === "Cryo"
    );
    createCards(cryoCharacters);
  });

  DOMSelectors.electroSorter.addEventListener("click", () => {
    const electroCharacters = genshinCharacters.filter(
      (character) => character.element === "Electro"
    );
    createCards(electroCharacters);
  });

  DOMSelectors.dendroSorter.addEventListener("click", () => {
    const dendroCharacters = genshinCharacters.filter(
      (character) => character.element === "Dendro"
    );
    createCards(dendroCharacters);
  });

  DOMSelectors.geoSorter.addEventListener("click", () => {
    const geoCharacters = genshinCharacters.filter(
      (character) => character.element === "Geo"
    );
    createCards(geoCharacters);
  });

  DOMSelectors.anemoSorter.addEventListener("click", () => {
    const anemoCharacters = genshinCharacters.filter(
      (character) => character.element === "Anemo"
    );
    createCards(anemoCharacters);
  });
});
