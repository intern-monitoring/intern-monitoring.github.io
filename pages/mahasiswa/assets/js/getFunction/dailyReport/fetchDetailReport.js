import { responseDataDetail } from "./detailReport.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlFetch } from "./urlDetailReport.js";
import { show, hide } from "https://jscroot.github.io/element/croot.js";

// Function to generate skeleton based on detailDailyReport layout
function generateSkeleton() {
  const skeletonContainer = document.getElementById("skeletonLoader");
  const detailReportContainer = document.getElementById("detailDailyReport");

  if (detailReportContainer) {
    // Clone the detailDailyReport container
    const skeletonClone = detailReportContainer.cloneNode(true);

    // Remove actual content, add skeleton class, and apply styling
    skeletonClone.innerHTML = "";
    skeletonClone.classList.add("skeleton-loader");

    // Apply styling to make the skeleton look distinct (you can customize this)
    skeletonClone.style.backgroundColor = "lightgrey";
    skeletonClone.style.opacity = "0.7";

    // Append the generated skeleton to the skeleton container
    skeletonContainer.appendChild(skeletonClone);
  }
}

// ...

function get(target_url, responseFunction) {
  // Show the skeleton loader while waiting for the data
  show("skeletonLoader");

  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      // Hide the skeleton loader before populating the actual data
      hide("skeletonLoader");
      responseFunction(JSON.parse(result));
    })
    .catch((error) => {
      console.log("error", error);
      // Hide the skeleton loader in case of an error
      hide("skeletonLoader");
    });
}

setTimeout(() => {
  // Generate skeleton before making the API call
  generateSkeleton();
  // Make the API call and populate the actual data
  get(urlFetch, responseDataDetail);
}, 1500);
