/* In this class , there is a construction and a method....
explore how to create an object */
console.clear()
class Hello{
    constructor(num1,num2){
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

/* what is the need of a constructior, in method why there is no function keyword, show me a realistic example to understang*/



// Define the Car class
class Car {
    constructor(make, model, year, isElectric) {
        this.make = make;         // e.g., Toyota
        this.model = model;       // e.g., Camry
        this.year = year;         // e.g., 2020
        this.isElectric = isElectric; // e.g., false
    }

    // Method to display car details
    displayDetails() {
        console.log(`${this.make} ${this.model} (${this.year}) - Electric: ${this.isElectric}`);
    }

    // Method to calculate the car's age
    getCarAge() {
        const currentYear = new Date().getFullYear(); // Current year (2025 as per your context)
        const age = currentYear - this.year;
        console.log(`${this.make} ${this.model} is ${age} years old.`);
    }
}

// Create car objects
let car1 = new Car("Toyota", "Camry", 2020, false);
let car2 = new Car("Tesla", "Model 3", 2022, true);

// Use the methods
car1.displayDetails();
car2.displayDetails();
car1.getCarAge();
car2.getCarAge();

// Log the objects to see their properties
console.log(car1);
console.log(car2);