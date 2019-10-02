// -------- Initiate table of cases ------ //
var maxX = 18;
var maxY = 13;
var caseSize = 50;
var nbMonsters = 2;
var bombs = new Array();
var cases = new Array(maxX+1);
var timeAction = 400;



for (var i = 0; i <= maxX; i++) {
    cases[i] = new Array(maxY);
}
for(var posX=1 ; posX<=maxX ; posX++){
  for(var posY=1 ; posY<=maxY ; posY++){
    cases[posX][posY] = 0;
  }
}



// Hero
var hero = new Hero(1,1,document.getElementById('hero'),0,timeAction,0);


// Handle character moves
document.addEventListener('keydown', function(event) {
  if(hero.getMoving() == 0){
    var position = 0;

    if (event.code == 'ArrowUp') {
      if(hero.getPosY() > 1 && cases[hero.getPosX()][hero.getPosY() - 1] != undefined && cases[hero.getPosX()][hero.getPosY() - 1] == 0)
        position = 1;
    }
    else if (event.code == 'ArrowRight') {
      if(hero.getPosX() < maxX && cases[hero.getPosX() + 1] != undefined && cases[hero.getPosX() + 1][hero.getPosY()] != undefined && cases[hero.getPosX() + 1][hero.getPosY()] == 0)
        position = 2;
    }
    else if (event.code == 'ArrowDown') {
      if(hero.getPosY() < maxY && cases[hero.getPosX()][hero.getPosY() + 1] != undefined && cases[hero.getPosX()][hero.getPosY() + 1] == 0)
        position = 3;
    }
    else if (event.code == 'ArrowLeft') {
      if(hero.getPosX() > 1 && cases[hero.getPosX() - 1] != undefined && cases[hero.getPosX() - 1][hero.getPosY()] != undefined && cases[hero.getPosX() - 1][hero.getPosY()] == 0)
        position = 4;
    }

    hero.direction(position);
  }
});



// Monster
var monsters = new Array(nbMonsters);
// monsters[0] = new Monster(1,1,document.getElementById('monster'),0,timeAction);



// Animate movement of a character
function animate(elem,style,unit,from,to,time) {
    if( !elem) return;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) clearInterval(timer);
        },25);
    elem.style[style] = from+unit;
}


// Drop a bomb on the floor
function dropBomb(posX, posY, character){
  if(cases[posX][posY] == 0){
    // Add a bomb to explode
    bombs.push(new Bomb(posX,posY));

    character.setTimeBomb(character);
    cases[posX][posY] = 2;
  }
}
