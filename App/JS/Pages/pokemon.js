var cutepokemon = [
  ["Pikachu", "025", ""],
  ["Eevee", "133", ""],
  ["Mew", "151", ""],
  ["Togepi", "175", ""],
  ["Skitty", "300", ""],
  ["Vulpix", "037", ""],
  ["Emolga", "587", ""],
  ["Deerling", "585", ""],
  ["Snom", "872", ""],
  ["Teddiursa", "216", ""],
  ["Jirachi", "385", ""],
  ["jigglypuff", "039", ""],
  ["Shaymin", "492", ""],
  ["Meloetta", "648", ""],
  ["Absol", "359", ""],
];
var uglypokemon = [
  ["Jynx", "124", ""],
  ["Probopass", "476", ""],
  ["Garbodor", "569", ""],
  ["Conkelgurr", "534", ""],
  ["Barbaracla", "689", ""],
  ["Stunfisk", "618", ""],
  ["Seismitoad", "537", ""],
  ["Purugly", "432", ""],
  ["Muk", "089", ""],
  ["Drowzee", "096", ""],
  ["Swampert", "260", ""],
  ["Walrein", "365", ""],
  ["Malmar", "687", ""],
  ["Noivern", "715", ""],
  ["Skuntank", "435", ""],
];
var pokemon = window.location.href.split("?")[1];
var i = 0;
var type = "";
while (i < 15) {
  if (cutepokemon[i][0] == pokemon) {
    var type = "Cute";
    document.getElementById("related-pokemon").innerHTML = "Other Cute Pokemon";
    document.getElementById("pokemon-info").innerHTML = cutepokemon[i][3];
    document.getElementById("pokemon-image").setAttribute("src", "App/Images/Pokemon/Cute/" + cutepokemon[i][1] + ".png");
    document.getElementById("pokemon-image").setAttribute("alt", pokemon);
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
    break;
  }
  if (uglypokemon[i][0] == pokemon) {
    var type = "Ugly";
    document.getElementById("related-pokemon").innerHTML = "Other Ugly Pokemon";
    document.getElementById("pokemon-info").innerHTML = uglypokemon[i][3];
    document.getElementById("pokemon-image").setAttribute("src", "App/Images/Pokemon/Ugly/" + uglypokemon[i][1] + ".png");
    document.getElementById("pokemon-image").setAttribute("alt", pokemon);
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
    break;
  }
  var i = i + 1;
}
if (type == "") {
  window.location.replace("index");
}
document.title = "Pokemon - " + pokemon;
document.getElementById("pokemon-name").innerHTML = pokemon;
