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

let debounceTimer;

searchInput.addEventListener("input", function () {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(async () => {
    if (searchInput.value.trim() == "") {
      searchResults.classList.remove("active");
      return;
    }

    searchResults.classList.add("active");

    const allData = await fetchData();
  }, 600);
});
