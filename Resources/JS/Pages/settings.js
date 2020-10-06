if (getStorage("Theme") == "Dark") {
    document.getElementById("theme-button").innerHTML = "&#9790;";
  } else {
    document.getElementById("theme-button").innerHTML = "&#9728;";
  }
function themeChange() {
  if (getStorage("Theme") == "Dark") {
    setStorage("Theme", "Light")
    document.getElementById("theme-button").innerHTML = "&#9728;";
    document.getElementById("theme-style").setAttribute("href", "Resources/CSS/Themes/light.css")
  } else {
    setStorage("Theme", "Dark")
    document.getElementById("theme-button").innerHTML = "&#9790;";
    document.getElementById("theme-style").setAttribute("href", "Resources/CSS/Themes/dark.css");
  }
}