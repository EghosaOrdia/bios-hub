const fetchData = async () => {
  try {
    const response = await fetch("data/boards.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Uh oh☹️, something went wrong: ${error}`);
  }
};

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchDiv = document.getElementById("searchDiv");
const notFound = document.getElementById("notfound");

let debounceTimer;

const renderResults = (results) => {
  searchDiv.innerHTML = results
    .map((entry) => {
      return `<div class="search__result">
            <div>
              <span class="search__title">Board Number: </span>
              <span class="search__value">${entry.boardNumber}</span>
            </div>
            <div>
              <span class="search__title">Board Title: </span>
              <span class="search__value"
                >${entry.boardTitle}</span
              >
            </div>
            <div>
              <span class="search__title">Model:</span>
              <span class="search__value">${entry.model}</span>
            </div>
          </div>`;
    })
    .join("");
  notFound.classList.add("hidden");

  if (results < 1) {
    notFound.classList.remove("hidden");
    searchDiv.classList.add("active");
  }

  searchResults.classList.add("active");
};

searchInput.addEventListener("input", function () {
  clearTimeout(debounceTimer);
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    searchResults.classList.remove("active");
    return;
  }

  debounceTimer = setTimeout(async () => {
    const allData = await fetchData();
    const filtered = allData.filter(
      (item) =>
        item.boardNumber.toLowerCase().includes(query) ||
        item.boardTitle.toLowerCase().includes(query) ||
        item.model.toLowerCase().includes(query)
    );

    renderResults(filtered);
  }, 400);
});
