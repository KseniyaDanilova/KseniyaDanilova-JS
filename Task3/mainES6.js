
'use strict';

class Car {
  constructor(name) {
    this.name = name;
  }

  info() {
    console.log("The car: " + this.name);
  }
}

class LightCar extends Car {
    constructor(name,speed,power){
        super(name);
        this.speed=speed;
        this.power=power;
    }
  info() {
    super.info();
    console.log("its speed:"+this.speed+", its power:"+this.power);
  }
}
class UsedCar extends LightCar {
    constructor(name,speed,power,date,number){
        super(name,speed,power);
        this.date=date;
        this.number=number;
    }
  info() {
    super.info();
    console.log("date:"+this.date+", its number:"+this.number);
  }
}

new UsedCar("VW",190,150,12.09,11111).info();

