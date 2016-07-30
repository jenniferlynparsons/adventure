var random = function(x){
    return Math.round(Math.random() * x);
};

var scenarios = [
  "<p>You're walking to the local grocery store because your supplies have run out at home. Hopefully there's something left to scavenge.</p><button id='zombie'>Continue</button>",
  "<p>You're returning from a scavenging mission and you found a real treat! A candy bar, still fresh enough to eat.</p><button id='zombie'>Continue</button>",
  "<p>The last of your companions hasn't returned from their foray out for food. You're out looking for them.</p><button id='zombie'>Continue</button>"
];

var weapons = ["axe","crowbar","baseball bat"];

var gameframe = document.getElementById('gameframe');

var reset = function(){
    gameframe.innerHTML = scenarios[random(scenarios.length - 1)];
    document.getElementById('zombie').onclick = zombieclick;
};

var zombieclick = function(){
  gameframe.innerHTML = "<p>Oh no! You thought you were alone, but here comes a zombie!</p><button id='weapon'>Grab a weapon!</button>";
  document.getElementById('weapon').onclick = chooseweaponclick;
};

var chooseweaponclick = function(){
  var chosen = weapons[random(weapons.length - 1)];
  gameframe.innerHTML = "<p>You grab a "+chosen+"</p><button id='swing'>Swing it at the zombie!</button>";
  document.getElementById('swing').onclick = swingclick;
};

var swingclick = function(){
  var weaponswing = random(2);
  if(weaponswing === 1){
    gameframe.innerHTML = "<p>You miss the zombie's head. It is currently munching on your brains.</p><button id='replay'>Play again?</button>";
  }else{
    gameframe.innerHTML = "<p>You defeated the zombie! It's head goes flying and you can continue on your way.</p><button id='replay'>Play again?</button>";
  }
  document.getElementById('replay').onclick = reset;
};


if(gameframe.children.length === 0){
  gameframe.innerHTML = scenarios[random(scenarios.length - 1)];
};

document.getElementById('zombie').onclick = zombieclick;
