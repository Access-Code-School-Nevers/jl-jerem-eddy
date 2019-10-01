// User 1
var hero = document.getElementById('hero');
var moveSize = 50;
var parentRect = document.getElementById('board').getBoundingClientRect();
var childRect;

// Handle arrows to move the token

<style>
#hero {
  position: absolute;
  left:
}

</style>

// position aleatoire du hero
<script type="text/javascript">
function RandomPlace(){
var mintop=10
var maxtop=450
var minleft=100
var maxleft=700
tabdiv=document.getElementsByTagName('div')
var i=0;
//while (tabdiv[i++]){
	tabdiv.style.top=mintop+Math.floor(Math.random()*(maxtop-mintop))+'px';
	//tabdiv[i-1].style.left=minleft+Math.floor(Math.random()*(maxleft-minleft))+'px';
	//tabdiv[i-1].style.zIndex=i//
	}
}
</script>
<style type="text/css">
html, body {height:100%; width:100%;}
body{margin:0;
padding:0;}
div {position:absolute;
      width:20px;
      height:20px;
      }
#one {background-color:red;}

</style>


document.addEventListener('keydown', function(event) {
  childRect = document.getElementById('hero').getBoundingClientRect();

  if (event.code == 'ArrowUp') {
    if(childRect.top > parentRect.top)
      hero.style.top = (hero.offsetTop - moveSize)+"px";
  }
  else if (event.code == 'ArrowRight') {
    if(childRect.right < parentRect.right)
      hero.style.left = (hero.offsetLeft + moveSize)+"px";
  }
  else if (event.code == 'ArrowDown') {
    if(childRect.bottom < parentRect.bottom)
      hero.style.top = (hero.offsetTop + moveSize)+"px";
  }
  else if (event.code == 'ArrowLeft') {
    if(childRect.left > parentRect.left)
      hero.style.left = (hero.offsetLeft - moveSize)+"px";
  }
});

// User 2
