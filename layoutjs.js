/*--------menu button--------*/

function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("open");
  const ham = document.querySelector(".dropdown-content");
  ham.classList.toggle("open1");
  //menu toggle logic here
}
/*--------title--------*/
const urlParams = new URLSearchParams(window.location.search);
const inputValue = urlParams.get("input");
/*---------for Capitalising----------*/
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
let cString = capitalize(inputValue);
document.title = cString;
/*---------loader---------*/
window.addEventListener("load", function () {
  var loaderOverlay = document.getElementById("loader-overlay");
  var content = document.getElementById("main-content");

  // Simulating data loading delay (remove in actual implementation)
  setTimeout(function () {
    loaderOverlay.style.display = "none";
    content.style.display = "block"; // Show content after loading
  }, 5000); // Adjust the delay as needed
});
