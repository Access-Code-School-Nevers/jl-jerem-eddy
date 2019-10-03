
var maxX = 11;
var maxY = 19;
var caseSize = 50;
var nbMonsters = 2;
var bombs = new Array();
var cases = new Array(maxX+1);
var timeAction = 400;

for (var i = 0; i <= maxX; i++) {
  cases[i] = new Array(maxY);
}

function carte (parentElementId, childElementTagName, column, row)
{
  // condition de verification en 2 étape
  if (String(parentElementId) && String(childElementTagName) && parseInt(column) && parseInt(row) != '')
  {
    if (column%2 && row%2 == 0)
    {
      column = 19;
      row = 19;
    }

    let nColumn = column + 1;
    let nTuile = column * row;
    // variable qui va contenir des element du DOM
    let parentElement = document.getElementById(parentElementId);
    let childElement = '';
    let appendChildElement = '';
    let allDiv = '';
    let divGridItem = '';
    // variable qui contient les position x et y
    let posx = '';
    let posy = '';
    let tabIdSplit = '';
    // compteur qui permet de déterminer la ligne (count) ou la colonne (count2)
    let count = 1;
    let count2 = 1;

    parentElement.className='grid-container';
    parentElement.setAttribute("style", "grid-template-columns: repeat("+column+", 50px);");

    for(let i = 0;i<nTuile;i++)
    {

      if (count == nColumn)
      {
        count=1;
        count2++;
      }

      childElement = document.createElement(childElementTagName);
      childElement.className='grid-item';
      childElement.setAttribute("style", "color: white;");
      childElement.style.width = "50px;";
      childElement.style.height = "50px;";
      childElement.style.background = "url('img/herbe.png');";
      childElement.setAttribute("id", count2+'y'+count);
      appendChildElement = parentElement.appendChild(childElement);
      appendChildElement.innerHTML = 'x'+count2+'-y'+count;
      count++
    }
    // recupération de tous les élément html créer prècédement
    allDiv = document.getElementsByClassName('grid-item');

    // boucle qui determine que seront les bloc sur la carte
    for (var i = 0; i < allDiv.length; i++) {
      tabIdSplit = allDiv[i].id.split('y');
      posx = tabIdSplit[0];
      posy = tabIdSplit[1];
      if (tabIdSplit[0] == 1 || tabIdSplit[0] == row || tabIdSplit[1] == 1 || tabIdSplit[1] == column) {

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
        if (posx == 2 && posy == 2 || posx == 2 && posy == 3 || posx == 3 && posy == 2 || posx == row-1 && posy == column-1 || posx == row-1 && posy == column-2 || posx == row-2 && posy == column-1) {
          cases[posx][posy] = 0;
        }
        else
        {
          if(Math.floor(Math.random() * 2) == 1){
            cases[posx][posy] = 4;
            divGridItem = document.getElementById(posx+'y'+posy);
            divGridItem.classList.add('brique');
          }
          else{
            cases[posx][posy] = 0;
          }
        }
      }
    }
  }
  else
  {
    return console.log('Problème de paramètre ! vérifié que vos paramètre soit pas vide. 1. type: String, ID du conteneur. 2. type: String, balise html qui servira de cellule. 3. type: INT, nombre de colonne, nombre impaire. 4. type: INT, nombre de rangée, nombre impaire.');
  }
}

carte('gridContainer','div',maxY,maxX);
