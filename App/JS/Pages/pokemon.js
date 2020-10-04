var url = window.location.href;
var urlsplit = url.split("?");
var pokemon = urlsplit[1];
if (pokemon == null) {
  window.location.replace("index");
}
document.getElementById("pokemon-title").innerHTML = "Pokemon - " + pokemon;
document.getElementById("pokemon-name").innerHTML = pokemon;
document.getElementById("pokemon-info").innerHTML = pokemon;
document.getElementById("related-pokemon-image-1").setAttribute("src", "");
document.getElementById("related-pokemon-image-1").setAttribute("alt", "");
document.getElementById("related-pokemon-1").innerHTML = "";
document.getElementById("related-pokemon-image-2").setAttribute("src", "");
document.getElementById("related-pokemon-image-2").setAttribute("alt", "");
document.getElementById("related-pokemon-2").innerHTML = "";
document.getElementById("related-pokemon-image-3").setAttribute("src", "");
document.getElementById("related-pokemon-image-3").setAttribute("alt", "");
document.getElementById("related-pokemon-3").innerHTML = "";
document.getElementById("related-pokemon-image-4").setAttribute("src", "");
document.getElementById("related-pokemon-image-4").setAttribute("alt", "");
document.getElementById("related-pokemon-4").innerHTML = "";
