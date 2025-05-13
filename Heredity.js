// inheritance example
/*  who is base and who is derived */
console.clear()
class Sample {
    sampleHello(){
        console.log("This is sample hello")
    }
}
class Hello extends Sample{
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
    }
    hello(){
     console.log('Hello Friends:'+(this.num1 +this.num2))
    }
}


// creating onjects below
let hey =new Hello(10,20)
hey.hello()//---------------------------------not  hey.Hello()
hey.sampleHello()
console.log('___________________________scenario : car________________________________')

// Base class (Vehicle)
class Vehicle {
    vehicleInfo() {
        console.log("This is a vehicle");
    }
}

// Derived class (Car) inherits from Vehicle
class Car extends Vehicle {
    constructor(make, model) {
        super(); // Call the parent class (Vehicle) constructor
        this.make = make;
        this.model = model;
    }
    carDetails() {
        console.log(`Car: ${this.make} ${this.model}`);
    }
}

// Creating objects below
let myCar = new Car("Toyota", "Camry");
myCar.carDetails(); // Call method from Car class
myCar.vehicleInfo(); // Call inherited method from Vehicle class
console.log('___________________________________________________________')
