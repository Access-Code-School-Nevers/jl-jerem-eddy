class Monster{
  constructor(posX, posY, el, timeBomb) {
      this.posX = posX;
      this.posY = posY;
      this.el = el;
      this.timeBomb = timeBomb;
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
  getOffsetLeft(){
    return this.el.offsetLeft;
  }
  getOffsetTop(){
    return this.el.offsetTop;
  }

  setPosX(pos) {
    this.posX = pos;
  }
  setPosY(pos) {
    this.posY = pos;
  }
  setTimeBomb() {
    this.timeBomb = 3;
  }
  setLeft(size){
    this.el.style.left = size + "px";
  }
  setTop(size){
    this.el.style.top = size + "px";
  }


  // Move an unit
  moveUnit(moveX, moveY){
    if(moveX != 0){
      animateMovement(this, 1, (this.getOffsetLeft() + (moveX * caseSize)));
      this.setPosX(this.getPosX() + moveX);
    }
    else if(moveY != 0){
      animateMovement(this, 2, (this.getOffsetTop() + (moveY * caseSize)));
      this.setPosY(this.getPosY() + moveY);
    }
  }

  //define the direction to move to
  selectDirection(){
    var positions = [];

    // Get all directions available
    // Up = 1, Right = 2, Bottom = 3, Left = 4
    if(this.getPosY() > 1 && cases[this.getPosX()][this.getPosY() - 1] != undefined && cases[this.getPosX()][this.getPosY() - 1] == 0)
      positions.push(1);
    if(this.getPosY() < maxY && cases[this.getPosX() + 1] != undefined && cases[this.getPosX() + 1][this.getPosY()] != undefined && cases[this.getPosX() + 1][this.getPosY()] == 0)
      positions.push(2);
    if(this.getPosX() < maxX && cases[this.getPosX()][this.getPosY() + 1] != undefined && cases[this.getPosX()][this.getPosY() + 1] == 0)
      positions.push(3);
    if(this.getPosX() > 1 && cases[this.getPosX() - 1] != undefined && cases[this.getPosX() - 1][this.getPosY()] != undefined && cases[this.getPosX() - 1][this.getPosY()] == 0)
      positions.push(4);

    // Get random position in all possible positions
    var posRandom = Math.floor(Math.random() * positions.length);

    // move monster
    if(positions[posRandom] == 1){ // Up
      this.moveUnit(0,-1);
    }
    else if(positions[posRandom] == 2){ // Right
      this.moveUnit(1,0);
    }
    else if(positions[posRandom] == 3){ // Bottom
      this.moveUnit(0,1);
    }
    else if(positions[posRandom] == 4){ // Left
      this.moveUnit(-1,0);
    }

    // define if the monster drop a bomb
    if(this.timeBomb == 0){
      if(Math.floor(Math.random() * 3) == 1)
        dropBomb(this.getPosX(), this.getPosY(), this);
    }
    else
      this.timeBomb--;
  }
}
