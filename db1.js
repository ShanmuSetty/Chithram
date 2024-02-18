import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const urlParams = new URLSearchParams(window.location.search);
const inputValue = urlParams.get("input");
const searchResults = document.querySelector(".scrlbar");
const genrein = document.querySelector(".genre");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `$(process.env.api_key)`,
  authDomain: "mainproject-1js.firebaseapp.com",
  projectId: "mainproject-1js",
  storageBucket: "mainproject-1js.appspot.com",
  messagingSenderId: "543598482033",
  appId: "1:543598482033:web:60180eb3a3dd56f92081d0",
  measurementId: "G-R2ZCCMW7G6",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbs = getDatabase(app);

const statesRef = ref(dbs, "states/");
get(statesRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const tela = data[inputValue];
      const length = Object.keys(tela).length;
      for (let i = 1; i <= length; i++) {
        let movie = tela["movie-" + i];
        var imageWrapper = document.createElement("div");
        imageWrapper.classList.add("scrl-content");
        imageWrapper.onclick = function () {
          document.addEventListener("click", function (event) {
            //----------------------for making the clicked poster active-----------
            if (event.target.closest(".scrl-content")) {
              // Clicked on an element inside .scrl-content
              var scrlcons = document.querySelectorAll(".scrl-content");
              scrlcons.forEach(function (scrlcon) {
                scrlcon.classList.remove("active");
              });
              event.target.closest(".scrl-content").classList.add("active");
            } else {
              // Clicked outside .scrl-content
              var scrlcons = document.querySelectorAll(".scrl-content");
              scrlcons.forEach(function (scrlcon) {
                scrlcon.classList.remove("active");
              });
            }
          });
          //-----------------------------------------------------------------------
          printContent("content");
          let movie1 = tela["movie-" + i];
          var genre = movie1["description"]["genre"];
          var rating = movie1["description"]["rating"];
          var direct = movie1["director"];
          var plot = movie1["description"]["plot"];
          var platf = movie1["description"]["platform"];
          var cimp = movie1["cultural_impact"];
          var imp1 = cimp.split(".");
          var cast = movie1["cast"]["cast"];
          var galr = movie1["gallery"];
          var title = movie1["title"];
          var clips = movie1["clips"]["urls"];
          var linkImp = "";
          var linkHtml = "";
          var linkCast = "";
          var linkGal = "";
          var linkClips = "";
          var linkPlot = "";
          for (var platform in platf) {
            linkHtml +=
              "<button><a href='" +
              platf[platform] +
              "' target='_blank' >" +
              "Platform" +
              (parseInt(platform) + 1) +
              "</a></button>";
          }
          for (var ci in imp1) {
            linkImp += "<br>" + imp1[ci] + "<br>";
          }
          for (var c in cast) {
            linkCast += "<div class='cast-content'>" + cast[c] + "</div>";
          }
          for (var g in galr) {
            linkGal +=
              "<div class='gallery-content'><a href='" +
              galr[g] +
              "' target='_blank'><img src='" +
              galr[g] +
              "'></a></div>";
          }
          for (var cl in clips) {
            linkClips +=
              "<section class='clips video-section'><video controls loop src='" +
              clips[cl] +
              "'></video></section>";
          }
          var descri = document.getElementById("description");
          descri.onclick = function () {
            printContent1("cont", "1");
            var gen = document.querySelector(".genre");
            gen.innerHTML = "Genre: " + genre;
            var dir = document.querySelector(".director");
            dir.innerHTML = "Director: " + direct;
            var rat = document.querySelector(".rating");
            rat.innerHTML = "Rating: " + rating;
            var plot1 = document.querySelector(".desc-content");
            plot1.innerHTML =
              "<div class='title'>" +
              title +
              "</div>" +
              "<br>" +
              "<h2>" +
              "Plot: " +
              "</h2>" +
              "<h3>" +
              plot +
              "</h3>" +
              "<br>" +
              "<h2>" +
              "Platforms: " +
              "</h2>" +
              "<br>" +
              linkHtml;
          };
          var impact = document.getElementById("impact");
          impact.onclick = function () {
            printContent1("cont", "2");
            var impa = document.querySelector(".impact-content");
            impa.innerHTML =
              "<div class='imp-text'>" + linkImp + "</div>" + linkClips;
          };
          var cast = document.getElementById("cast");
          cast.onclick = function () {
            printContent1("cont", "3");
            var cas = document.querySelector(".cast");
            cas.innerHTML = linkCast;
          };
          var gallery = document.getElementById("gallery");
          gallery.onclick = function () {
            printContent1("cont", "4");
            var gall = document.querySelector(".gallery");
            gall.innerHTML = linkGal;
          };
        };

        const image = document.createElement("img");
        image.src = movie.poster;
        imageWrapper.appendChild(image);
        searchResults.appendChild(imageWrapper);
      }
    } else {
      console.log("No data available");
    }
  })
  .catch((err) => {
    console.error("!!Error fetching data!!", err);
  });
//------------printing dynamically------------//

function printContent(categoryId) {
  // Check if the contentWrapper already exists and remove it if it does
  var existingContentWrapper = document.getElementById("cont");
  if (existingContentWrapper) {
    existingContentWrapper.parentNode.removeChild(existingContentWrapper);
  }
  var contentWrapper = document.createElement("div");
  contentWrapper.classList.add("cont");
  contentWrapper.id = "cont";
  var content = document.getElementById(categoryId);
  var printDiv = document.getElementById("cont");
  content.appendChild(contentWrapper);
  console.log(contentWrapper);
}
function printContent1(categoryId, index) {
  // Remove existing content wrappers
  for (let i = 1; i <= 5; i++) {
    var existingContentWrapper = document.getElementById("contentWrapper" + i);
    if (existingContentWrapper) {
      existingContentWrapper.parentNode.removeChild(existingContentWrapper);
    }
  }
  var contentWrapper = document.createElement("div");
  var innerWrapper = document.createElement("div");
  innerWrapper.id = "header";
  var inWrapper = document.createElement("div");
  inWrapper.id = "box";
  var impWrapper = document.createElement("div");
  impWrapper.id = "imp-box";
  var inGenre = document.createElement("div");
  var inRating = document.createElement("div");
  var inDirec = document.createElement("div");
  contentWrapper.id = "contentWrapper" + index;
  var contentClass;
  var contClass1, contClass2, contClass3, contClass4, contClass5;
  switch (index) {
    case "1":
      contentClass = "desc";
      contClass1 = "desc-items";
      contClass2 = "desc-content";
      contClass3 = "genre";
      contClass4 = "rating";
      contClass5 = "director";
      contentWrapper.classList.add(contentClass);
      var categoryElement = document.getElementById(categoryId);
      categoryElement.appendChild(contentWrapper);
      innerWrapper.classList.add(contClass1);
      var categoryElement = document.getElementById("contentWrapper" + index);
      categoryElement.appendChild(innerWrapper);
      inWrapper.classList.add(contClass2);
      var categoryElement = document.getElementById("contentWrapper" + index);
      categoryElement.appendChild(inWrapper);
      inGenre.classList.add(contClass3);
      var categoryElement = document.getElementById("header");
      categoryElement.appendChild(inGenre);
      inRating.classList.add(contClass4);
      var categoryElement = document.getElementById("header");
      categoryElement.appendChild(inRating);
      inDirec.classList.add(contClass5);
      var categoryElement = document.getElementById("header");
      categoryElement.appendChild(inDirec);
      break;
    case "2":
      contentClass = "impact";
      contClass1 = "impact-content";
      contentWrapper.classList.add(contentClass);
      var categoryElement = document.getElementById(categoryId);
      categoryElement.appendChild(contentWrapper);
      impWrapper.classList.add(contClass1);
      var categoryElement = document.getElementById("contentWrapper" + index);
      categoryElement.appendChild(impWrapper);
      break;
    case "3":
      contentClass = "cast";
      contentWrapper.classList.add(contentClass);
      var categoryElement = document.getElementById(categoryId);
      categoryElement.appendChild(contentWrapper);
      break;
    case "4":
      contentClass = "gallery";
      contentWrapper.classList.add(contentClass);
      var categoryElement = document.getElementById(categoryId);
      categoryElement.appendChild(contentWrapper);
      break;
    case "5":
      break;
    default:
      contentClass = "desc";
  }
}
function printContent2(categoryId) {
  var existingContentWrapper = document.getElementById("cont");
  if (existingContentWrapper) {
    existingContentWrapper.parentNode.removeChild(existingContentWrapper);
  }
  var contentWrapper = document.createElement("div");
  contentWrapper.classList.add("cont");
  contentWrapper.id = "cont";
  var content = document.getElementById(categoryId);
  var printDiv = document.getElementById("cont");
  content.appendChild(contentWrapper);
}
// ----------------------------
var popup = document.getElementById("myPopup");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks anywhere outside of the popup, close it
