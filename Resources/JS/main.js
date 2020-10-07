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
function capitalize(input) {
  return input[0].toUpperCase() + input.slice(1);
}
document.addEventListener(
  "contextmenu",
  function (rclick) {
    rclick.preventDefault();
  },
  false
);
document.addEventListener("contextmenu", contextMenu);
window.onclick = function () {
  document.getElementById("context-menu").style.display = "none";
};
window.onscroll = function () {
  document.getElementById("context-menu").style.display = "none";
};
if (getStorage("Theme") == null) {
  if (typeof Storage !== "undefined") {
    setStorage("Theme", "Dark");
    setStorage("ImageScroll", "Off");
  } else {
    alert("Your browser does not support local storage, this will cause some features to not work correctly.");
  }
}
if (getStorage("Theme") == "Light") {
  document.getElementById("theme-style").setAttribute("href", "Resources/CSS/Themes/light.css");
} else {
  document.getElementById("theme-style").setAttribute("href", "Resources/CSS/Themes/dark.css");
}
function contextMenu(event) {
  document.getElementById("context-menu").style.left = event.clientX - 17 + "px";
  document.getElementById("context-menu").style.top = event.clientY - 17 + "px";
  document.getElementById("context-menu").style.display = "block";
}
