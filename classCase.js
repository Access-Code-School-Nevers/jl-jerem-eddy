////////////////////////////////////
//              TYPE              //
//          0 = Empty             //
//          1 = Wall              //
//          2 = Bomb              //
//          3 = Unit              //
//          4 = Destructible Wall //
////////////////////////////////////

class Case{
  constructor(posX, posY, el) {
      this.posX = posX;
      this.posY = posY;
      this.type = el;
  }

  getType(){
    return this.type;
  }

  setType(type){
    this.type = type;
  }
}
