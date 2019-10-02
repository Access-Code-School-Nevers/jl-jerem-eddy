class Hero{
  constructor(posX, posY, el, timeBomb, speed, moving) {
      this.posX = posX;
      this.posY = posY;
      this.el = el;
      this.timeBomb = timeBomb;
      this.speed = speed;
      this.moving = moving;
  }

  getPosX() {
      return this.posX;
  }
  getPosY() {
      return this.posY;
  }
  getEl() {
      return this.el;
  }
  getTimeBomb() {
      return this.timeBomb;
  }
  getSpeed() {
      return this.speed;
  }
  getOffsetLeft(){
    return this.el.offsetLeft;
  }
  getOffsetTop(){
    return this.el.offsetTop;
  }
  getMoving(){
    return this.moving;
  }

  setPosX(pos) {
    this.posX = pos;
  }
  setPosY(pos) {
    this.posY = pos;
  }
  setLeft(size){
    this.el.style.left = size + "px";
  }
  setTop(size){
    this.el.style.top = size + "px";
  }
  setTimeBomb(el){
    el.timeBomb = 3;

    setTimeout(function(){
      el.timeBomb = 0;
    },3000);
  }
  setMoving(el){
    el.moving = 1;
    console.log(el.moving);

    setTimeout(function(){
      el.moving = 0;
      console.log(el.moving);
    },el.speed);
  }

  // move hero
  direction(pos){
    if(pos == 1){ // Up
      this.moveUnit(0,-1);
    }
    else if(pos == 2){ // Right
      this.moveUnit(1,0);
    }
    else if(pos == 3){ // Bottom
      this.moveUnit(0,1);
    }
    else if(pos == 4){ // Left
      this.moveUnit(-1,0);
    }
  }

  // Move an unit
  moveUnit(moveX, moveY){
    this.setMoving(this);

    if(moveX != 0){
      this.setPosX(this.getPosX() + moveX);
      console.log('Après déplacement : '+this.getPosX()+':'+this.getPosY());
      animate(this.el,"left","px",this.getOffsetLeft(),(this.getOffsetLeft() + (moveX * caseSize)),this.speed);
    }
    else if(moveY != 0){
      this.setPosY(this.getPosY() + moveY);
      console.log('Après déplacement : '+this.getPosX()+':'+this.getPosY());
      animate(this.el,"top","px",this.getOffsetTop(),(this.getOffsetTop() + (moveY * caseSize)),this.speed);
    }
  }
}
