class Monster{
  constructor(posX, posY, el, timeBomb, speed) {
      this.posX = posX;
      this.posY = posY;
      this.el = el;
      this.timeBomb = timeBomb;
      this.speed = speed;

      this.el.style.left = (caseSize * (this.posY - 1));
      this.el.style.top = (caseSize * (this.posX - 1));

      this.selectDirection(this);
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
    return (this.getPosY() - 1) * caseSize;
  }
  getOffsetTop(){
    return (this.getPosX() - 1) * caseSize;
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


  // Move an unit
  moveUnit(moveX, moveY){
    if(moveX != 0){
      animate(this.el,"top","px",this.getOffsetTop(),(this.getOffsetTop() + (moveX * caseSize)),this.speed);
      this.setPosX(this.getPosX() + moveX);
    }
    else if(moveY != 0){
      animate(this.el,"left","px",this.getOffsetLeft(),(this.getOffsetLeft() + (moveY * caseSize)),this.speed);
      this.setPosY(this.getPosY() + moveY);
    }
  }

  //define the direction to move to
  selectDirection(el){
    if(this != undefined){
      var positions = [];

      // Get all directions available
      // Up = 1, Right = 2, Bottom = 3, Left = 4
      if(this.getPosX() > 1 && cases[this.getPosX() - 1] != undefined && cases[this.getPosX() - 1][this.getPosY()] != undefined && cases[this.getPosX() - 1][this.getPosY()] == 0)
        positions.push(1);
      if(this.getPosY() < maxY && cases[this.getPosX()][this.getPosY() + 1] != undefined && cases[this.getPosX()][this.getPosY() + 1] == 0)
        positions.push(2);
      if(this.getPosX() < maxX && cases[this.getPosX() + 1] != undefined && cases[this.getPosX() + 1][this.getPosY()] != undefined && cases[this.getPosX() + 1][this.getPosY()] == 0)
        positions.push(3);
      if(this.getPosY() > 1 && cases[this.getPosX()][this.getPosY() - 1] != undefined && cases[this.getPosX()][this.getPosY() - 1] == 0)
        positions.push(4);

      // Get random position in all possible positions
      var posRandom = Math.floor(Math.random() * positions.length);

      // move monster
      if(positions[posRandom] == 1){ // Up
        this.moveUnit(-1,0);
      }
      else if(positions[posRandom] == 2){ // Right
        this.moveUnit(0,1);
      }
      else if(positions[posRandom] == 3){ // Bottom
        this.moveUnit(1,0);
      }
      else if(positions[posRandom] == 4){ // Left
        this.moveUnit(0,-1);
      }

      // define if the monster drop a bomb
      if(this.getTimeBomb() == 0){
        if(Math.floor(Math.random() * 3) == 1){
          setTimeout(function(){
            dropBomb(el.getPosX(), el.getPosY(), el);
          },el.speed);
        }
      }

      setTimeout(function(){
        el.selectDirection(el);
      },el.speed);
    }
  }
}
