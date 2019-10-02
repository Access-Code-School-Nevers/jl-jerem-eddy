// User 1

// User 2

// -------- Initiate table of cases ------ //
var maxX = 19;
var maxY = 11;
var caseSize = 40;
var nbMonsters = 2;
var bombs = new Array();
var cases = new Array(maxX+1);

for (var i = 0; i <= maxX; i++) {
    cases[i] = new Array(maxY);
}
// console.table(cases);
// for(var posX=1 ; posX<=maxX ; posX++){
//   for(var posY=1 ; posY<=maxY ; posY++){
//     cases[posX][posY] = 0;
//   }
// }
//
// // Monster
// var monsters = new Array(nbMonsters);
// monsters[0] = new Monster(1,1,document.getElementById('monster'),0);
// monsters[1] = new Monster(10,1,document.getElementById('monster2'),0);
//
// // Actions every second
// var myVar = setInterval(actions, 1000);
//
// function pauseGame(){
//   clearInterval(myVar);
// }
//
// // Handle automatics actions
// function actions(){
//   // bombs timers
//   handleBombs();
//
//   // monster actions
//   monsters.forEach(function(monster, index, object) {
//     monster.selectDirection();
//   });
// }
//
//
// // Animate movement of a character
// function animateMovement(character, type, pos){
//   if(type == 1){
//     var basePos = character.getOffsetLeft();
//     var typeMovement = ((basePos < pos)?+2:-2);
//     var tmpInterval = setInterval(frameX, 10);
//   }
//   else {
//     var basePos = character.getOffsetTop();
//     var typeMovement = ((basePos < pos)?+2:-2);
//     var tmpInterval = setInterval(frameY, 10);
//   }
//
//   function frameX() {
//     if (basePos == pos) {
//       clearInterval(tmpInterval);
//     } else {
//       basePos += typeMovement;
//       character.setLeft(basePos);
//     }
//   }
//   function frameY() {
//     if (basePos == pos) {
//       clearInterval(tmpInterval);
//     } else {
//       basePos += typeMovement;
//       character.setTop(basePos);
//     }
//   }
// }
//
//
// // Drop a bomb on the floor
// // function dropBomb(posX, posY, character){
// //   if(cases[posX][posY].getType() == 0){
// //     bombs.push({time:3, x:posX, y:posY});
// //     boms.push(new Bomb())
// //     character.setTimeBomb();
// //     cases[posX][posY].setType(2);
// //   }
// // }
//
// // Handle bombs timers and explosions
// function handleBombs(){
//   bombs.forEach(function(bomb, index, object) {
//     bomb.time--;
//
//     // Explose
//     if(bomb.time == 0){
//       bombs.splice(index,1);
//     }
//   });
// }

// ========================= Script terrain =====================
function carte (parentElementId, childElement, column, row)
{

  this.parentElementId = parentElementId;
  this.childElement = childElement;
  this.column = column;
  this.row = row;

  let nColumn = this.column + 1;
  let nTuile = this.column * this.row;
  let parentElement = document.getElementById(this.parentElementId);
  let posx = '';
  let posy = '';
  let test = '';
  let divGridItem = '';

  parentElement.className='grid-container';
  // parentElement.setAttribute("style", "display: grid;");
  // parentElement.style.gridTemplateColumns = "repeat(19, 50px);";

  let count = 1;
  let count2 = 1;
  for(let i = 0;i<nTuile;i++)
  {

    if (count == nColumn)
    {
      count=1;
      count2++;
    }

    let childElement = document.createElement(this.childElement);
    childElement.className='grid-item';
    childElement.setAttribute("style", "color: red;");
    childElement.style.width = "50px;";
    childElement.style.height = "50px;";
    childElement.style.background = "url('img/herbe.png');";
    childElement.setAttribute("id", count2+'y'+count);
    var appendChildElement = parentElement.appendChild(childElement);
    appendChildElement.innerHTML = i;
    count++
  }
  let allDiv = document.getElementsByClassName('grid-item');

  for (var i = 0; i < allDiv.length; i++) {
    test = allDiv[i].id.split('y');
    posx = test[0];
    posy = test[1];
    if (test[0] == 1 || test[0] == this.row || test[1] == 1 || test[1] == this.column) {

      cases[posx][posy] = 1;
      divGridItem = document.getElementById(posx+'y'+posy);
      divGridItem.classList.add('tuileIndestructible');
    }
    else if (posx%2 == 1 && posy%2 == 1)
    {
      cases[posx][posy] = 1;
      divGridItem = document.getElementById(posx+'y'+posy);
      divGridItem.classList.add('tuileIndestructible');
    }
    else
    {
      cases[posx][posy] = 0;
    }

  }

console.log(4%2);

  }


console.table(cases);
carte('gridContainer','div',19,13);
