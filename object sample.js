console.clear()
// CONCEPT OF OBJECT LITERALS
var Person ={name:" Dilshad",age:25,place:"Calicut"}// name, age, place prpperties
console.log(Person.name)
console.log(Person.age)

for(x in Person){
    console.log(x)
    console.log(Person[x])
}
// changing the name only
Person.name="Abhinand**"
console.log(Person.name)

console.log("________________Returning Zero_____________________")
// Adding methods ************

var Person = {name: "Dilshad", age: 25, place: "Calicut", display: function() { console.log(this.name); return 0}};
console.log(Person.display());

var Person = {name: "John", age: 40, place: "TVM", display: function() { console.log(this.name);return 0 }};
console.log(Person.display());
console.log("________________Directly call the method_____________________")

var Person = {name: "Soniya", age: 38, place: "Calicut", display: function() { console.log(this.name); }};
Person.display(); // Directly call the method

var Person = {name: "Sunny", age: 49, place: "Rajastan", display: function() { console.log(this.name); }};
Person.display(); // Directly call the method
console.log("________________Defining a local variable: 2 cases_____________________")
var Person = {name: "Ram", age: 15, place: "Calicut", 
    display: function() {
        var name ="LALLA"
        console.log("________________Case 1:- this.name(no var name)____________________")
         console.log(this.name)
         console.log("________________Case 2:-just name(defined using var)____________________")
          console.log(name)
         ; }};
console.log(Person.display());
// Adding additional property
Person.dob="10-2-2000"
console.log(Person)
// additional methods are added
Person.displayAge=function(){
    console.log(this.age)
}
console.log(Person.displayAge())