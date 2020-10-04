var cutepokemon = [
  ["Pikachu", "025", "The electic mouse pokémon. It stores electricity in it's cheeks and attacks with energy equivalent to a lighting bolt"],
  ["Eevee", "133", "The evolution pokémon. Eevee is most well known for the largest amount of possible evolutions- 8 in total."],
  ["Mew", "151", "The new species pokémon. This mythical creature possesses the genetic information of every Pokémon and is rarely seen"],
  ["Togepi", "175", "The spike ball pokémon. It's shell is said to contain happiness and Togepi often shares it with others of pure intent"],
  ["Skitty", "300", "The kitten pokémon. Skitty likes to chase it's own tail until it falls dizzy. It is very popular as a pet. "],
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
var b = 0;
var c = 0;
var type = "";
while (a < 15) {
  if (cutepokemon[a][0] == pokemon) {
    var type = "Cute";
    document.getElementById("related-pokemon").innerHTML = "Other Cute Pokemon";
    document.getElementById("pokemon-info").innerHTML = cutepokemon[a][2];
    document.getElementById("pokemon-image").setAttribute("src", "App/Images/Pokemon/Cute/" + cutepokemon[a][1] + ".png");
    document.getElementById("pokemon-image").setAttribute("alt", pokemon);
    while (b < 4) {
      if (b < 2) {
        var bb = a - 2 + b;
        if (bb == -1) {
          bb = 14;
        }
        if (bb == -2) {
          bb = 13;
        }
      } else {
        var bb = a - 1 + b;
        if (bb == 15) {
          bb = 0;
        }
        if (bb == 16) {
          bb = 1;
        }
      }
      document.getElementById("related-pokemon-image-" + (b + 1)).setAttribute("src", "App/Images/Pokemon/Cute/" + cutepokemon[bb][1] + ".png");
      document.getElementById("related-pokemon-image-" + (b + 1)).setAttribute("alt", cutepokemon[bb][0]);
      document.getElementById("related-pokemon-link-" + (b + 1)).setAttribute("href", "pokemon?" + cutepokemon[bb][0]);
      document.getElementById("related-pokemon-" + (b + 1)).innerHTML = cutepokemon[bb][0];
      b++;
    }
  }
  if (uglypokemon[a][0] == pokemon) {
    var type = "Ugly";
    document.getElementById("related-pokemon").innerHTML = "Other Ugly Pokemon";
    document.getElementById("pokemon-info").innerHTML = uglypokemon[a][2];
    document.getElementById("pokemon-image").setAttribute("src", "App/Images/Pokemon/Ugly/" + uglypokemon[a][1] + ".png");
    document.getElementById("pokemon-image").setAttribute("alt", pokemon);
    while (c < 4) {
      if (c < 2) {
        var cc = a - 2 + c;
        if (cc == -1) {
          cc = 14;
        }
        if (cc == -2) {
          cc = 13;
        }
      } else {
        var cc = a - 1 + c;
        if (cc == 15) {
          cc = 0;
        }
        if (cc == 16) {
          cc = 1;
        }
      }
      document.getElementById("related-pokemon-image-" + (c + 1)).setAttribute("src", "App/Images/Pokemon/Ugly/" + uglypokemon[cc][1] + ".png");
      document.getElementById("related-pokemon-image-" + (c + 1)).setAttribute("alt", uglypokemon[cc][0]);
      document.getElementById("related-pokemon-link-" + (c + 1)).setAttribute("href", "pokemon?" + uglypokemon[cc][0]);
      document.getElementById("related-pokemon-" + (c + 1)).innerHTML = uglypokemon[cc][0];
      c++;
    }
  }
  a++;
}
if (type == "") {
  window.location.replace("index");
} else {
  document.title = "Pokemon - " + pokemon;
  document.getElementById("pokemon-name").innerHTML = pokemon;
  document.getElementById(pokemon + "-link").setAttribute("href", "javascript: void(0)");
  document.getElementById(pokemon + "-link").style.cursor = "default";
  document.getElementById(pokemon + "-link").style.fontWeight = "bold";
  document.getElementById(pokemon + "-link").style.color = "#000000";
}
