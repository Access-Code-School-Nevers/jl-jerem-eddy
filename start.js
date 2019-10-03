var maxX = 11;
var maxY = 19;
var caseSize = 50;
var nbMonsters = 0;
var bombs = new Array();
var cases = new Array(maxX+1);
var timeAction = 400;
var hero;
var monsters;

for (var i = 0; i <= maxX; i++) {
    cases[i] = new Array(maxY);
}

var tabPosMonster = [
  [10,18],
  [11,18]
];

// start/restart the game
function startGame(){
  carte('gridContainer','div',maxY,maxX);

  // Hero
  createHero(2,2);
  hero = new Hero(2,2,document.getElementById('hero'),0,timeAction,0);
  hero.setLeft(hero.getEl().offsetWidth * (hero.getPosX() - 1));
  hero.setTop(hero.getEl().offsetWidth * (hero.getPosY() - 1));

  // Monster
  monsters = new Array(nbMonsters);
  for(var i=0, v=document.getElementById('numberMonsters').value ; i<v ; i++){
    createMonster(tabPosMonster[0][0],tabPosMonster[0][1],i);
    monsters[i] = new Monster(tabPosMonster[0][0],tabPosMonster[0][1],document.getElementById('monster'+i),0,timeAction);
  }

  closeModal();
}

// Add Hero on the floor
function createHero(x,y){
  var el = document.createElement("div");
  el.classList.add("unit");
  el.id = "hero";
  el.style.left = (caseSize * (y - 1));
  el.style.top = (caseSize * (x - 1));

  var src = document.getElementById("containerUnit");
  src.appendChild(el);
}

// Add Hero on the floor
function createMonster(x,y,nb){
  var el = document.createElement("div");
  el.classList.add("unit");
  el.id = "monster"+nb;
  el.style.left = (caseSize * (y - 1));
  el.style.top = (caseSize * (x - 1));

  var src = document.getElementById("containerUnit");
  src.appendChild(el);
}
