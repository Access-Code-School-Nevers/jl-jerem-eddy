class Bomb{
  constructor(posX, posY) {
      this.posX = posX;
      this.posY = posY;

      this.setExplosion(this);
  }

  // Explosion in 3 sec
  setExplosion(el){
    // console.log('bombe posée');
    setTimeout(function(){ el.explosion(); }, 3000);
  }

  // Explosion
  explosion(){
    // console.log('destruction');
    cases[this.posX][this.posY] = 0;
  }
}
