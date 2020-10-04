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
var a = 0;
var b = 1;
var c = 1;
var type = "";
while (a < 15) {
  if (cutepokemon[a][0] == pokemon) {
    var type = "Cute";
    document.getElementById("related-pokemon").innerHTML = "Other Cute Pokemon";
    document.getElementById("pokemon-info").innerHTML = cutepokemon[a][2];
    document.getElementById("pokemon-image").setAttribute("src", "App/Images/Pokemon/Cute/" + cutepokemon[a][1] + ".png");
    document.getElementById("pokemon-image").setAttribute("alt", pokemon);
    while (b < 5) {
      document.getElementById("related-pokemon-image-" + b).setAttribute("src", "App/Images/Pokemon/Cute/" + cutepokemon[b][1] + ".png");
      document.getElementById("related-pokemon-image-" + b).setAttribute("alt", cutepokemon[b][0]);
      document.getElementById("related-pokemon-link-" + b).setAttribute("href", "pokemon?" + cutepokemon[b][0]);
      document.getElementById("related-pokemon-" + b).innerHTML = cutepokemon[b][0];
      b++;
    }
  }
  if (uglypokemon[a][0] == pokemon) {
    var type = "Ugly";
    document.getElementById("related-pokemon").innerHTML = "Other Ugly Pokemon";
    document.getElementById("pokemon-info").innerHTML = uglypokemon[a][2];
    document.getElementById("pokemon-image").setAttribute("src", "App/Images/Pokemon/Ugly/" + uglypokemon[a][1] + ".png");
    document.getElementById("pokemon-image").setAttribute("alt", pokemon);
    while (c < 5) {
      document.getElementById("related-pokemon-image-" + c).setAttribute("src", "App/Images/Pokemon/Ugly/" + cutepokemon[c][1] + ".png");
      document.getElementById("related-pokemon-image-" + c).setAttribute("alt", cutepokemon[c][0]);
      document.getElementById("related-pokemon-link-" + c).setAttribute("href", "pokemon?" + cutepokemon[c][0]);
      document.getElementById("related-pokemon-" + c).innerHTML = cutepokemon[c][0];
      c++;
    }
  }
  a++;
}
if (type == "") {
  window.location.replace("index");
}
document.title = "Pokemon - " + pokemon;
document.getElementById("pokemon-name").innerHTML = pokemon;
