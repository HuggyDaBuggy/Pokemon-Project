var pokemons = [
  "Pikachu",
  "Eevee",
  "Mew",
  "Togepi",
  "Skitty",
  "Vulpix",
  "Emolga",
  "Deerling",
  "Snom",
  "Teddiursa",
  "Jirachi",
  "Jigglypuff",
  "Shaymin",
  "Meloetta",
  "Absol",
  "Jynx",
  "Probopass",
  "Garbodor",
  "Conkeldurr",
  "Barbaracle",
  "Stunfisk",
  "Seismitoad",
  "Purugly",
  "Muk",
  "Drowzee",
  "Swampert",
  "Walrein",
  "Malamar",
  "Noivern",
  "Skuntank",
];
var cutepokemon = [
  ["Pikachu", "025", "The electic mouse pokémon. It stores electricity in it's cheeks and attacks with energy equivalent to a lighting bolt. Females have hearted tails and males have straight cut.", "", 3, ["", "", ""], 2],
  ["Eevee", "133", "The evolution pokémon. Eevee is most well known for the largest amount of possible evolutions. Vaporeon, Flareon, Jolteon, Espeon, Umbreon, Leafeon, Glaceon and finally Sylveon are all the possible evolutions at the time of this writing.", "", 2, ["", ""], 1],
  ["Mew", "151", "The new species pokémon. This mythical creature possesses the genetic information of every Pokémon. It tends to stay hidden, and only a few sightings have been reported.", "", 1, "", 1],
  ["Togepi", "175", "The spike ball pokémon. It's shell is said to contain happiness and other warm fuzzies. Togepi often shares the feeling with others of pure intent.", "", 3, ["", "", ""], 1],
  ["Skitty", "300", "The kitten pokémon. Skitty likes to chase it's own tail until it falls dizzy. It's cute, aloof demeanour makes it very popular as a household pet.", "", 2, ["", ""], 1],
  ["Vulpix", "037", "The fox pokémon. It is able to control a flame in it's mouth that never goes out. It is born with only one tail, but as it gets older it splits and creates more tails.", "", 2, ["", ""], 1],
  ["Emolga", "587", "The sky squirrel pokémon. It glides around with it's cape-like membrane, crackling with electricity as it goes. It often collects berries and stores them in it's cheeks.", "", 1, "", 1],
  ["Deerling", "585", "", "", 2, ["", ""], 1],
  ["Snom", "872", "", "", 2, ["", ""], 1],
  ["Teddiursa", "216", "", "", 2, ["", ""], 1],
  ["Jirachi", "385", "", "", 1, "", 1],
  ["Jigglypuff", "039", "", "", 3, ["", "", ""], 2],
  ["Shaymin", "492", "", "", 1, "", 1],
  ["Meloetta", "648", "", "", 1, "", 1],
  ["Absol", "359", "", "", 1, "", 1],
];
var uglypokemon = [
  ["Jynx", "124", "", "", 2, ["", ""], 2],
  ["Probopass", "476", "", "", 2, ["", ""], 2],
  ["Garbodor", "569", "", "", 2, ["", ""], 2],
  ["Conkeldurr", "534", "", "", 3, ["", "", ""], 3],
  ["Barbaracle", "689", "", "", 2, ["", ""], 2],
  ["Stunfisk", "618", "", "", 1, "", 1],
  ["Seismitoad", "537", "", "", 3, ["", "", ""], 3],
  ["Purugly", "432", "", "", 2, ["", ""], 2],
  ["Muk", "089", "", "", 2, ["", ""], 2],
  ["Drowzee", "096", "", "", 2, ["", ""], 1],
  ["Swampert", "260", "", "", 3, ["", "", ""], 3],
  ["Walrein", "365", "", "", 3, ["", "", ""], 3],
  ["Malamar", "687", "", "", 2, ["", ""], 2],
  ["Noivern", "715", "", "", 2, ["", ""], 2],
  ["Skuntank", "435", "", "", 2, ["", ""], 2],
];
var pokemon = window.location.href.split("?")[1];
var a = 0;
var b = 0;
var c = 0;
var type = "";
if (pokemon.includes(pokemon)) {
  document.title = "Pokemon - " + pokemon;
  document.getElementById("pokemon-name").innerHTML = pokemon;
  document.getElementById("pokemon-info-title").innerHTML = pokemon + " Info";
  document.getElementById("pokemon-stats-title").innerHTML = pokemon + " Stats";
  document.getElementById(pokemon + "-link").setAttribute("href", "javascript: void(0)");
  document.getElementById(pokemon + "-link").style.cursor = "default";
  document.getElementById(pokemon + "-link").style.fontWeight = "bold";
  document.getElementById(pokemon + "-link").style.color = "#000000";
} else {
  window.history.back();
  window.location.replace("https://huggydabuggy.github.io/Pokemon-Project/");
}
while (a < 15) {
  if (cutepokemon[a][0] == pokemon) {
    document.getElementById("related-pokemon").innerHTML = "Other Cute Pokemon";
    document.getElementById("pokemon-info").innerHTML = cutepokemon[a][2];
    document.getElementById("pokemon-stats").innerHTML = cutepokemon[a][3];
    document.getElementById("pokemon-image-1").setAttribute("src", "Resources/Images/Pokemon/Cute/" + pokemon + "/1.png");
    document.getElementById("pokemon-image-1").setAttribute("alt", pokemon);
    var slide = cutepokemon[a][6];
    if (cutepokemon[a][4] == 1) {
      document.getElementById("pokemon-controls").style.display = "none";
      document.getElementById("pokemon-image-text-1").innerHTML = cutepokemon[a][5];
    } else if (cutepokemon[a][4] == 2) {
      document.getElementById("pokemon-image-2").setAttribute("src", "Resources/Images/Pokemon/Cute/" + pokemon + "/2.png");
      document.getElementById("pokemon-image-2").setAttribute("alt", cutepokemon[a][5][1]);
      document.getElementById("pokemon-image-text-3").innerHTML = cutepokemon[a][5][1];
      document.getElementById("image-dots-3").style.display = "none";
      document.getElementById("image-dots-3").className = "unused";
      document.getElementById("slides-3").className = "unused";
      document.getElementById("pokemon-image-text-1").innerHTML = cutepokemon[a][5][0];
      document.getElementById("pokemon-image-text-2").innerHTML = cutepokemon[a][5][1];
    } else if (cutepokemon[a][4] == 3) {
      document.getElementById("pokemon-image-2").setAttribute("src", "Resources/Images/Pokemon/Cute/" + pokemon + "/2.png");
      document.getElementById("pokemon-image-2").setAttribute("alt", cutepokemon[a][5][1]);
      document.getElementById("pokemon-image-text-2").innerHTML = cutepokemon[a][5][1];
      document.getElementById("pokemon-image-3").setAttribute("src", "Resources/Images/Pokemon/Cute/" + pokemon + "/3.png");
      document.getElementById("pokemon-image-3").setAttribute("alt", cutepokemon[a][5][2]);
      document.getElementById("pokemon-image-text-1").innerHTML = cutepokemon[a][5][0];
      document.getElementById("pokemon-image-text-2").innerHTML = cutepokemon[a][5][1];
      document.getElementById("pokemon-image-text-3").innerHTML = cutepokemon[a][5][2];
    }
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
      document.getElementById("related-pokemon-image-" + (b + 1)).setAttribute("src", "Resources/Images/Pokemon/Cute/" + cutepokemon[bb][0] + "/1.png");
      document.getElementById("related-pokemon-image-" + (b + 1)).setAttribute("alt", cutepokemon[bb][0]);
      document.getElementById("related-pokemon-link-" + (b + 1)).setAttribute("href", "pokemon?" + cutepokemon[bb][0]);
      document.getElementById("related-pokemon-" + (b + 1)).innerHTML = cutepokemon[bb][0];
      b++;
    }
  } else if (uglypokemon[a][0] == pokemon) {
    document.getElementById("related-pokemon").innerHTML = "Other Ugly Pokemon";
    document.getElementById("pokemon-info").innerHTML = uglypokemon[a][2];
    document.getElementById("pokemon-stats").innerHTML = uglypokemon[a][3];
    document.getElementById("pokemon-image-1").setAttribute("src", "Resources/Images/Pokemon/Ugly/" + uglypokemon[a][1] + ".png");
    document.getElementById("pokemon-image-1").setAttribute("alt", pokemon);
    var slide = uglypokemon[a][6];
    if (uglypokemon[a][4] == 1) {
      document.getElementById("pokemon-controls").style.display = "none";
      document.getElementById("pokemon-image-text-1").innerHTML = uglypokemon[a][5];
    } else if (uglypokemon[a][4] == 2) {
      document.getElementById("pokemon-image-2").setAttribute("src", "Resources/Images/Pokemon/Cute/" + pokemon + "/2.png");
      document.getElementById("pokemon-image-2").setAttribute("alt", uglypokemon[a][5][1]);
      document.getElementById("pokemon-image-text-3").innerHTML = uglypokemon[a][5][1];
      document.getElementById("image-dots-3").style.display = "none";
      document.getElementById("image-dots-3").className = "unused";
      document.getElementById("slides-3").className = "unused";
      document.getElementById("pokemon-image-text-1").innerHTML = uglypokemon[a][5][0];
      document.getElementById("pokemon-image-text-2").innerHTML = uglypokemon[a][5][1];
    } else if (uglypokemon[a][4] == 3) {
      document.getElementById("pokemon-image-2").setAttribute("src", "Resources/Images/Pokemon/Cute/" + pokemon + "/2.png");
      document.getElementById("pokemon-image-2").setAttribute("alt", uglypokemon[a][5][1]);
      document.getElementById("pokemon-image-text-2").innerHTML = uglypokemon[a][5][1];
      document.getElementById("pokemon-image-3").setAttribute("src", "Resources/Images/Pokemon/Cute/" + pokemon + "/3.png");
      document.getElementById("pokemon-image-3").setAttribute("alt", uglypokemon[a][5][2]);
      document.getElementById("pokemon-image-text-1").innerHTML = uglypokemon[a][5][0];
      document.getElementById("pokemon-image-text-2").innerHTML = uglypokemon[a][5][1];
      document.getElementById("pokemon-image-text-3").innerHTML = uglypokemon[a][5][2];
    }
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
      document.getElementById("related-pokemon-image-" + (c + 1)).setAttribute("src", "Resources/Images/Pokemon/Ugly/" + uglypokemon[cc][0] + "/1.png");
      document.getElementById("related-pokemon-image-" + (c + 1)).setAttribute("alt", uglypokemon[cc][0]);
      document.getElementById("related-pokemon-link-" + (c + 1)).setAttribute("href", "pokemon?" + uglypokemon[cc][0]);
      document.getElementById("related-pokemon-" + (c + 1)).innerHTML = uglypokemon[cc][0];
      c++;
    }
  }
  a++;
}
showSlides(slide);
function plusSlides(s) {
  showSlides((slide += s));
}
function currentSlide(s) {
  showSlides((slide = s));
}
function showSlides(s) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (s > slides.length) {
    slide = 1;
  }
  if (s < 1) {
    slide = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide - 1].style.display = "block";
  dots[slide - 1].className += " active";
}
