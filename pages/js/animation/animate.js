document.addEventListener("DOMContentLoaded", function () {
  const fadeElementsLeft = document.querySelectorAll(".fade-in-element-left");
  const fadeElementsRight = document.querySelectorAll(".fade-in-element-right");
  const fadeElementsBottom = document.querySelectorAll(
    ".fade-in-element-bottom"
  );

  function checkFade(elements) {
    elements.forEach(function (element) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  }

  // Initial check when the page loads
  checkFade(fadeElementsLeft);
  checkFade(fadeElementsRight);
  checkFade(fadeElementsBottom);

  // Add a scroll event listener to check on scroll
  window.addEventListener("scroll", function () {
    checkFade(fadeElementsLeft);
    checkFade(fadeElementsRight);
    checkFade(fadeElementsBottom);
  });
});
