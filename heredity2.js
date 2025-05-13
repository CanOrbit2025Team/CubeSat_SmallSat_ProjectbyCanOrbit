console.clear();

// Base class (Vehicle)
class Vehicle {
    constructor(type) {
        this.type = type; // e.g., "Car", "Truck", etc.
    }
    vehicleInfo() {
        console.log(`This is a ${this.type}`);
    }
}

// Derived class (Car) inherits from Vehicle
class Car extends Vehicle {
    constructor(make, model, year) {
        super("Car"); // Pass the type to the Vehicle constructor
        this.make = make;
        this.model = model;
        this.year = year;
    }
    carDetails() {
        console.log(`Car: ${this.make} ${this.model} (${this.year})`);
    }
    getCarAge() {
        const currentYear = new Date().getFullYear(); // 2025 as per context
        const age = currentYear - this.year;
        console.log(`The ${this.make} ${this.model} is ${age} years old.`);
    }
}
console.log('___________________________scenario : Toyota________________________________')

// Creating objects below
let myCar = new Car("Toyota", "Camry", 2020);
myCar.carDetails();    // Call method from Car class
myCar.vehicleInfo();   // Call inherited method from Vehicle class
myCar.getCarAge();     // Call another method from Car class
console.log('___________________________scenario : Honda________________________________')

// Create another car
let anotherCar = new Car("Honda", "Civic", 2018);
anotherCar.carDetails();
anotherCar.vehicleInfo();
anotherCar.getCarAge();