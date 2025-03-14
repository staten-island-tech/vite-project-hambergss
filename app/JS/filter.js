// filter.js
import "../css/style.css";
import { genshinCharacters } from "./genshin";

document.addEventListener("DOMContentLoaded", function() {
  const DOMSelectors = {
    starSorter: document.querySelector("astarsorter"),
    bannerSorter: document.querySelector("abannersorter"),
    elementSorter: document.querySelector("aelementsorter"),
    weaponSorter: document.querySelector("aweaponsorter"),
    tierSorter: document.querySelector("atiersorter"),
    
  };
})


export { DOMSelectors };

export function initializeFilter() {
  // Helper function to filter and display cards based on element
  function filterCards(element) {
    console.log(`Filtering for element: ${element}`);

    // Loop through each character item and toggle visibility based on element
    DOMSelectors.characterItems.forEach((item) => {
      const itemElement = item.getAttribute("data-element"); // Get element from data-element attribute

      // Show or hide based on element
      if (element === "all" || itemElement === element) {
        item.style.display = "flex"; // Show matching items
      } else {
        item.style.display = "none"; // Hide non-matching items
      }
    });
  }

  // Loop through filter buttons and attach event listeners
  DOMSelectors.filterButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent page refresh on button click
      const selectedElement = button.getAttribute("data-element");
      console.log(`${selectedElement} button clicked`);
      filterCards(selectedElement); // Trigger the filtering
    });
  });
}
