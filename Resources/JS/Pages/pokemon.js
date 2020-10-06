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
  ["Pikachu", "025", "The electic mouse pokémon. It stores electricity in it's cheeks and attacks with energy equivalent to a lighting bolt.", "", 3],
  ["Eevee", "133", "The evolution pokémon. Eevee is most well known for the largest amount of possible evolutions - 8 in total.", "", 2],
  ["Mew", "151", "The new species pokémon. This mythical creature possesses the genetic information of every Pokémon and is rarely seen.", "", 1],
  ["Togepi", "175", "The spike ball pokémon. It's shell is said to contain happiness and Togepi often shares it with others of pure intent.", "", 3],
  ["Skitty", "300", "The kitten pokémon. Skitty likes to chase it's own tail until it falls dizzy. It is very popular as a pet.", "", 2],
  ["Vulpix", "037", "The fox pokémon. It is able to control a flame in it's mouth that never goes out. As it grows, it's tails split to make more.", "", 2],
  ["Emolga", "587", "The sky squirrel pokémon. It glides around uith it's ", "", 1],
  ["Deerling", "585", "", "", 2],
  ["Snom", "872", "", "", 2],
  ["Teddiursa", "216", "", "", 2],
  ["Jirachi", "385", "", "", 1],
  ["jigglypuff", "039", "", "", 3],
  ["Shaymin", "492", "", "", 1],
  ["Meloetta", "648", "", "", 1],
  ["Absol", "359", "", "", 1],
];
var uglypokemon = [
  ["Jynx", "124", "", "", 2],
  ["Probopass", "476", "", "", 2],
  ["Garbodor", "569", "", "", 2],
  ["Conkeldurr", "534", "", "", 3],
  ["Barbaracle", "689", "", "", 2],
  ["Stunfisk", "618", "", "", 1],
  ["Seismitoad", "537", "", "", 3],
  ["Purugly", "432", "", "", 2],
  ["Muk", "089", "", "", 2],
  ["Drowzee", "096", "", "", 2],
  ["Swampert", "260", "", "", 3],
  ["Walrein", "365", "", "", 3],
  ["Malamar", "687", "", "", 2],
  ["Noivern", "715", "", "", 2],
  ["Skuntank", "435", "", "", 2],
];
var pokemon = window.location.href.split("?")[1];
var a = 0;
var b = 0;
var c = 0;
var type = "";
if (pokemons.includes(pokemon)) {
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
    document.getElementById("pokemon-image-1").setAttribute("src", "Resources/Images/Pokemon/Cute/" + cutepokemon[a][1] + ".png");
    document.getElementById("pokemon-image-1").setAttribute("alt", pokemon);
    if (cutepokemon[a][4] == 1) {
      document.getElementById("pokemon-controls").style.display = "none";
      document.getElementById("pokemon-image-text-1").style.display = "none";
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
      document.getElementById("related-pokemon-image-" + (b + 1)).setAttribute("src", "Resources/Images/Pokemon/Cute/" + cutepokemon[bb][1] + ".png");
      document.getElementById("related-pokemon-image-" + (b + 1)).setAttribute("alt", cutepokemon[bb][0]);
      document.getElementById("related-pokemon-link-" + (b + 1)).setAttribute("href", "pokemon?" + cutepokemon[bb][0]);
      document.getElementById("related-pokemon-" + (b + 1)).innerHTML = cutepokemon[bb][0];
      b++;
    }
  }
  if (uglypokemon[a][0] == pokemon) {
    document.getElementById("related-pokemon").innerHTML = "Other Ugly Pokemon";
    document.getElementById("pokemon-info").innerHTML = uglypokemon[a][2];
    document.getElementById("pokemon-stats").innerHTML = uglypokemon[a][3];
    document.getElementById("pokemon-image-1").setAttribute("src", "Resources/Images/Pokemon/Ugly/" + uglypokemon[a][1] + ".png");
    document.getElementById("pokemon-image-1").setAttribute("alt", pokemon);
    if (uglypokemon[a][4] == 1) {
      document.getElementById("pokemon-controls").style.display = "none";
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
      document.getElementById("related-pokemon-image-" + (c + 1)).setAttribute("src", "Resources/Images/Pokemon/Ugly/" + uglypokemon[cc][1] + ".png");
      document.getElementById("related-pokemon-image-" + (c + 1)).setAttribute("alt", uglypokemon[cc][0]);
      document.getElementById("related-pokemon-link-" + (c + 1)).setAttribute("href", "pokemon?" + uglypokemon[cc][0]);
      document.getElementById("related-pokemon-" + (c + 1)).innerHTML = uglypokemon[cc][0];
      c++;
    }
  }
  a++;
}

var slide = 1;
showSlides(slide);
function plusSlides(d) {
  showSlides((slide += d));
}
function currentSlide(d) {
  showSlides((slide = d));
}
function showSlides(d) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (d > slides.length) {
    slide = 1;
  }
  if (d < 1) {
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
