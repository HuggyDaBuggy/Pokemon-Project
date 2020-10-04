var cutepokemon = [
  ["Pikachu", "025", 1, ""],
  ["Eevee", "133", 2, ""],
  ["Mew", "151", 3, ""],
  ["Togepi", "175", 4, ""],
  ["Skitty", "300", 5, ""],
  ["Vulpix", "037", 6, ""],
  ["Emolga", "587", 7, ""],
  ["Deerling", "585", 8, ""],
  ["Snom", "872", 9, ""],
  ["Teddiursa", "216", 10, ""],
  ["Jirachi", "385", 11, ""],
  ["jigglypuff", "039", 12, ""],
  ["Shaymin", "492", 13, ""],
  ["Meloetta", "648", 14, ""],
  ["Absol", "359", 15, ""],
];
var uglypokemon = [
  ["Jynx", "124", 1, ""],
  ["Probopass", "476", 2, ""],
  ["Garbodor", "569", 3, ""],
  ["Conkelgurr", "534", 4, ""],
  ["Barbaracla", "689", 5, ""],
  ["Stunfisk", "618", 6, ""],
  ["Seismitoad", "537", 7, ""],
  ["Purugly", "432", 8, ""],
  ["Muk", "089", 9, ""],
  ["Drowzee", "096", 10, ""],
  ["Swampert", "260", 11, ""],
  ["Walrein", "365", 12, ""],
  ["Malmar", "687", 13, ""],
  ["Noivern", "715", 14, ""],
  ["Skuntank", "435", 15, ""],
];
var url = window.location.href;
var urlsplit = url.split("?");
var pokemon = urlsplit[1];
var i = 0;
var type = "";
while (i < 15) {
  if (cutepokemon[i][0] == pokemon) {
    var type = "Cute";
    alert(cutepokemon[i][0]);
  }
  if (uglypokemon[i][0] == pokemon) {
    var type = "Cute";
    alert(uglypokemon[i][0]);
  }
  var i = i + 1
}
if (type == "") {
  window.location.replace("index")
}
document.title = "Pokemon - " + pokemon;
document.getElementById("pokemon-name").innerHTML = pokemon;
document.getElementById("pokemon-info").innerHTML = pokemons[pokemon]["info"];
document.getElementById("pokemon-image").setAttribute("src", "App/Images/Pokemon/" + type + "/" + pokemons[pokemon]["id"] + ".png");
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
