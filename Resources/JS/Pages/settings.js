//Sets the theme button correctly
if (getStorage("Theme") == "Dark") {
  document.getElementById("theme-button").innerHTML = "&#9790;";
} else {
  document.getElementById("theme-button").innerHTML = "&#9728;";
}
//Sets the autoscroll checkbox correctly
alert(getStorage("AutoScroll"));
document.getElementById("auto-slideshow").checked = getStorage("AutoScroll");
//CHanges the theme when theme button is clicked
function themeChange() {
  if (getStorage("Theme") == "Dark") {
    setStorage("Theme", "Light");
    document.getElementById("theme-button").innerHTML = "&#9728;";
    document.getElementById("theme-style").setAttribute("href", "Resources/CSS/Themes/light.css");
  } else {
    setStorage("Theme", "Dark");
    document.getElementById("theme-button").innerHTML = "&#9790;";
    document.getElementById("theme-style").setAttribute("href", "Resources/CSS/Themes/dark.css");
  }
}
//Changes the auto slideshow setting when checkbox changes
function slideshowChange() {
  if (document.getElementById("auto-slideshow").checked) {
    setStorage("AutoScroll", true);
    alert(getStorage("AutoScroll"));
  } else {
    setStorage("AutoScroll", false);
    alert(getStorage("AutoScroll"));
  }
}
