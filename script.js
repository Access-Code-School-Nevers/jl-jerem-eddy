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
      if(cases[hero.getPosX() - 1][hero.getPosY()] == 0 || cases[hero.getPosX() - 1][hero.getPosY()] == 5)
        position = 1;
    }
    else if (event.code == 'ArrowRight') {
      if(cases[hero.getPosX()][hero.getPosY() + 1] == 0 || cases[hero.getPosX()][hero.getPosY() + 1] == 5)
        position = 2;
    }
    else if (event.code == 'ArrowDown') {
      if(cases[hero.getPosX() + 1][hero.getPosY()] == 0 || cases[hero.getPosX() + 1][hero.getPosY()] == 5)
        position = 3;
    }
    else if (event.code == 'ArrowLeft') {
      if(cases[hero.getPosX()][hero.getPosY() - 1] == 0 || cases[hero.getPosX()][hero.getPosY() - 1] == 5)
        position = 4;
    }
    else if (event.code == 'Space') {
      dropBomb(hero.getPosX(), hero.getPosY(), hero);

      if(cases[hero.getPosX()- 1][hero.getPosY()] == 0)
        cases[hero.getPosX() - 1][hero.getPosY()] = 5;
      if(cases[hero.getPosX()][hero.getPosY() + 1] == 0)
        cases[hero.getPosX()][hero.getPosY() + 1] = 5;
      if(cases[hero.getPosX() + 1][hero.getPosY()] == 0)
        cases[hero.getPosX() + 1][hero.getPosY()] = 5;
      if(cases[hero.getPosX()][hero.getPosY() - 1] == 0)
        cases[hero.getPosX()][hero.getPosY() - 1] = 5;

    }

    if(position != 0)
      hero.direction(position);
  }
});



// Monster
var monsters = new Array(nbMonsters);
monsters[0] = new Monster(10,18,document.getElementById('monster0'),0,timeAction);



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
  if(cases[posX][posY] == 0 || cases[posX][posY] == 3){
    // Add a bomb to explode
    bombs.push(new Bomb(posX,posY));
    var value = bombs.length - 1;

    setTimeout(function(){
      bombs[value].explosion();
      bombs[value] = null;

      createBombExplosion('img/explosionCenter.png','bomb',posX,posY);

      if(cases[posX - 1][posY] != 1)
        createBombExplosion('img/explosionTop.png','bomb',(posX-1),posY);
      if(cases[posX][posY + 1] != 1)
        createBombExplosion('img/explosionRight.png','bomb',posX,(posY + 1));
      if(cases[posX + 1][posY] != 1)
        createBombExplosion('img/explosionBottom.png','bomb',(posX + 1),posY);
      if(cases[posX][posY - 1] != 1)
        createBombExplosion('img/explosionLeft.png','bomb',posX,(posY - 1));

    }, 2000);

    character.setTimeBomb(character);
    cases[posX][posY] = 2;
  }
}


// Add Image
function createBombExplosion(link,classImg,posX,posY){
  var img = document.createElement("img");
  img.src = link;
  img.classList.add(classImg);
  img.style.left = (caseSize * (posY - 1));
  img.style.top = (caseSize * (posX - 1));

  var src = document.getElementById("gridContainer");
  src.appendChild(img);

  if(cases[posX][posY] == 4){
    document.getElementById(posX+'y'+posY).classList.remove('brique');
  }
  else if(cases[posX][posY] == 3 || cases[posX][posY] == 5){
    if(hero.getPosX() == posX && hero.getPosY() == posY){
      changeTextModal("Défaite !");
      openModal();
    }
    else{
      monsters.forEach(function(monster, index){
        if(monster.getPosX() == posX && monster.getPosY() == posY){
          monster.clearTimeout();
          monster = null;
          nbMonsters--;
          document.getElementById('monster'+index).remove();

          if(nbMonsters == 0){
            changeTextModal("Victoire !");
            openModal();
          }
        }
      });
    }
  }

  cases[posX][posY] = 0;

  setTimeout(function(){
    img.remove();
  },600);
}
<<<<<<< HEAD




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
>>>>>>> cee868b042b5b95565929dc4bb46ff412ec8bc4a
=======
>>>>>>> 61982c57e22f7de011f0de1deae4561e51b2f86e
