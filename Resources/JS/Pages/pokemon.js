//Each pokemon array uses the format ["POKEMON NAME", "POKEMON INFO", "POKEMON STATS", NUMBER OF EVOLUTIONS, ["EVOLUTION 1 NAME", "EVOLUTION 2 NAME", "EVOLUTION 3 NAME"], THE EVOLUTION NUMBER OF THE MAIN POKEMON]
//The cutepokemon array - used to display the correct information on the pokemon page
var cutepokemon = [
  ["Pikachu", "The electic mouse pokémon. It stores electricity in it's cheeks and attacks with energy equivalent to a lighting bolt. Females have hearted tails and males have straight cut.", "", 3, ["Pichu #172", "Pikachu #025", "Raichu #026"], 2, true],
  [
    "Eevee",
    "The evolution pokémon. Eevee is most well known for the largest amount of possible evolutions. Vaporeon, Flareon, Jolteon, Espeon, Umbreon, Leafeon, Glaceon and finally Sylveon are all the possible evolutions at the time of this writing.",
    "",
    2,
    ["Eevee #133", "Next 8 Evolutions (#134, #135, #136, #196, #197, #470, #471, #700)"],
    1,
    false,
  ],
  ["Mew", "The new species pokémon. This mythical creature possesses the genetic information of every Pokémon. It tends to stay hidden, and only a few sightings have been reported.", "", 1, "Mew #151", 1, false],
  ["Togepi", "The spike ball pokémon. It's shell is said to contain happiness and other warm fuzzies. If a togepi senses that a person is pure of heart, it will share these feelings with aforementioned person.", "", 3, ["Togepi #175", "Togetic #176", "Togekiss #468"], 1, false],
  ["Skitty", "The kitten pokémon. Skitty likes to chase it's own tail until it falls dizzy. It's cute, aloof demeanor makes it very popular as both a household pet and a Pokémon Competition participant.", "", 2, ["Skitty #300", "Delcatty #301"], 1, false],
  ["Vulpix", "The fox pokémon. It is able to control a flame in it's mouth that never goes out. It is born with only one tail, but as it gets older it splits and creates more tails.", "", 2, ["Vulpix #037", "Ninetales #038"], 1, false],
  [
    "Emolga",
    "The sky squirrel pokémon. It glides around with it's cape-like membrane, crackling with electricity as it goes. It often collects berries,  storing them in it's cheeks for later. It will occasionally lose balance when flying if carrying too many berries.",
    "",
    1,
    "Emolga #587",
    1,
    false,
  ],
  ["Deerling", "The season pokémon. Deerling's coat noticeably changes in sync with the seasons. The colouring can also be affected by temperature, humidity, and other external influences.", "", 2, ["Deerling #585", "Sawsbuck #586"], 1, false],
  ["Snom", "The worm pokémon. Its diet consists of snow it finds on the ground. As it eats more snow, the spikes on its back grow larger. It also uses a thread to weave a cocoon, disguising itslf as an icicle as it sleeps.", "", 2, ["Snom #872", "Frosmoth #873"], 1, false],
  ["Teddiursa", "The little bear pokémon. This pokemon often hoards food, most of all honey, in many hidden locations around the forest it resides in. This is to prepare for the harsh wintertimes, where food is scarce. ", "", 2, ["Teddiursa #216", "Ursaring #217"], 1, false],
  ["Jirachi", "The wish pokémon. Jirachi is a mythical pokemon which can be summonned by a specific ritual of song. It is said that if you write a wish and place it on it's head, the wish will come true, but only for the pure of heart. ", "", 1, "Jirachi #385", 1, false],
  ["Jigglypuff", "The balloon pokémon. It's voice is said to be magical and Jigglypuff is able to sing it's audience to sleep, as they relax and let the notes flow over them. It is said that nothing can resist it's song.", "", 3, ["Igglybuff #174", "Jigglypuff #039", "Wigglytuff #040"], 2, false],
  ["Shaymin", "The gratitude pokémon. Shaymin (in sky forme) fly in flocks, purifying the air and getting rid of all pollutants. It reverts to it's land forme when it touches a Gracidea flower, when it is night time or when it is frozen.", "", 1, "Shaymin`#492", 1, false],
  ["Meloetta", "The melody pokémon. The mythical Meloetta's voice can control the emotions of pokémon who happen to hear it's pure voice. Whether or not it can affect humans as well remains to be seen.  ", "", 1, "Moloetta #648", 1, false],
  ["Absol", "The disaster pokémon. Absol has the ability to sense natural disasters and appears before they strike. People misinterpreted it's presence as a warning, thinking Absol the cause of these disasters. In legend, it is known as a harbinger of doom.", "", 1, "Absol #359", 1, false],
];
//The uglypokemon array - used to display the correct information on the pokemon page
var uglypokemon = [
  ["Jynx", "The human shape pokémon. Jynx rocks its body in a rhythmic fashion, changing it's tempo to fit how it is feeling. While it speaks a language similar to that of humans, it prefers using dancing to communicate.", "", 2, ["Smoochum #238", "Jynx #124"], 2, false],
  ["Probopass", "The compass pokémon. It controls 3 mini-noses, small replicas of itself which float around it, using magnetic force. They maneuver to catch prey and battle orders. The main body is thought of as the control center.", "", 2, ["Nosepass #299", "Probopass #476"], 2, false],
  [
    "Garbodor",
    "The trash heap pokémon. Garbodor's body creates many kinds of toxic substances and poisons inside it. It's left arm is surprisingly strong and finishes off enemies with a shot of putrid, virulent gas that can kill a weak pokémon with ease.",
    "",
    2,
    ["Trubbish #568", "Garbodor #569"],
    2,
    false,
  ],
  [
    "Conkeldurr",
    "The muscular pokémon. It is said that Conkeldurr taught humans how to make concrete over 2000 years ago. Their knowledge of concrete allowes them to use the slabs they carry in their hands to be used freely in a variety of moves whilst in battle.",
    "",
    3,
    ["Timburr #532", "Gurdurr #533", "Conkeldurr #534"],
    3,
    false,
  ],
  [
    "Barbaracle",
    "The collective pokémon. When they evolve, two Binacle multiply into seven. They fight with the power of seven Binacle. The Binacle that serves as the head gives orders to those serving as the limbs. However Barbaracle’s legs and hands have minds of their own, and they are able move independently.",
    "",
    2,
    ["Binacle #688", "Barbaracle #689"],
    2,
    false,
  ],
  [
    "Stunfisk",
    "The trap pokémon. It conceals itself in the mud of the seashore. Then it waits. When prey touch it, it delivers a jolt of electricity. Its skin is very hard, so it is unhurt even if stepped on by sumo wrestlers. It smiles when it transmits the shock.",
    "",
    1,
    "Stunfisk #618",
    1,
    false,
  ],
  [
    "Seismitoad",
    "The vibration pokémon. They shoot paralyzing liquid from their head bumps. They use vibration to hurt their opponents. By putting power into its bumps, it creates vibrations and increases the power of its punches.",
    "",
    3,
    ["Tympole #535", "Palpitoad #536", "Seismitoad #537"],
    3,
    false,
  ],
  ["Purugly", "The tiger cat pokémon. Purugly is a brazen brute that barges its way into another Pokémon’s nest and claims it as its own. It binds its body with its tails to make itself look bigger. If it locks eyes, it will glare ceaselessly.", "", 2, ["Glameow #431", "Purugly #432"], 2, false],
  [
    "Muk",
    "The sludge pokémon. It smells so awful, it can cause fainting. It has lost its sense of smell through degeneration. After recent environmental improvements, this Pokémon is now hardly seen at all. People speculate that it may go extinct at some point.",
    "",
    2,
    ["Grimer #088", "Muk #089"],
    2,
    false,
  ],
  [
    "Drowzee",
    "The hypnosis pokémon. If you think that you had a good dream, but you can’t remember it, a Drowzee has probably eaten it. If your nose becomes itchy while you are sleeping, it’s a sure sign that one of these Pokémon is standing above your pillow and trying to eat your dream through your nostrils.",
    "",
    2,
    ["Drowzee #096", "Hypno #097"],
    1,
    false,
  ],
  [
    "Swampert",
    "The mud fish pokémon. Swampert predicts storms by sensing subtle differences in the sounds of waves and tidal winds with its fins. If a storm is approaching, it piles up boulders to protect itself. It bashes down foes with a swing of its thick arms.",
    "",
    3,
    ["Mudkip #258", "Marshtomp #259", "Marshtomp #259"],
    3,
    false,
  ],
  [
    "Walrein",
    "The ice break pokémon. It shatters ice with its big tusks. Its thick blubber repels both the cold and enemy attacks. To protect its herd, the leader battles anything that invades its territory, even at the cost of its life.",
    "",
    3,
    ["Spheal #363", "Sealeo #364", "Walrein #365"],
    3,
    false,
  ],
  [
    "Malamar",
    "The overturning pokémon. Gazing at its luminescent spots will quickly induce a hypnotic state, putting the observer under Malamar’s control. It lures its prey close with hypnotic motions, then wraps its tentacles around it before finishing it off with digestive fluids.",
    "",
    2,
    ["Inkay #686", "Malamar #687"],
    2,
    false,
  ],
  ["Noivern", "The sound wave pokémon. The ultrasonic waves it emits from its ears can reduce a large boulder to pebbles.  Aggressive and cruel, this Pokémon will ruthlessly torment enemies that are helpless in the dark.", "", 2, ["Noibat #714", "Noivern #715"], 2, false],
  ["Skuntank", "The skunk pokémon. In its belly, it reserves stinky fluid that it shoots from its tail during battle. As this Pokémon’s diet varies, so does the stench of its fluid. The range of this attack comes to almost over 160 feet.", "", 2, ["Stunky #434", "Skuntank #435"], 2, false],
];
//Gets the pokemon from the url
if (window.location.href.split("?Pokemon=")[1] != null) {
  var pokemon = capitalize(window.location.href.split("?Pokemon=")[1].toLowerCase());
} else {
  //If invalid go back in history 1, if no history is available go to home page
  window.history.back();
  window.location.replace("https://huggydabuggy.github.io/Pokemon-Project/");
}
//Resets/Defines variables
var valid = false;
var a = 0;
var b = 0;
var c = 0;
//Loops through all pokemon to find which pokemon is specified
while (a < 15) {
  //Checks if pokemon is cute
  if (cutepokemon[a][0] == pokemon) {
    var valid = true;
    //Sets more page info based on cute
    document.getElementById("related-pokemon").innerHTML = "Other Cute Pokemon";
    document.getElementById("pokemon-info").innerHTML = cutepokemon[a][1];
    document.getElementById("pokemon-stats").innerHTML = cutepokemon[a][2];
    document.getElementById("pokemon-image-1").setAttribute("src", "Resources/Images/Pokemon/Cute/" + pokemon + "/1.png");
    document.getElementById("pokemon-image-1").setAttribute("alt", pokemon);
    //Hides th vot eon poll button if the pokemon is not currently in a poll
    if (!cutepokemon[a][6]) {
      document.getElementById("vote-poll").style.display = "none";
    }
    //Sets the correct slide for the slide show
    var slide = cutepokemon[a][5];
    if (cutepokemon[a][3] == 2) {
      //Sets correct page  info if pokemon has 2 evolutions
      document.getElementById("pokemon-image-2").setAttribute("src", "Resources/Images/Pokemon/Cute/" + pokemon + "/2.png");
      document.getElementById("pokemon-image-2").setAttribute("alt", cutepokemon[a][4][1]);
      document.getElementById("pokemon-image-text-3").innerHTML = cutepokemon[a][4][1];
      document.getElementById("image-dots-3").style.display = "none";
      document.getElementById("image-dots-3").className = "unused";
      document.getElementById("slides-3").className = "unused";
      document.getElementById("pokemon-image-text-1").innerHTML = cutepokemon[a][4][0];
      document.getElementById("pokemon-image-text-2").innerHTML = cutepokemon[a][4][1];
    } else if (cutepokemon[a][3] == 3) {
      //Sets correct page  info if pokemon has 3 evolutions
      document.getElementById("pokemon-image-2").setAttribute("src", "Resources/Images/Pokemon/Cute/" + pokemon + "/2.png");
      document.getElementById("pokemon-image-2").setAttribute("alt", cutepokemon[a][4][1]);
      document.getElementById("pokemon-image-text-2").innerHTML = cutepokemon[a][4][1];
      document.getElementById("pokemon-image-3").setAttribute("src", "Resources/Images/Pokemon/Cute/" + pokemon + "/3.png");
      document.getElementById("pokemon-image-3").setAttribute("alt", cutepokemon[a][4][2]);
      document.getElementById("pokemon-image-text-1").innerHTML = cutepokemon[a][4][0];
      document.getElementById("pokemon-image-text-2").innerHTML = cutepokemon[a][4][1];
      document.getElementById("pokemon-image-text-3").innerHTML = cutepokemon[a][4][2];
    } else {
      //Sets correct page  info if pokemon has no evolutions
      document.getElementById("pokemon-controls").style.display = "none";
      document.getElementById("pokemon-image-text-1").innerHTML = cutepokemon[a][4];
    }
    //Other cute pokemon loop
    while (b < 4) {
      //Checks if number is too large or negative then corrects it
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
      //Sets info for other pokemon
      document.getElementById("related-pokemon-image-" + (b + 1)).setAttribute("src", "Resources/Images/Pokemon/Cute/" + cutepokemon[bb][0] + "/" + cutepokemon[bb][5] + ".png");
      document.getElementById("related-pokemon-image-" + (b + 1)).setAttribute("alt", cutepokemon[bb][0]);
      document.getElementById("related-pokemon-link-" + (b + 1)).setAttribute("href", "pokemon?Pokemon=" + cutepokemon[bb][0]);
      document.getElementById("related-pokemon-" + (b + 1)).innerHTML = cutepokemon[bb][0];
      b++;
    }
    //Checks if pokemon is ugly
  } else if (uglypokemon[a][0] == pokemon) {
    var valid = true;
    //Sets more page info based on ugly
    document.getElementById("related-pokemon").innerHTML = "Other Ugly Pokemon";
    document.getElementById("pokemon-info").innerHTML = uglypokemon[a][1];
    document.getElementById("pokemon-stats").innerHTML = uglypokemon[a][2];
    document.getElementById("pokemon-image-1").setAttribute("src", "Resources/Images/Pokemon/Ugly/" + pokemon + "/1.png");
    document.getElementById("pokemon-image-1").setAttribute("alt", pokemon);
    //Sets the correct slide for the slide show
    //Hides th vot eon poll button if the pokemon is not currently in a poll
    if (!uglypokemon[a][6]) {
      document.getElementById("vote-poll").style.display = "none";
    }
    var slide = uglypokemon[a][5];
    if (uglypokemon[a][3] == 2) {
      //Sets correct page  info if pokemon has 2 evolutions
      document.getElementById("pokemon-image-2").setAttribute("src", "Resources/Images/Pokemon/Ugly/" + pokemon + "/2.png");
      document.getElementById("pokemon-image-2").setAttribute("alt", uglypokemon[a][4][1]);
      document.getElementById("pokemon-image-text-3").innerHTML = uglypokemon[a][4][1];
      document.getElementById("image-dots-3").style.display = "none";
      document.getElementById("image-dots-3").className = "unused";
      document.getElementById("slides-3").className = "unused";
      document.getElementById("pokemon-image-text-1").innerHTML = uglypokemon[a][4][0];
      document.getElementById("pokemon-image-text-2").innerHTML = uglypokemon[a][4][1];
    } else if (uglypokemon[a][3] == 3) {
      //Sets correct page  info if pokemon has 3 evolutions
      document.getElementById("pokemon-image-2").setAttribute("src", "Resources/Images/Pokemon/Ugly/" + pokemon + "/2.png");
      document.getElementById("pokemon-image-2").setAttribute("alt", uglypokemon[a][4][1]);
      document.getElementById("pokemon-image-text-2").innerHTML = uglypokemon[a][4][1];
      document.getElementById("pokemon-image-3").setAttribute("src", "Resources/Images/Pokemon/Ugly/" + pokemon + "/3.png");
      document.getElementById("pokemon-image-3").setAttribute("alt", uglypokemon[a][4][2]);
      document.getElementById("pokemon-image-text-1").innerHTML = uglypokemon[a][4][0];
      document.getElementById("pokemon-image-text-2").innerHTML = uglypokemon[a][4][1];
      document.getElementById("pokemon-image-text-3").innerHTML = uglypokemon[a][4][2];
    } else {
      //Sets correct page  info if pokemon has no evolutions
      document.getElementById("pokemon-controls").style.display = "none";
      document.getElementById("pokemon-image-text-1").innerHTML = uglypokemon[a][4];
    }
    //Other ugly pokemon loop
    while (c < 4) {
      //Checks if number is too large or negative then corrects it
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
      //Sets info for other pokemon
      document.getElementById("related-pokemon-image-" + (c + 1)).setAttribute("src", "Resources/Images/Pokemon/Ugly/" + uglypokemon[cc][0] + "/" + uglypokemon[cc][5] + ".png");
      document.getElementById("related-pokemon-image-" + (c + 1)).setAttribute("alt", uglypokemon[cc][0]);
      document.getElementById("related-pokemon-link-" + (c + 1)).setAttribute("href", "pokemon?Pokemon=" + uglypokemon[cc][0]);
      document.getElementById("related-pokemon-" + (c + 1)).innerHTML = uglypokemon[cc][0];
      c++;
    }
  }
  a++;
}
//Checks if the pokemon was valid
if (!valid) {
  //If invalid go back in history 1, if no history is available go to home page
  window.history.back();
  window.location.replace("https://huggydabuggy.github.io/Pokemon-Project/");
} else {
  document.title = "Pokemon - " + pokemon;
  document.getElementById("pokemon-name").innerHTML = pokemon;
  document.getElementById("pokemon-info-title").innerHTML = pokemon + " Info";
  document.getElementById("pokemon-stats-title").innerHTML = pokemon + " Stats";
  document.getElementById(pokemon + "-link").setAttribute("href", "javascript: void(0)");
  document.getElementById(pokemon + "-link").style.cursor = "default";
  document.getElementById(pokemon + "-link").style.fontWeight = "bold";
}
//Shows the slide for the slideshow
showSlides(slide);
//Function to increase or decrease the slideshow slide by number
function plusSlides(s) {
  showSlides((slide += s));
}
//Function to set slideshow slide
function showSlides(s) {
  //Sets required variables
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  //Corrects variables if they are too big/small
  if (s > slides.length) {
    slide = 1;
  }
  if (s < 1) {
    slide = slides.length;
  }
  //Hides inactive slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //Makes dots inactive
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //Shows slides
  slides[slide - 1].style.display = "block";
  //Actives dot
  dots[slide - 1].className += " active";
  //Checks if ImageScroll is on
  if (getStorage("ImageScroll")) {
    //If on wait 2s then change slide by 1
    setTimeout(function () {
      showSlides((slide += 1));
    }, 2000);
  }
}
