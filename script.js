const h5 = document.querySelector("h5");

const minWidth = window.matchMedia("(min-width: 710px)");

window.addEventListener("resize", () => {
  if (minWidth.matches) {
    h5.textContent="Subscribe to our newsletter";
  }
});
