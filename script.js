// -------- Initiate table of cases ------ //

// Hero
var hero = new Hero(2,2,document.getElementById('hero'),0,timeAction,0);
hero.setLeft(hero.getEl().offsetWidth * (hero.getPosX() - 1));
hero.setTop(hero.getEl().offsetWidth * (hero.getPosY() - 1));


// Handle character moves
document.addEventListener('keydown', function(event) {
  if(hero.getMoving() == 0){
    var position = 0;

    if (event.code == 'ArrowUp') {
      if(hero.getPosX() > 1 && cases[hero.getPosX() - 1] != undefined && cases[hero.getPosX() - 1][hero.getPosY()] != undefined && cases[hero.getPosX() - 1][hero.getPosY()] == 0)
        position = 1;
    }
    else if (event.code == 'ArrowRight') {
      if(hero.getPosY() < maxY && cases[hero.getPosX()][hero.getPosY() + 1] != undefined && cases[hero.getPosX()][hero.getPosY() + 1] == 0)
        position = 2;
    }
    else if (event.code == 'ArrowDown') {
      if(hero.getPosX() < maxX && cases[hero.getPosX() + 1] != undefined && cases[hero.getPosX() + 1][hero.getPosY()] != undefined && cases[hero.getPosX() + 1][hero.getPosY()] == 0)
        position = 3;
    }
    else if (event.code == 'ArrowLeft') {
      if(hero.getPosY() > 1 && cases[hero.getPosX()][hero.getPosY() - 1] != undefined && cases[hero.getPosX()][hero.getPosY() - 1] == 0)
        position = 4;
    }

    hero.direction(position);
  }
});



// Monster
var monsters = new Array(nbMonsters);
monsters[0] = new Monster(10,18,document.getElementById('monster'),0,timeAction);



// Animate movement of a character
function animate(elem,style,unit,from,to,time) {
    if( !elem) return;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);

            elem.style[style] = (from+step*(to-from))+unit;

            if( step == 1){
              clearInterval(timer);
            }
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





// ========================= Script terrain =====================
<<<<<<< HEAD
=======
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
  parentElement.setAttribute("style", "grid-template-columns: repeat("+column+", 50px);");
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
    // appendChildElement.innerHTML = i;
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
}
>>>>>>> adc70ec899b9475f077f333a195785b233876a2f
