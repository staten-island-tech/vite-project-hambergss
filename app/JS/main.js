import "../css/style.css";
import { genshinCharacters } from "./genshin";
import { themeBtn } from "./theme";

themeBtn();

document.addEventListener("DOMContentLoaded", function () {
  const DOMSelectors = {
    allList: document.querySelector("aalllist"),
    pyroSorter: document.querySelector("apyrosorter"),
    hydroSorter: document.querySelector("ahydrosorter"),
    cryoSorter: document.querySelector("acryosorter"),
    electroSorter: document.querySelector("aelectrosorter"),
    dendroSorter: document.querySelector("adendrosorter"),
    geoSorter: document.querySelector("ageosorter"),
    anemoSorter: document.querySelector("aanemosorter"),
    weaponSorter: document.querySelector("aweaponsorter"),
    characterCont: document.querySelector("acharacter-cont"),
    charactersList: document.querySelector("acharacters-list"),
  };
  // Get the container where character cards will be inserted
  const container = document.getElementById("characters-list");

  function createCards(genshinCharacters) {
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
  createCards(genshinCharacters);

  DOMSelectors.allList.addEventListener("click", () => {
    createCards(genshinCharacters);
  });

  DOMSelectors.pyroSorter.addEventListener("click", () => {
    const pyro = genshinCharacters.filter(
      (character) => character.element === "Pyro"
    );
    createCards(pyro);
  });

  DOMSelectors.hydroSorter.addEventListener("click", () => {
    const hydro = genshinCharacters.filter(
      (character) => character.element === "Hydro"
    );
    createCards(hydro);
  });

  DOMSelectors.cryoSorter.addEventListener("click", () => {
    const cryo = genshinCharacters.filter(
      (character) => character.element === "Cryo"
    );
    createCards(cryo);
  });

  DOMSelectors.electroSorter.addEventListener("click", () => {
    const electro = genshinCharacters.filter(
      (character) => character.element === "Electro"
    );
    createCards(electro);
  });

  DOMSelectors.dendroSorter.addEventListener("click", () => {
    const dendro = genshinCharacters.filter(
      (character) => character.element === "Dendro"
    );
    createCards(dendro);
  });

  DOMSelectors.geoSorter.addEventListener("click", () => {
    const geo = genshinCharacters.filter(
      (character) => character.element === "Geo"
    );
    createCards(geo);
  });

  DOMSelectors.anemoSorter.addEventListener("click", () => {
    const anemo = genshinCharacters.filter(
      (character) => character.element === "Anemo"
    );
    createCards(anemo);
  });
});
