const loadAiSingleDataDetails = async (id) => {
  const URL = `https://openapi.programming-hero.com/api/ai/tool/0${id}`;
  const response = await fetch(URL);
  const singleAiData = await response.json();
  displayDetailsOnModal(singleAiData.data);
};

const displayDetailsOnModal = (data) => {
  /* Left side text display
  =======================================*/
  const {
    accuracy,
    description,
    features,
    input_output_examples,
    integrations,
    image_link,
    pricing,
  } = data;

  // Ai description
  const aiDescription = document.getElementById("ai-description");
  aiDescription.innerHTML = "";
  const aiTitle = document.createElement("h6");
  if (description) {
    aiTitle.textContent = description ? description : "";
  } else {
    errorMessage("Description not found...", aiTitle);
  }
  aiDescription.appendChild(aiTitle);

  // Ai pricing
  const aiPricing = document.getElementById("ai-pricing");
  aiPricing.classList.add("row");
  aiPricing.innerHTML = "";
  if (pricing) {
    for (const aiData of Object.values(pricing)) {
      const aiPricingDiv = document.createElement("div");
      aiPricingDiv.classList.add("col-sm-4");
      const aiDataDiv = document.createElement("div");
      aiDataDiv.classList.add(
        "mt-2",
        "bg-white",
        "shadow-lg",
        "rounded",
        "p-2",
        "h-75"
      );
      aiDataDiv.innerHTML = `
        <p class="plan-text">${
          aiData.price != 0
            ? aiData.price
            : "<span style='color: green;'>Free of cost...</span>"
        }</p>
        <p class="plan-text">${aiData.plan} </p>
        `;
      aiPricingDiv.appendChild(aiDataDiv);
      aiPricing.appendChild(aiPricingDiv);
    }
  } else {
    errorMessage("Pricing not found...", aiPricing);
  }

  // Features
  const featuresDiv = document.getElementById("ai-features-container");
  featuresDiv.innerHTML = "";
  const h4 = document.createElement("h1");
  h4.classList.add("title-text-size");
  h4.textContent = "Features:";
  featuresDiv.appendChild(h4);
  const featureElement = document.createElement("ol");
  if (features) {
    Object.values(features).forEach((featureValues) => {
      const { feature_name } = featureValues;
      const li = document.createElement("li");
      li.classList.add("li-text-size");
      featureElement.appendChild(li);

      li.textContent = `
            ${feature_name ? feature_name : "No data found..."}
            `;
      featuresDiv.appendChild(featureElement);
    });
  } else {
    errorMessage("Features not found...", featuresDiv);
  }

  // Integrations
  const aiIntegrationContainer = document.getElementById(
    "ai-integration-container"
  );
  aiIntegrationContainer.innerHTML = "";
  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "Integrations:";
  headerTitle.classList.add("title-text-size");
  aiIntegrationContainer.appendChild(headerTitle);
  const intElement = document.createElement("ol");
  intElement.classList.add("px-4");

  if (integrations) {
    integrations.forEach((aiIntegrationItem) => {
      const li = document.createElement("li");
      li.classList.add("li-text-size");
      intElement.appendChild(li);
      li.textContent = `
     ${aiIntegrationItem ? aiIntegrationItem : "No data found..."}
    `;
      aiIntegrationContainer.appendChild(intElement);
    });
  } else {
    errorMessage("Integrations not found...", aiIntegrationContainer);
  }

  /* Right side image and text display
  =======================================*/
  const imageAndTextWrapper = document.getElementById("image-and-text-wrapper");
  imageAndTextWrapper.innerHTML = "";

  imageAndTextWrapper.classList.add(
    "border",
    "border-1",
    "rounded",
    "p-3",
    "shadow-sm",
    "position-relative"
  );
  if (image_link) {
    image_link.forEach((image) => {
      imageAndTextWrapper.innerHTML = `
      <img src="${
        image ? image : ""
      }" class="img-fluid w-100 rounded position-relative" alt="" />
      `;
    });
  } else {
    errorMessage("Image not found...", imageAndTextWrapper);
  }

  // Input output examples
  const inputOutputDivWrapper = document.getElementById("input-output-wrapper");
  inputOutputDivWrapper.classList.add(
    "border",
    "border-1",
    "rounded",
    "p-3",
    "rounded",
    "mt-3"
  );
  inputOutputDivWrapper.innerHTML = "";
  if (input_output_examples) {
    for (const inputOutputData of Object.values(input_output_examples)) {
      const inputOutputTextDiv = document.createElement("div");
      inputOutputDivWrapper.appendChild(inputOutputTextDiv);
      inputOutputTextDiv.innerHTML = "";
      const titleData = document.createElement("h6");
      const descriptionPara = document.createElement("p");
      descriptionPara.classList.add("description-text");

      titleData.innerText = `${inputOutputData.input}`;
      descriptionPara.innerText = `${inputOutputData.output}`;
      inputOutputTextDiv.appendChild(titleData);
      inputOutputTextDiv.appendChild(descriptionPara);
    }
  } else {
    errorMessage("Input output not found...", inputOutputDivWrapper);
  }

  // Accuracy button
  const accuracyButton = document.createElement("button");
  accuracyButton.classList.add(
    "btn",
    "btn-sm",
    "btn-danger",
    "position-absolute",
    "button-position"
  );

  if (accuracy.score === null) {
    accuracyButton.classList.add("d-none");
  } else {
    accuracyButton.innerText = `${
      accuracy.score ? accuracy.score * 100 : "No score..."
    } % accuracy `;
  }
  imageAndTextWrapper.appendChild(accuracyButton);
};
loadAiSingleDataDetails();
