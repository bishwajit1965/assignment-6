const loadAiData = async () => {
  try {
    const URL = "https://openapi.programming-hero.com/api/ai/tools";
    const response = await fetch(URL);
    const toolData = await response.json();
    displayAiData(toolData.data.tools);
  } catch (error) {
    console.log(error);
  }
};

// Load 6 random data
const displayAiData = (toolData) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const showAllData = document.getElementById("show-all-data");
  const range = 6;
  if (range && toolData.length > range) {
    toolData = toolData.slice(0, range);
    showAllData.classList.remove("d-none");
  } else {
    showAllData.classList.remove("d-none");
  }

  displayCardData(toolData);
  spinnerToggler(true);
};

// Load more random data available
const loadMoreData = () => {
  document
    .getElementById("show-all-data-btn")
    .addEventListener("click", function () {
      let dataLoader = async () => {
        try {
          const URL = "https://openapi.programming-hero.com/api/ai/tools";
          const response = await fetch(URL);
          const toolData = await response.json();
          displayAll(toolData.data.tools);
          console.log(toolData);
        } catch (error) {
          console.log(error);
        }
      };
      const displayAll = (allAiData) => {
        const showAll = document.getElementById("show-all-data-btn");
        displayCardData(allAiData);
        showAll.classList.add("d-none");
        spinnerToggler(true);
      };
      dataLoader();
    });
};

// Show limited sorted button
document
  .getElementById("sort-limited-dated-btn")
  .addEventListener("click", function () {
    let loadLimitedSortedData = async () => {
      try {
        const URL = "https://openapi.programming-hero.com/api/ai/tools";
        const response = await fetch(URL);
        const rangedAiData = await response.json();
        displaySortedData(rangedAiData.data.tools);
        // console.log(rangedAiData);
      } catch (error) {
        console.log(error);
      }
    };

    const displaySortedData = (rangedAiData) => {
      const range = 6;
      if (range && rangedAiData.length > range) {
        rangedAiData = rangedAiData.slice(0, range);
      }
      if (rangedAiData) {
        limitedSorted = document.getElementById("sort-limited-dated-btn");
        allSorted = document.getElementById("all-sorted-data-btn");
        limitedSorted.classList.add("d-none");
        allSorted.classList.remove("d-none");

        let isDescending = true;
        rangedAiData = rangedAiData.sort((a, b) =>
          isDescending
            ? new Date(a.published_in) - new Date(b.published_in)
            : new Date(b.published_in) - new Date(a.published_in)
        );
        displayCardData(rangedAiData);
        spinnerToggler(true);
      }
    };
    loadLimitedSortedData();
  });

// Show all date sorted button
document
  .getElementById("all-sorted-data-btn")
  .addEventListener("click", function () {
    const loadAiData = async () => {
      try {
        const URL = "https://openapi.programming-hero.com/api/ai/tools";
        const response = await fetch(URL);
        const data = await response.json();
        displayAllRangedAiData(data.data.tools);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    const displayAllRangedAiData = (aiData) => {
      let isDescending = true;
      aiData = aiData.sort((a, b) =>
        isDescending
          ? new Date(a.published_in) - new Date(b.published_in)
          : new Date(b.published_in) - new Date(a.published_in)
      );
      displayCardData(aiData);
    };
    loadAiData();
  });

/* Modal details displayed
===========================*/

//Load all data
loadMoreData();
// Will load ai data
loadAiData();
