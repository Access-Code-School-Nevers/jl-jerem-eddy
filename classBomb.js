////////////////////////////////////
//              TYPE              //
//          0 = Empty             //
//          1 = Wall              //
//          2 = Bomb              //
//          3 = Unit              //
////////////////////////////////////

class Bomb{
  constructor(posX, posY, time) {
      this.posX = posX;
      this.posY = posY;
      this.time = time;
  }

  getTime(){
    return this.time;
  }

  setTime(time){
    this.time = time;
  }
}
