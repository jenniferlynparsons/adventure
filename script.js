// Zombie Apocalypse!
//
// Let's create a text adventure game with JavaScript. Let's set a scenario in which we encounter a zombie, choose a weapon to fight the zombie with, and have a 50/50 chance of either defeating the zombie with our weapon, or getting bitten and losing the game.

alert("The world has ended as we know it. The zombies have taken over and you're on your own. You're trying to get to the local grocery store when you encounter one of the undead. Time to grab a weapon!");
var weapon = prompt("Which weapon do you have with you? Is it a baseball bat, an axe, or a crowbar?");

var random = Math.round(Math.random() * 2);

if(random === 1){
  alert("You swing the "+weapon+" at the zombie and take its head off. You live to fight another day!");
}else{
  alert("You swing the "+weapon+" at the zombie, but you miss its head. It grabs you and is currently feasting on your brains.")
}
