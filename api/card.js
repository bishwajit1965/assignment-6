// Cards data displayed
const displayCardData = (toolData) => {
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";
  toolData.forEach((element) => {
    // Objects destructured
    const { id, features, image, name, published_in } = element;
    const colDiv = document.createElement("div");
    colDiv.classList.add("col");
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    colDiv.appendChild(cardDiv);

    cardDiv.innerHTML = `
      <img src="${image}" class="card-img-top card-img" alt="Card Thumb">
      `;

    // Card body data loaded
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "card-height");

    // Features loaded
    const h4 = document.createElement("h4");
    h4.classList.add("title-text-size", "mt-3");
    h4.textContent = "Features:";
    cardBody.appendChild(h4);
    const featureElement = document.createElement("ol");
    featureElement.classList.add("px-4");

    const cardDataFeatures = features;
    Object.values(cardDataFeatures).forEach((feature) => {
      const li = document.createElement("li");
      li.classList.add("li-text-size");
      featureElement.appendChild(li);
      li.textContent = `
        ${feature ? feature : "No data found..."}
        `;
      cardBody.appendChild(featureElement);
    });

    // Hr
    const hr = document.createElement("hr");

    featureElement.appendChild(hr);

    /* Button to load modal data
      =================================================*/
    const loadModalButtonDiv = document.createElement("div");
    loadModalButtonDiv.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "px-2"
    );

    loadModalButtonDiv.innerHTML = `
        <div class="">
          <h6 class="card-body-text"> ${name}</h6>
          <h6 class="card-body-text"><i class="fa fa-calendar"></i> ${published_in}</h6>
        </div>
        <div class="">
          <button type="button" onclick="loadAiSingleDataDetails(${id})"  class="btn btn-sm btn-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-arrow-right"></i></button>
        </div>
      `;

    cardsContainer.appendChild(colDiv);
    cardDiv.appendChild(cardBody);
    cardBody.appendChild(loadModalButtonDiv);
  });
};
