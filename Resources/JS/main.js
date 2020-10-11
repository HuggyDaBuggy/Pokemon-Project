//Custom Storage Functions
function setStorage(name, value) {
  if (typeof Storage !== "undefined") {
    return localStorage.setItem(name, value);
  }
}
function getStorage(name) {
  if (typeof Storage !== "undefined") {
    return localStorage.getItem(name);
  }
}
//Capitalize Function
function capitalize(input) {
  return input[0].toUpperCase() + input.slice(1);
}
//Disable Default Context Menu
document.addEventListener(
  "contextmenu",
  function (rclick) {
    rclick.preventDefault();
  },
  false
);
//Context Menu Function
document.addEventListener("contextmenu", contextMenu);
//Hide Context Menu when certain events happen
window.onclick = function () {
  document.getElementById("context-menu").style.display = "none";
};
window.onscroll = function () {
  document.getElementById("context-menu").style.display = "none";
};
//Checks if it is the users first time on the site, then sets settings to defaults
if (getStorage("Theme") == null) {
  if (typeof Storage !== "undefined") {
    setStorage("Theme", "Dark");
    setStorage("ImageScroll", false);
  } else {
    alert("Your browser does not support local storage, this will cause some features to not work correctly.");
  }
}
//Applies the custom theme
if (getStorage("Theme") == "Light") {
  document.getElementById("theme-style").setAttribute("href", "Resources/CSS/Themes/light.css");
} else {
  document.getElementById("theme-style").setAttribute("href", "Resources/CSS/Themes/dark.css");
}
//Shows the custom context menu on rclick - combined with line 25
function contextMenu(event) {
  document.getElementById("context-menu").style.left = event.clientX - 17 + "px";
  document.getElementById("context-menu").style.top = event.clientY - 17 + "px";
  document.getElementById("context-menu").style.display = "block";
}
