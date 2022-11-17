const h5 = document.querySelector("h5");

const minWidth = window.matchMedia("(min-width: 710px)");

// if (window.minWidth="710px") {
//   h5.textContent="Subscribe to our newsletter";
// } 
// else h5.textContent="Subscribe to our <br>newsletter";

window.addEventListener("resize", () => {
  if (minWidth.matches) {
    h5.textContent="Subscribe to our newsletter";
  } else h5.innerHTML=`Subscribe to our <br> newsletter`;
});