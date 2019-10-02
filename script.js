// User 1
// var hero = document.getElementById('hero');
// var moveSize = 50;
// var parentRect = document.getElementById('board').getBoundingClientRect();
// var childRect;
//
// // Handle arrows to move the token
//
// <style>
// #hero {
//   position: absolute;
//   left:
// }
//
// </style>
//
// // position aleatoire du hero
// <script type="text/javascript">
// function RandomPlace(){
// var mintop=10
// var maxtop=450
// var minleft=100
// var maxleft=700
// tabdiv=document.getElementsByTagName('div')
// var i=0;
// //while (tabdiv[i++]){
// 	tabdiv.style.top=mintop+Math.floor(Math.random()*(maxtop-mintop))+'px';
// 	//tabdiv[i-1].style.left=minleft+Math.floor(Math.random()*(maxleft-minleft))+'px';
// 	//tabdiv[i-1].style.zIndex=i//
// 	}
// }
// </script>
// <style type="text/css">
// html, body {height:100%; width:100%;}
// body{margin:0;
// padding:0;}
// div {position:absolute;
//       width:20px;
//       height:20px;
//       }
// #one {background-color:red;}
//
// </style>
//
//
// document.addEventListener('keydown', function(event) {
//   childRect = document.getElementById('hero').getBoundingClientRect();
//
//   if (event.code == 'ArrowUp') {
//     if(childRect.top > parentRect.top)
//       hero.style.top = (hero.offsetTop - moveSize)+"px";
//   }
//   else if (event.code == 'ArrowRight') {
//     if(childRect.right < parentRect.right)
//       hero.style.left = (hero.offsetLeft + moveSize)+"px";
//   }
//   else if (event.code == 'ArrowDown') {
//     if(childRect.bottom < parentRect.bottom)
//       hero.style.top = (hero.offsetTop + moveSize)+"px";
//   }
//   else if (event.code == 'ArrowLeft') {
//     if(childRect.left > parentRect.left)
//       hero.style.left = (hero.offsetLeft - moveSize)+"px";
//   }
// });

// User 2

// -------- Initiate table of cases ------ //
var maxX = 18;
var maxY = 13;
var caseSize = 50;
var nbMonsters = 2;
var bombs = new Array();
var cases = new Array(maxX+1);

for (var i = 0; i <= maxX; i++) {
    cases[i] = new Array(maxY);
}
for(var posX=1 ; posX<=maxX ; posX++){
  for(var posY=1 ; posY<=maxY ; posY++){
    cases[posX][posY] = 0;
  }
}



// Monster
var monsters = new Array(nbMonsters);
monsters[0] = new Monster(1,1,document.getElementById('monster'),0);
monsters[1] = new Monster(10,1,document.getElementById('monster2'),0);

// Actions every second
var myVar = setInterval(actions, 1000);

function pauseGame(){
  clearInterval(myVar);
}

// Handle automatics actions
function actions(){
  // bombs timers
  handleBombs();

  // monster actions
  monsters.forEach(function(monster, index, object) {
    monster.selectDirection();
  });
}


// Animate movement of a character
function animateMovement(character, type, pos){
  if(type == 1){
    var basePos = character.getOffsetLeft();
    var typeMovement = ((basePos < pos)?+2:-2);
    var tmpInterval = setInterval(frameX, 10);
  }
  else {
    var basePos = character.getOffsetTop();
    var typeMovement = ((basePos < pos)?+2:-2);
    var tmpInterval = setInterval(frameY, 10);
  }

  function frameX() {
    if (basePos == pos) {
      clearInterval(tmpInterval);
    } else {
      basePos += typeMovement;
      character.setLeft(basePos);
    }
  }
  function frameY() {
    if (basePos == pos) {
      clearInterval(tmpInterval);
    } else {
      basePos += typeMovement;
      character.setTop(basePos);
    }
  }
}


// Drop a bomb on the floor
function dropBomb(posX, posY, character){
  if(cases[posX][posY] == 0){
    bombs.push(new Bomb(posX,posY,3));
    character.setTimeBomb();
    cases[posX][posY] = 2;
  }
}

// Handle bombs timers and explosions
function handleBombs(){
  bombs.forEach(function(bomb, index, object) {
    bomb.time--;

    // Explose
    if(bomb.time == 0){
      bombs.splice(index,1);
    }
  });
}

// ========================= Script terrain =====================
