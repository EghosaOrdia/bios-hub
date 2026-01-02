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
let debounceTimer;

searchInput.addEventListener("input", function () {
  console.log(searchInput.value);

  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(async () => {
    const allData = fetchData();
  }, 2000);
});
