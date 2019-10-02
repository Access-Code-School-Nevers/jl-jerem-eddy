
var maxX = 19;
var maxY = 11;
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
  if (String(parentElementId) && String(childElementTagName) && parseInt(column) && parseInt(row) != '')
  {
    if (column%2 && row%2 == 0)
    {
      column = 19;
      row = 19;
    }



    let nColumn = column + 1;
    let nTuile = column * row;
    let parentElement = document.getElementById(parentElementId);
    let childElement = '';
    let divGridItem = '';
    let allDiv = '';
    let posx = '';
    let posy = '';
    let allDivId = '';
    let count = 1;
    let count2 = 1;


    parentElement.className='grid-container';
    parentElement.setAttribute("style", "grid-template-columns: repeat("+column+", 50px);");
    // parentElement.style.gridTemplateColumns = "repeat(19, 50px);";


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
      parentElement.appendChild(childElement);
      count++
    }
    allDiv = document.getElementsByClassName('grid-item');

    for (var i = 0; i < allDiv.length; i++) {
      allDivId = allDiv[i].id.split('y');
      posx = allDivId[0];
      posy = allDivId[1];
      if (allDivId[0] == 1 || allDivId[0] == row || allDivId[1] == 1 || allDivId[1] == column) {

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

          if(Math.random() < 0.7)
          {
            cases[posx][posy] = 4;
            divGridItem = document.getElementById(posx+'y'+posy);
            divGridItem.classList.add('brique');
          }
          else
          {
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

carte('gridContainer','div',19,'13');
