var pokemons = {
  Pikachu: {type: "Cute", id: "025", number: 1, info: ""},
  Eevee: {type: "Cute", id: "133", number: 2, info: ""},
  Mew: {type: "Cute", id: "151", number: 3, info: ""},
  Togepi: {type: "Cute", id: "175", number: 4, info: ""},
  Skitty: {type: "Cute", id: "300", number: 5, info: ""},
  Vulpix: {type: "Cute", id: "037", number: 6, info: ""},
  Emolga: {type: "Cute", id: "587", number: 7, info: ""},
  Deerling: {type: "Cute", id: "585", number: 8, info: ""},
  Snom: {type: "Cute", id: "872", number: 9, info: ""},
  Teddiursa: {type: "Cute", id: "216", number: 10, info: ""},
  Jirachi: {type: "Cute", id: "385", number: 11, info: ""},
  Jigglypuff: {type: "Cute", id: "039", number: 12, info: ""},
  Shaymin: {type: "Cute", id: "492", number: 13, info: ""},
  Meloetta: {type: "Cute", id: "648", number: 14, info: ""},
  Absol: {type: "Cute", id: "359", number: 15, info: ""},
  Jynx: {type: "Ugly", id: "124", number: 1, info: ""},
  Probopass: {type: "Ugly", id: "476", number: 2, info: ""},
  Garbodor: {type: "Ugly", id: "569", number: 3, info: ""},
  Conkelgurr: {type: "Ugly", id: "534", number: 4, info: ""},
  Barbaracla: {type: "Ugly", id: "689", number: 5, info: ""},
  Stunfisk: {type: "Ugly", id: "618", number: 6, info: ""},
  Seismitoad: {type: "Ugly", id: "537", number: 7, info: ""},
  Purugly: {type: "Ugly", id: "432", number: 8, info: ""},
  Muk: {type: "Ugly", id: "089", number: 9, info: ""},
  Drowzee: {type: "Ugly", id: "096", number: 10, info: ""},
  Swampert: {type: "Ugly", id: "260", number: 11, info: ""},
  Walrein: {type: "Ugly", id: "365", number: 12, info: ""},
  Malmar: {type: "Ugly", id: "687", number: 13, info: ""},
  Noivern: {type: "Ugly", id: "715", number: 14, info: ""},
  Skuntank: {type: "Ugly", id: "435", number: 15, info: ""},
};
var url = window.location.href;
var urlsplit = url.split("?");
var pokemon = urlsplit[1];
if (pokemon == null) {
  window.location.replace("index");
}
document.title = "Pokemon - " + pokemon;
document.getElementById("pokemon-name").innerHTML = pokemon;
document.getElementById("pokemon-info").innerHTML = pokemons[pokemon]["info"];
document.getElementById("pokemon-image").setAttribute("src", "App/Images/Pokemon/" + pokemons[pokemon]["type"] + "/" + pokemons[pokemon]["id"] + ".png");
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
