//Sets the theme button correctly
if (getStorage("Theme") == "Dark") {
  document.getElementById("theme-button").innerHTML = "&#9790;";
} else {
  document.getElementById("theme-button").innerHTML = "&#9728;";
}
//Sets the Context Toggle checkbox correctly
if (getStorage("ContextToggle") == "Enabled") {
  document.getElementById("context-toggle").checked = true;
} else {
  document.getElementById("context-toggle").checked = false;
}
//Sets the ImageScroll checkbox correctly
if (getStorage("ImageScroll") == "Enabled") {
  document.getElementById("auto-slideshow").checked = true;
} else {
  document.getElementById("auto-slideshow").checked = false;
}
//CHanges the theme when theme button is clicked
function themeChange() {
  if (getStorage("Theme") == "Dark") {
    setStorage("Theme", "Light");
    document.getElementById("theme-button").innerHTML = "&#9728;";
    document
      .getElementById("theme-style")
      .setAttribute("href", "Resources/CSS/Themes/light.css");
  } else {
    setStorage("Theme", "Dark");
    document.getElementById("theme-button").innerHTML = "&#9790;";
    document
      .getElementById("theme-style")
      .setAttribute("href", "Resources/CSS/Themes/dark.css");
  }
}
//Changes the context toggle setting when checkbox changes
function contextToggle() {
  if (document.getElementById("context-toggle").checked) {
    setStorage("ContextToggle", "Enabled");
  } else {
    setStorage("ContextToggle", "Disabled");
  }
  location.reload();
}
//Changes the auto slideshow setting when checkbox changes
function slideshowChange() {
  if (document.getElementById("auto-slideshow").checked) {
    setStorage("ImageScroll", "Enabled");
  } else {
    setStorage("ImageScroll", "Disabled");
  }
}
