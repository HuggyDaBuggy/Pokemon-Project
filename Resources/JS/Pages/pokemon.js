//Each pokemon array uses the format ["POKEMON NAME", "POKEMON INFO", "POKEMON STATS", NUMBER OF EVOLUTIONS, ["EVOLUTION 1 NAME", "EVOLUTION 2 NAME", "EVOLUTION 3 NAME"], THE EVOLUTION NUMBER OF THE MAIN POKEMON, IF POKEMON IS ACTIVELY IN A POLL]
//The cutepokemon array - used to display the correct information on the pokemon page
var cutepokemon = [
  [
    "Pikachu",
    "The electric mouse pokémon. It stores electricity in it's cheeks and attacks with energy equivalent to a lighting bolt. Females have hearted tails and males have straight cut.",
    "Id: <i><b>#025</i></b><br />Rating: <i><b>96 / 100</i></b><br />Type: <i><b>Electric</i></b><br />Number Of Evolutions: <i><b>4</i></b><br />Weakness: <i><b>Ground</i></b><br />Category: <i><b>Mouse</i></b>",
    3,
    ["Pichu #172", "Pikachu #025", "Raichu #026"],
    2,
    true,
  ],
  [
    "Eevee",
    "The evolution pokémon. Eevee is most well known for the largest amount of possible evolutions. Vaporeon, Flareon, Jolteon, Espeon, Umbreon, Leafeon, Glaceon and finally Sylveon are all the possible evolutions at the time of this writing.",
    "Id: <i><b>#133</i></b><br />Rating: <i><b>84 / 100</i></b><br />Type: <i><b>Normal</i></b><br />Number Of Evolutions: <i><b>9</i></b><br />Weakness: <i><b>Fighting</i></b><br />Category: <i><b>Evolution</i></b>",
    2,
    [
      "Eevee #133",
      "Next 8 Evolutions (#134, #135, #136, #196, #197, #470, #471, #700)",
    ],
    1,
    false,
  ],
  [
    "Mew",
    "The new species pokémon. This mythical creature possesses the genetic information of every Pokémon. It tends to stay hidden, and only a few sightings have been reported.",
    "Id: <i><b>#151</i></b><br />Rating: <i><b>79 / 100</i></b><br />Type: <i><b>Psychic</i></b><br />Number Of Evolutions: <i><b>1</i></b><br />Weakness: <i><b>Ghost, Dark and Bug</i></b><br />Category: <i><b>New Species</i></b>",
    1,
    "Mew #151",
    1,
    false,
  ],
  [
    "Togepi",
    "The spike ball pokémon. It's shell is said to contain happiness and other warm fuzzies. If a togepi senses that a person is pure of heart, it will share these feelings with aforementioned person.",
    "Id: <i><b>#175</i></b><br />Rating: <i><b>77 / 100</i></b><br />Type: <i><b>Fairy</i></b><br />Number Of Evolutions: <i><b>3</i></b><br />Weakness: <i><b>Steel and Poison</i></b><br />Category: <i><b>Spike Ball</i></b>",
    3,
    ["Togepi #175", "Togetic #176", "Togekiss #468"],
    1,
    false,
  ],
  [
    "Skitty",
    "The kitten pokémon. Skitty likes to chase it's own tail until it falls dizzy. It's cute, aloof demeanor makes it very popular as both a household pet and a Pokémon Competition participant.",
    "Id: <i><b>#300</i></b><br />Rating: <i><b>74 / 100</i></b><br />Type: <i><b>Normal</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Fighting</i></b><br />Category: <i><b>Kitten</i></b>",
    2,
    ["Skitty #300", "Delcatty #301"],
    1,
    false,
  ],
  [
    "Vulpix",
    "The fox pokémon. It is able to control a flame in it's mouth that never goes out. It is born with only one tail, but as it gets older it splits and creates more tails.",
    "Id: <i><b>#037</i></b><br />Rating: <i><b>85 / 100</i></b><br />Type: <i><b>Fire</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Water, Ground and Rock</i></b><br />Category: <i><b>Fox</i></b>",
    2,
    ["Vulpix #037", "Ninetales #038"],
    1,
    false,
  ],
  [
    "Emolga",
    "The sky squirrel pokémon. It glides around with it's cape-like membrane, crackling with electricity as it goes. It often collects berries,  storing them in it's cheeks for later. It will occasionally lose balance when flying if carrying too many berries.",
    "Id: <i><b>#587</i></b><br />Rating: <i><b>88 / 100</i></b><br />Type: <i><b>Electric and Flying</i></b><br />Number Of Evolutions: <i><b>1</i></b><br />Weakness: <i><b>Ice and Rock</i></b><br />Category: <i><b>Sky Squirrel</i></b>",
    1,
    "Emolga #587",
    1,
    false,
  ],
  [
    "Deerling",
    "The season pokémon. Deerling's coat noticeably changes in sync with the seasons. The colouring can also be affected by temperature, humidity, and other external influences.",
    "Id: <i><b>#585</i></b><br />Rating: <i><b>74 / 100</i></b><br />Type: <i><b>Normal and Grass</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Fire, Flying, Fighting, Ice, Poison and Bug</i></b><br />Category: <i><b>Season</i></b>",
    2,
    ["Deerling #585", "Sawsbuck #586"],
    1,
    false,
  ],
  [
    "Snom",
    "The worm pokémon. Its diet consists of snow it finds on the ground. As it eats more snow, the spikes on its back grow larger. It also uses a thread to weave a cocoon, disguising its self as an icicle as it sleeps.",
    "Id: <i><b>#872</i></b><br />Rating: <i><b>68 / 100</i></b><br />Type: <i><b>Ice and Bug</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Fire, Steel, Flying and Rock</i></b><br />Category: <i><b>Worm</i></b>",
    2,
    ["Snom #872", "Frosmoth #873"],
    1,
    true,
  ],
  [
    "Teddiursa",
    "The little bear pokémon. This pokemon often hoards food, most of all honey, in many hidden locations around the forest it resides in. This is to prepare for the harsh wintertimes, where food is scarce. ",
    "Id: <i><b>#216</i></b><br />Rating: <i><b>73 / 100</i></b><br />Type: <i><b>Normal</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Fighting</i></b><br />Category: <i><b>Little Bear</i></b>",
    2,
    ["Teddiursa #216", "Ursaring #217"],
    1,
    false,
  ],
  [
    "Jirachi",
    "The wish pokémon. Jirachi is a mythical pokemon which can be summoned by a specific ritual of song. It is said that if you write a wish and place it on it's head, the wish will come true, but only for the pure of heart. ",
    "Id: <i><b>#385</i></b><br />Rating: <i><b>83 / 100</i></b><br />Type: <i><b>Steel and Psychic</i></b><br />Number Of Evolutions: <i><b>1</i></b><br />Weakness: <i><b>Ghost, Fire, Dark and Ground</i></b><br />Category: <i><b>Wish</i></b>",
    1,
    "Jirachi #385",
    1,
    false,
  ],
  [
    "Jigglypuff",
    "The balloon pokémon. It's voice is said to be magical and Jigglypuff is able to sing it's audience to sleep, as they relax and let the notes flow over them. It is said that nothing can resist it's song.",
    "Id: <i><b>#039</i></b><br />Rating: <i><b>72 / 100</i></b><br />Type: <i><b>Normal and Fairy</i></b><br />Number Of Evolutions: <i><b>3</i></b><br />Weakness: <i><b>Steel and Poison</i></b><br />Category: <i><b>Balloon</i></b>",
    3,
    ["Igglybuff #174", "Jigglypuff #039", "Wigglytuff #040"],
    2,
    false,
  ],
  [
    "Shaymin",
    "The gratitude pokémon. Shaymin (in sky forme) fly in flocks, purifying the air and getting rid of all pollutants. It reverts to it's land forme when it touches a Gracidea flower, when it is night time or when it is frozen.",
    "Id: <i><b>#492</i></b><br />Rating: <i><b>85 / 100</i></b><br />Type: <i><b>Grass</i></b><br />Number Of Evolutions: <i><b>1</i></b><br />Weakness: <i><b>Fire, Flying, Ice, Poison and Bug</i></b><br />Category: <i><b>Gratitude</i></b>",
    1,
    "Shaymin`#492",
    1,
    false,
  ],
  [
    "Meloetta",
    "The melody pokémon. The mythical Meloetta's voice can control the emotions of pokémon who happen to hear it's pure voice. Whether or not it can affect humans as well remains to be seen.  ",
    "Id: <i><b>#649</i></b><br />Rating: <i><b>78 / 100</i></b><br />Type: <i><b>Normal and Psychic</i></b><br />Number Of Evolutions: <i><b>1</i></b><br />Weakness: <i><b>Dark and Bug</i></b><br />Category: <i><b>Melody</i></b>",
    1,
    "Moloetta #648",
    1,
    false,
  ],
  [
    "Absol",
    "The disaster pokémon. Absol has the ability to sense natural disasters and appears before they strike. People misinterpreted it's presence as a warning, thinking Absol the cause of these disasters. In legend, it is known as a harbinger of doom.",
    "Id: <i><b>#359</i></b><br />Rating: <i><b>75 / 100</i></b><br />Type: <i><b>Dark</i></b><br />Number Of Evolutions: <i><b>1</i></b><br />Weakness: <i><b>Fairy, Bug and Fighting</i></b><br />Category: <i><b>Disaster</i></b>",
    1,
    "Absol #359",
    1,
    false,
  ],
];
//The uglypokemon array - used to display the correct information on the pokemon page
var uglypokemon = [
  [
    "Jynx",
    "The human shape pokémon. Jynx rocks its body in a rhythmic fashion, changing it's tempo to fit how it is feeling. While it speaks a language similar to that of humans, it prefers using dancing to communicate.",
    "Id: <i><b>#124</i></b><br />Rating: <i><b>08 / 100</i></b><br />Type: <i><b>Ice and Psychic</i></b><br />Number Of Evolutions: <i><b>1</i></b><br />Weakness: <i><b>Steel, Ghost, Fire, Dark, Rock and Bug</i></b><br />Category: <i><b>Human Shape</i></b>",
    2,
    ["Smoochum #238", "Jynx #124"],
    2,
    true,
  ],
  [
    "Probopass",
    "The compass pokémon. It controls 3 mini-noses, small replicas of itself which float around it, using magnetic force. They maneuver to catch prey and battle orders. The main body is thought of as the control center.",
    "Id: <i><b>#476</i></b><br />Rating: <i><b>19 / 100</i></b><br />Type: <i><b>Rock and Steel</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Water, Fighting and Ground</i></b><br />Category: <i><b>Compass</i></b>",
    2,
    ["Nosepass #299", "Probopass #476"],
    2,
    true,
  ],
  [
    "Garbodor",
    "The trash heap pokémon. Garbodor's body creates many kinds of toxic substances and poisons inside it. It's left arm is surprisingly strong and finishes off enemies with a shot of putrid, virulent gas that can kill a weak pokémon with ease.",
    "Id: <i><b>#569</i></b><br />Rating: <i><b>24 / 100</i></b><br />Type: <i><b>Poison</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Psychic and Ground</i></b><br />Category: <i><b>Trash Heap</i></b>",
    2,
    ["Trubbish #568", "Garbodor #569"],
    2,
    false,
  ],
  [
    "Conkeldurr",
    "The muscular pokémon. It is said that Conkeldurr taught humans how to make concrete over 2000 years ago. Their knowledge of concrete allows them to use the slabs they carry in their hands to be used freely in a variety of moves whilst in battle.",
    "Id: <i><b>#534</i></b><br />Rating: <i><b>12 / 100</i></b><br />Type: <i><b>Fighting</i></b><br />Number Of Evolutions: <i><b>3</i></b><br />Weakness: <i><b>Psychic, Flying and Fairy</i></b><br />Category: <i><b>Muscular</i></b>",
    3,
    ["Timburr #532", "Gurdurr #533", "Conkeldurr #534"],
    3,
    false,
  ],
  [
    "Barbaracle",
    "The collective pokémon. When they evolve, two Binacle multiply into seven. They fight with the power of seven Binacle. The Binacle that serves as the head gives orders to those serving as the limbs. However Barbaracle’s legs and hands have minds of their own, and they are able move independently.",
    "Id: <i><b>#689</i></b><br />Rating: <i><b>16 / 100</i></b><br />Type: <i><b>Rock and Water</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Grass, Electric, Fighting and Ground</i></b><br />Category: <i><b>Collective</i></b>",
    2,
    ["Binacle #688", "Barbaracle #689"],
    2,
    false,
  ],
  [
    "Stunfisk",
    "The trap pokémon. It conceals itself in the mud of the seashore. Then it waits. When prey touch it, it delivers a jolt of electricity. Its skin is very hard, so it is unhurt even if stepped on by sumo wrestlers. It smiles when it transmits the shock.",
    "Id: <i><b>#618</i></b><br />Rating: <i><b>36 / 100</i></b><br />Type: <i><b>Ground and Electric</i></b><br />Number Of Evolutions: <i><b>1</i></b><br />Weakness: <i><b>Water, Grass, Ice and Ground</i></b><br />Category: <i><b>Trap</i></b>",
    1,
    "Stunfisk #618",
    1,
    false,
  ],
  [
    "Seismitoad",
    "The vibration pokémon. They shoot paralyzing liquid from their head bumps. They use vibration to hurt their opponents. By putting power into its bumps, it creates vibrations and increases the power of its punches.",
    "Id: <i><b>#537</i></b><br />Rating: <i><b>18 / 100</i></b><br />Type: <i><b>Water and Ground</i></b><br />Number Of Evolutions: <i><b>3</i></b><br />Weakness: <i><b>Grass</i></b><br />Category: <i><b>Vibration</i></b>",
    3,
    ["Tympole #535", "Palpitoad #536", "Seismitoad #537"],
    3,
    false,
  ],
  [
    "Purugly",
    "The tiger cat pokémon. Purugly is a brazen brute that barges its way into another Pokémon’s nest and claims it as its own. It binds its body with its tails to make itself look bigger. If it locks eyes, it will glare ceaselessly.",
    "Id: <i><b>#432</i></b><br />Rating: <i><b>28 / 100</i></b><br />Type: <i><b>Normal</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Fighting</i></b><br />Category: <i><b>Tiger Cat</i></b>",
    2,
    ["Glameow #431", "Purugly #432"],
    2,
    false,
  ],
  [
    "Muk",
    "The sludge pokémon. It smells so awful, it can cause fainting. It has lost its sense of smell through degeneration. After recent environmental improvements, this Pokémon is now hardly seen at all. People speculate that it may go extinct at some point.",
    "Id: <i><b>#089</i></b><br />Rating: <i><b>22 / 100</i></b><br />Type: <i><b>Poison</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Psychic and Ground</i></b><br />Category: <i><b>Sludge</i></b>",
    2,
    ["Grimer #088", "Muk #089"],
    2,
    false,
  ],
  [
    "Drowzee",
    "The hypnosis pokémon. If you think that you had a good dream, but you can’t remember it, a Drowzee has probably eaten it. If your nose becomes itchy while you are sleeping, it’s a sure sign that one of these Pokémon is standing above your pillow and trying to eat your dream through your nostrils.",
    "Id: <i><b>#096</i></b><br />Rating: <i><b>26 / 100</i></b><br />Type: <i><b>Phsyic</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Ghost, Dark and Bug</i></b><br />Category: <i><b>Hypnosis</i></b>",
    2,
    ["Drowzee #096", "Hypno #097"],
    1,
    false,
  ],
  [
    "Swampert",
    "The mud fish pokémon. Swampert predicts storms by sensing subtle differences in the sounds of waves and tidal winds with its fins. If a storm is approaching, it piles up boulders to protect itself. It bashes down foes with a swing of its thick arms.",
    "Id: <i><b>#260</i></b><br />Rating: <i><b>41 / 100</i></b><br />Type: <i><b>Water and Ground</i></b><br />Number Of Evolutions: <i><b>3</i></b><br />Weakness: <i><b>Grass</i></b><br />Category: <i><b>Mud Fish</i></b>",
    3,
    ["Mudkip #258", "Marshtomp #259", "Marshtomp #259"],
    3,
    false,
  ],
  [
    "Walrein",
    "The ice break pokémon. It shatters ice with its big tusks. Its thick blubber repels both the cold and enemy attacks. To protect its herd, the leader battles anything that invades its territory, even at the cost of its life.",
    "Id: <i><b>#365</i></b><br />Rating: <i><b>39 / 100</i></b><br />Type: <i><b>Ice and Water</i></b><br />Number Of Evolutions: <i><b>3</i></b><br />Weakness: <i><b>Grass, Electric, Fighting and Rock</i></b><br />Category: <i><b>Ice Break</i></b>",
    3,
    ["Spheal #363", "Sealeo #364", "Walrein #365"],
    3,
    false,
  ],
  [
    "Malamar",
    "The overturning pokémon. Gazing at its luminescent spots will quickly induce a hypnotic state, putting the observer under Malamar’s control. It lures its prey close with hypnotic motions, then wraps its tentacles around it before finishing it off with digestive fluids.",
    "Id: <i><b>#687</i></b><br />Rating: <i><b>46 / 100</i></b><br />Type: <i><b>Dark Psychic</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Fairy and Bug</i></b><br />Category: <i><b>Overturning</i></b>",
    2,
    ["Inkay #686", "Malamar #687"],
    2,
    false,
  ],
  [
    "Noivern",
    "The sound wave pokémon. The ultrasonic waves it emits from its ears can reduce a large boulder to pebbles.  Aggressive and cruel, this Pokémon will ruthlessly torment enemies that are helpless in the dark.",
    "Id: <i><b>#715</i></b><br />Rating: <i><b>57 / 100</i></b><br />Type: <i><b>Flying and Dragon</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Fariry, Rock, Ice and Dragon</i></b><br />Category: <i><b>Sound Wave</i></b>",
    2,
    ["Noibat #714", "Noivern #715"],
    2,
    false,
  ],
  [
    "Skuntank",
    "The skunk pokémon. In its belly, it reserves stinky fluid that it shoots from its tail during battle. As this Pokémon’s diet varies, so does the stench of its fluid. The range of this attack comes to almost over 160 feet.",
    "Id: <i><b>#435</i></b><br />Rating: <i><b>32 / 100</i></b><br />Type: <i><b>Pioison and Dark</i></b><br />Number Of Evolutions: <i><b>2</i></b><br />Weakness: <i><b>Ground</i></b><br />Category: <i><b>Skunk</i></b>",
    2,
    ["Stunky #434", "Skuntank #435"],
    2,
    false,
  ],
];
//Gets the pokemon from the url
if (window.location.href.split("?Pokemon=")[1] != null) {
  var pokemon = capitalize(
    window.location.href.split("?Pokemon=")[1].toLowerCase()
  );
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
var scrollallowed = false;
//Loops through all pokemon to find which pokemon is specified
while (a < 15) {
  //Checks if pokemon is cute
  if (cutepokemon[a][0] == pokemon) {
    var valid = true;
    //Sets more page info based on cute
    document.getElementById("related-pokemon").innerHTML = "Other Cute Pokemon";
    document.getElementById("pokemon-info").innerHTML = cutepokemon[a][1];
    document.getElementById("pokemon-stats").innerHTML = cutepokemon[a][2];
    document
      .getElementById("pokemon-image-1")
      .setAttribute(
        "src",
        "Resources/Images/Pokemon/Cute/" + pokemon + "/1.png"
      );
    document.getElementById("pokemon-image-1").setAttribute("alt", pokemon);
    //Hides th vot eon poll button if the pokemon is not currently in a poll
    if (!cutepokemon[a][6]) {
      document.getElementById("vote-poll").style.display = "none";
    }
    //Sets the correct slide for the slide show
    var slide = cutepokemon[a][5];
    if (cutepokemon[a][3] == 2) {
      //Sets correct page  info if pokemon has 2 evolutions
      document
        .getElementById("pokemon-image-2")
        .setAttribute(
          "src",
          "Resources/Images/Pokemon/Cute/" + pokemon + "/2.png"
        );
      document
        .getElementById("pokemon-image-2")
        .setAttribute("alt", cutepokemon[a][4][1]);
      document.getElementById("pokemon-image-text-3").innerHTML =
        cutepokemon[a][4][1];
      document.getElementById("image-dots-3").style.display = "none";
      document.getElementById("image-dots-3").className = "unused";
      document.getElementById("slides-3").className = "unused";
      document.getElementById("pokemon-image-text-1").innerHTML =
        cutepokemon[a][4][0];
      document.getElementById("pokemon-image-text-2").innerHTML =
        cutepokemon[a][4][1];
      scrollallowed = true;
    } else if (cutepokemon[a][3] == 3) {
      //Sets correct page  info if pokemon has 3 evolutions
      document
        .getElementById("pokemon-image-2")
        .setAttribute(
          "src",
          "Resources/Images/Pokemon/Cute/" + pokemon + "/2.png"
        );
      document
        .getElementById("pokemon-image-2")
        .setAttribute("alt", cutepokemon[a][4][1]);
      document.getElementById("pokemon-image-text-2").innerHTML =
        cutepokemon[a][4][1];
      document
        .getElementById("pokemon-image-3")
        .setAttribute(
          "src",
          "Resources/Images/Pokemon/Cute/" + pokemon + "/3.png"
        );
      document
        .getElementById("pokemon-image-3")
        .setAttribute("alt", cutepokemon[a][4][2]);
      document.getElementById("pokemon-image-text-1").innerHTML =
        cutepokemon[a][4][0];
      document.getElementById("pokemon-image-text-2").innerHTML =
        cutepokemon[a][4][1];
      document.getElementById("pokemon-image-text-3").innerHTML =
        cutepokemon[a][4][2];
      scrollallowed = true;
    } else {
      //Sets correct page  info if pokemon has no evolutions
      document.getElementById("pokemon-controls").style.display = "none";
      document.getElementById("pokemon-image-text-1").innerHTML =
        cutepokemon[a][4];
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
      document
        .getElementById("related-pokemon-image-" + (b + 1))
        .setAttribute(
          "src",
          "Resources/Images/Pokemon/Cute/" +
            cutepokemon[bb][0] +
            "/" +
            cutepokemon[bb][5] +
            ".png"
        );
      document
        .getElementById("related-pokemon-image-" + (b + 1))
        .setAttribute("alt", cutepokemon[bb][0]);
      document
        .getElementById("related-pokemon-link-" + (b + 1))
        .setAttribute("href", "pokemon?Pokemon=" + cutepokemon[bb][0]);
      document.getElementById("related-pokemon-" + (b + 1)).innerHTML =
        cutepokemon[bb][0];
      b++;
    }
    //Checks if pokemon is ugly
  } else if (uglypokemon[a][0] == pokemon) {
    var valid = true;
    //Sets more page info based on ugly
    document.getElementById("related-pokemon").innerHTML = "Other Ugly Pokemon";
    document.getElementById("pokemon-info").innerHTML = uglypokemon[a][1];
    document.getElementById("pokemon-stats").innerHTML = uglypokemon[a][2];
    document
      .getElementById("pokemon-image-1")
      .setAttribute(
        "src",
        "Resources/Images/Pokemon/Ugly/" + pokemon + "/1.png"
      );
    document.getElementById("pokemon-image-1").setAttribute("alt", pokemon);
    //Sets the correct slide for the slide show
    //Hides th vot eon poll button if the pokemon is not currently in a poll
    if (!uglypokemon[a][6]) {
      document.getElementById("vote-poll").style.display = "none";
    }
    var slide = uglypokemon[a][5];
    if (uglypokemon[a][3] == 2) {
      //Sets correct page  info if pokemon has 2 evolutions
      document
        .getElementById("pokemon-image-2")
        .setAttribute(
          "src",
          "Resources/Images/Pokemon/Ugly/" + pokemon + "/2.png"
        );
      document
        .getElementById("pokemon-image-2")
        .setAttribute("alt", uglypokemon[a][4][1]);
      document.getElementById("pokemon-image-text-3").innerHTML =
        uglypokemon[a][4][1];
      document.getElementById("image-dots-3").style.display = "none";
      document.getElementById("image-dots-3").className = "unused";
      document.getElementById("slides-3").className = "unused";
      document.getElementById("pokemon-image-text-1").innerHTML =
        uglypokemon[a][4][0];
      document.getElementById("pokemon-image-text-2").innerHTML =
        uglypokemon[a][4][1];
      scrollallowed = true;
    } else if (uglypokemon[a][3] == 3) {
      //Sets correct page  info if pokemon has 3 evolutions
      document
        .getElementById("pokemon-image-2")
        .setAttribute(
          "src",
          "Resources/Images/Pokemon/Ugly/" + pokemon + "/2.png"
        );
      document
        .getElementById("pokemon-image-2")
        .setAttribute("alt", uglypokemon[a][4][1]);
      document.getElementById("pokemon-image-text-2").innerHTML =
        uglypokemon[a][4][1];
      document
        .getElementById("pokemon-image-3")
        .setAttribute(
          "src",
          "Resources/Images/Pokemon/Ugly/" + pokemon + "/3.png"
        );
      document
        .getElementById("pokemon-image-3")
        .setAttribute("alt", uglypokemon[a][4][2]);
      document.getElementById("pokemon-image-text-1").innerHTML =
        uglypokemon[a][4][0];
      document.getElementById("pokemon-image-text-2").innerHTML =
        uglypokemon[a][4][1];
      document.getElementById("pokemon-image-text-3").innerHTML =
        uglypokemon[a][4][2];
      scrollallowed = true;
    } else {
      //Sets correct page  info if pokemon has no evolutions
      document.getElementById("pokemon-controls").style.display = "none";
      document.getElementById("pokemon-image-text-1").innerHTML =
        uglypokemon[a][4];
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
      document
        .getElementById("related-pokemon-image-" + (c + 1))
        .setAttribute(
          "src",
          "Resources/Images/Pokemon/Ugly/" +
            uglypokemon[cc][0] +
            "/" +
            uglypokemon[cc][5] +
            ".png"
        );
      document
        .getElementById("related-pokemon-image-" + (c + 1))
        .setAttribute("alt", uglypokemon[cc][0]);
      document
        .getElementById("related-pokemon-link-" + (c + 1))
        .setAttribute("href", "pokemon?Pokemon=" + uglypokemon[cc][0]);
      document.getElementById("related-pokemon-" + (c + 1)).innerHTML =
        uglypokemon[cc][0];
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
  document
    .getElementById(pokemon + "-link")
    .setAttribute("href", "javascript: void(0)");
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
  if (getStorage("ImageScroll") == "Enabled" && scrollallowed) {
    //If on wait 2s then change slide by 1
    setTimeout(function () {
      showSlides((slide += 1));
    }, 2000);
  }
}
