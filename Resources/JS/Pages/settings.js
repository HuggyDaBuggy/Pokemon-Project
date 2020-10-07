//Sets the theme button correctly
if (getStorage("Theme") == "Dark") {
  document.getElementById("theme-button").innerHTML = "&#9790;";
} else {
  document.getElementById("theme-button").innerHTML = "&#9728;";
}
//Sets the autoscroll checkbox correctly
if (getStorage("AutoScroll") == "On") {
  document.getElementById("auto-slideshow").checked = true;
} else {
  document.getElementById("auto-slideshow").checked = false;
}
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
  var checkbox = document.getElementById("auto-slideshow");
  if (checkbox.checked) {
    setStorage("AutoScroll", "On");
  } else {
    setStorage("AutoScroll", "Off");
  }
}
