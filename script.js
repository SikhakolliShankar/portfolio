var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// JavaScript to toggle menu visibility

function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  const menuDisplay = navMenu.style.display;
  const dynamic = document.querySelector("nav");
  console.log(dynamic);
  console.log(menuDisplay);

  if (menuDisplay === "none" || menuDisplay === "") {
    navMenu.style.display = "flex";
  } else {
    dynamic.classList.add("dynamicpos");
    navMenu.style.display = "none";
  }
}

// Setup and start animation!

var typed = new Typed("#element", {
  strings: ["Web Developer", "Machine Learning Enthusiast"],
  typeSpeed: 50,
});
