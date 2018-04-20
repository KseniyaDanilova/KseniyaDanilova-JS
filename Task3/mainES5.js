
function Car(name,speed,power){
    this.name=name;
    this.speed=speed;
    this.power=power;
    
}

Car.prototype.info=function(){
    console.log("Its name:"+this.name+"; its speed:"+this.speed+"; its power:"+this.power);
}


function CarData(name,speed,power,mileage,year){
    Car.apply(this, arguments);
    this.mileage=mileage;
    this.year=year;


CarData.prototype.info=function(){
   Car.prototype.info.apply(this, arguments);
    console.log("Year:"+this.year+"; its mileage:"+this.mileage);  
}


CarData.prototype.newORused=function(){
    var a='';
    if (this.mileage === 0) {
        a="This car is new";}
    if (this.mileage > 0) {
        a="The car is not new";}
    if (this.mileage < 0) {
        a="The data is not correct";}
    console.log(a);
   
}
}

CarData.prototype=Object.create(Car.prototype);
CarData.prototype.constructor = CarData;

const mycar=new CarData('VW',180, 200, 10000, 2014);
mycar.info();
mycar.newORused();