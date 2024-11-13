// filter.js
export function initializeFilter() {
  // Select the main container where we want to insert the dropdown above
  const mainContainer = document.querySelector(".main");

  // Insert the dropdown filter HTML dynamically using insertAdjacentHTML
  mainContainer.insertAdjacentHTML(
    "beforebegin",
    `
      <div class="filter">
        <label for="category-filter">Filter by Category:</label>
        <select id="category-filter">
          <option value="all">All</option>
          <option value="Liyue">Liyue</option>
          <option value="Mondstadt">Mondstadt</option>
          <option value="Inazuma">Inazuma</option>
          <option value="Sumeru">Sumeru</option>
        </select>
      </div>
    `
  );

  // Select the newly added dropdown element
  const categoryFilter = document.querySelector("#category-filter");
  const characterItems = document.querySelectorAll(".character-item");

  // Event listener for dropdown changes
  categoryFilter.addEventListener("change", function () {
    const selectedCategory = categoryFilter.value;

    characterItems.forEach((item) => {
      // Get the category of each character item
      const itemCategory = item.getAttribute("data-category");

      // Show or hide character based on the selected category
      if (selectedCategory === "all" || itemCategory === selectedCategory) {
        item.style.display = "flex"; // Show matching items
      } else {
        item.style.display = "none"; // Hide non-matching items
      }
    });
  });
}
