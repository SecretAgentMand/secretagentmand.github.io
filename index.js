(function () {
  if ( typeof NodeList.prototype.forEach === "function" ) return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();

var button = document.getElementById("genCard");
var theCard = document.getElementById("theCard");
var bingoSync = document.getElementById("bingosync");

var goals = [
  {"name": "Kill all 3 enemies in a sprite family"},
  {"name": "Kill all spike tiles with a Club"},
  {"name": "Revenge kill a monster (same zone, same mob) using Hurtmore"},
  {"name": "Die to a Poltergeist"},
  {"name": "Lose 650+ Gold to a Goldman"},
  {"name": "Sleep a Druinlord"},
  {"name": "Sleep an Axe Knight"},
  {"name": "Get ejected from Tantagel while cursed"},
  {"name": "Go through every staircase in Grave"},
  {"name": "Get uncursed in Brecconary"},
  {"name": "Use a Torch on every non-Charlock dark cave floor"},
  {"name": "Curse Princess Gwaelin"},
  {"name": "Refuse the Fairy Flute"},
  {"name": "Unequip the Fighter's Ring"},
  {"name": "Get all chest in Mountain starting with 5 and ending with 1"},
  {"name": "See all four coasts"},
  {"name": "Buy a Key in Rim, sell a Key in Garinham"},
  {"name": "Dive Tablet Blind without Outside/reset"},
  {"name": "Check all Charlock chests"},
  {"name": "Run 5 laps around the Dragon Lord's throne"},
  {"name": "Make an enemy successfully cast Heal/Healmore 5 times"},
  {"name": "Never use an Herb"},
  {"name": "Don't cast Repel or use Fairy Water out of battle"},
  {"name": "Sell the Death Necklace"},
  {"name": "Sell a Cursed Belt"},
  {"name": "Say NO to Gwaelin 15 times"},
  {"name": "Open all doors in Charlock"},
  {"name": "Activate infinite chest glitch"},
  {"name": "Reach Level 17"},
  {"name": "Have 8k Gold"},
  {"name": "Get kicked out of Jerk cave"},
  {"name": "Die to the Swamp spike while holding Princess Gwaelin"},
  {"name": "Search behind Wyn's counter"},
  {"name": "No Heal/Healmore out of battle"},
  {"name": "Stay at every inn with Princess Gwaelin"},
  [{"name": "Run from a Red Dragon"},
  {"name": "Kill a Red Dragon without using Healmore"}],
  [{"name": "Hurtmore a Wizard"},
  {"name": "Sleep a Wizard"}],
  [{"name": "Kill a Demon Knight with only Torches"},
  {"name": "Hurtmore a Demon Knight"}],
  [{"name": "Kill an Armored Knight with only Hurt"},
  {"name": "Run from an Armored Knight"}],
  [{"name": "One-shot a Knight in melee"},
  {"name": "Kill an Knight with only Torches"}],
  [{"name": "Kill a Metal Slime without swinging"},
  {"name": "Run from a Metal Slime"}],
  [{"name": "Successfully use Sleep on a Golem"},
  {"name": "Kill a Golem without using Healmore"}],
  [{"name": "Sell Erdrick's Armor"},
  {"name": "Sell Erdrick's Sword"}],
  [{"name": "Take Princess Gwaelin to the Dragonlord"},
  {"name": "Buy radishes with Princess Gwaelin in Cantlin"},
  {"name": "Take Princess Gwaelin to dying soldier in Brecconary"},
  {"name": "Take Princess Gwaelin to the Puff Puff woman in Kol"},
  {"name": "Take Princess Gwaelin to 'I hate people' woman in Garinham"},
  {"name": "Take Princess Gwaelin to jealous soldier in Tantagel"},
  {"name": "Take Princess Gwaelin to separated couple in Rim"}],
  [{"name": "DN spot grind 15,000 gold"},
  {"name": "DN spot grind 10,000 gold"}],
  [{"name": "Accept Dragon Lord's Offer"},
  {"name": "Say YES then NO to the Dragon Lord"}],
  [{"name": "Play the Silver Harp for a Knight"},
  {"name": "Kill a Skeleton with Half or Full Plate equipped"},
  {"name": "Kill a Droll with Chain Mail equipped"},
  {"name": "Kill a Slime with Bamboo Pole equipped"},
  {"name": "Kill a Magidrakee with Copper, Flame, or Erdrick's Sword equipped"},
  {"name": "Attempt to light up a Wraith with the Stones of Sunlight"},
  {"name": "Kill a Wolf with a shield equipped"},
  {"name": "Kill a Warlock with Leather, Magic Armor, or Erdrick's Armor equipped"}],
  [{"name": "Kill a Dragon with a Bamboo Pole"},
  {"name": "Play the Silver Harp for a Dragon"}]
];

// randomize JSON object
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var generateCard = function(){
  // Used like so
  goals = shuffle(goals);


  var goals2 = goals.slice(0, 25);

  theCard.innerHTML = '';
  bingosync.value = '';
   
  goals2.forEach(
    function(goal) {
      theCard.innerHTML += '<h4><span>' + goal.name + '</span></h4>';
  });

  var goals2JSON = JSON.stringify(goals2);
  bingosync.value = goals2JSON;
  
  var h4Els = document.querySelectorAll('h4');

  var addSelect = function(goal) {
      goal.addEventListener("click", function() {
        if(goal.className == "selected"){
          goal.className = ""
        }
        else (goal.className = "selected")
      });}

  h4Els.forEach( addSelect );
};

generateCard();
button.addEventListener("click",generateCard);

//copy bingosync code

function copy() {
  bingoSync.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);