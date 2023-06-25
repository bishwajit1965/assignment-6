/* Spinner toggler
================== */
const spinnerToggler = (isLoadingSpinner) => {
  const loaderArea = document.getElementById("spinner-loader");
  if (isLoadingSpinner === true) {
    loaderArea.classList.remove("d-none");

    // Will show welcome message
    setTimeout(myGreeting, 1000);

    function myGreeting() {
      const notFound = document.getElementById("not-found-message");
      notFound.innerHTML = "";
      notFound.classList.remove("d-none");
      const message = document.createElement("h4");
      message.classList.add("text-success");
      // message.innerHTML = "";
      notFound.appendChild(message);
      message.innerHTML = "Welcome to ai resource hub !!!";
      // Will stop the spinner
      spinnerToggler(false);
      // Will remove the message after 3 seconds
      setTimeout(removeMessage, 1000);
      function removeMessage() {
        message.classList.add("d-none");
        spinnerToggler(false);
      }
    }
  } else {
    loaderArea.classList.add("d-none");
  }
};

// Hide show more button
function hideShowMoreButton() {
  const btn = document.getElementById("show-all-data-btn");
  btn.classList.add("d-none");
}

// Hide show buttons
function hideShowAllSortedButton() {
  const allSortedDataBtn = document.getElementById("all-sorted-data-btn");
  allSortedDataBtn.classList.add("d-none");
  const limitedSortedDataBtn = document.getElementById(
    "sort-limited-dated-btn"
  );
  limitedSortedDataBtn.classList.remove("d-none");

  const allMoreDataBtn = document.getElementById("show-all-data-btn");
  allMoreDataBtn.classList.remove("d-none");
}

// Display home button
function showHomeButton() {
  document
    .getElementById("show-all-data-btn")
    .addEventListener("click", function () {
      const homeBtn = document.getElementById("home-btn");
      homeBtn.classList.remove("d-none");
    });
}
showHomeButton();

// Show the home button
document
  .getElementById("sort-limited-dated-btn")
  .addEventListener("click", function () {
    const sortByDAteBtn = document.getElementById("home-btn");
    sortByDAteBtn.classList.remove("d-none");
  });

// Error message
const errorMessage = (message, target) => {
  const p = document.createElement("p");
  p.classList.add("mt-5", "not-found-message");
  p.style.color = "red";
  p.textContent = message;
  target.appendChild(p);
  return message;
};
