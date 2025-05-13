// function person
console.clear()
// Concept of OBJECT CONSTRUCTORS

function Person (name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name: "+this.name+ "  Age :"+age)
    }

} 


//
var Dilshad =new Person("Dilshad",20,"Calicut")
var Abhinand=new Person("Abhinand", 21,"Kunnamangalam")

Dilshad.display()
Abhinand.display()

// help me add another method 

// Appending a new method to each instance
Dilshad.showPlace = function() {
    console.log("Place: " + this.place);
};
Abhinand.showPlace = function() {
    console.log("Place: " + this.place);
};
// help me add another property---------------ADDING MORE PROPERTIES INTO THE OBJECT
// Appending a new property to each instance
Dilshad.dob = "15-5-2005";
Abhinand.dob = "10-3-2004";

// Test the new method and property
Dilshad.showPlace();
Abhinand.showPlace();
console.log("Dilshad's DOB: " + Dilshad.dob);
console.log("Abhinand's DOB: " + Abhinand.dob);

//// Appending a new boolean property
Dilshad.isStudent = true;  // Dilshad is a student
Abhinand.isStudent = false; // Abhinand is not a student

// Test the new boolean property
console.log("Is Dilshad a student? " + Dilshad.isStudent);
console.log("Is Abhinand a student? " + Abhinand.isStudent);
console.log(Dilshad);
console.log(Abhinand);