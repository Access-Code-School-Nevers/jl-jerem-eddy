// const tuile = {
//   solide: true,
//   image: '',
//   destructible: false,
// };
var tuile = new Object();
tuile.solide = true;
tuile.destructible = false;
// const murSolide = Object.create(tuile);
// const terrain = Object.create(tuile, {solide: {value: false}});
// const murCassable = Object.create(tuile, {destructible: {value: true}});

// let body = window.document.body;
// body.insertAdjacentHTML("afterend", "<div class='grid-container'></div>");
//
// while (window.document.body.div <= 210) {
//   let gridContainer = document.getElementsByClassName('grid-container');
//   gridContainer.insertAdjacentHTML("afterend", "<div class='grid-item'></div>");
// }
let mur = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,38,57,76,95,114,133,152,171,90,209,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,190,37,56,75,94,113,132,151,170,189,208,227,246,40,42,44,46,48,50,52,54,78,80,82,86,88,90,92,84,116,118,120,122,124,126,128,130,154,156,158,160,162,164,166,168,192,194,196,198,200,202,204,206];

let grid = [];
let childElement;
let parentElement;
grid.push (tuile);
parentElement = document.getElementById('gridContainer');

for(let i = 0;i<247;i++)
{
  childElement = document.createElement('div');
  childElement.className='grid-item';
  childElement.setAttribute("id", i);
  var appendChildElement = parentElement.appendChild(childElement);
  appendChildElement.innerHTML = i;
  var divId = document.getElementById(i).getAttribute('id');
  console.log(divId);
  for(let a = 0;a<mur.length;a++)
  {
    let test = mur[a];

    if (divId == test)
    {
      childElement.classList.add('tuileIndestructible');
    }
  }
  if
}
