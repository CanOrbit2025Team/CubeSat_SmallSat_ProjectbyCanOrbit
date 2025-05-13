console.clear();
var people = []; // Array to store all Person objects

// First Person
people.push({name: "Dilshad", age: 25, place: "Calicut"});
console.log(people[0].name);
console.log(people[0].age);

for (x in people[0]) {
    console.log(x);
    console.log(people[0][x]);
}

// Changing the name
people[0].name = "Abhinand**";
console.log(people[0].name);

console.log("________________Returning Zero_____________________");

// Adding methods to new objects and pushing them to the array
people.push({name: "Faisal", age: 25, place: "Kottayam", display: function() { console.log(this.name); return 0; }});
console.log(people[1].display());

people.push({name: "John", age: 40, place: "TVM", display: function() { console.log(this.name); return 0; }});
console.log(people[2].display());

console.log("________________Directly call the method_____________________");

people.push({name: "Soniya", age: 38, place: "Calicut", display: function() { console.log(this.name); }});
people[3].display();

people.push({name: "Sunny", age: 49, place: "Rajastan", display: function() { console.log(this.name); }});
people[4].display();

console.log("________________Defining a local variable: 2 cases_____________________");

people.push({name: "Ram", age: 15, place: "Calicut", 
    display: function() {
        var name = "LALLA";
        console.log("________________Case 1:- this.name(no var name)____________________");
        console.log(this.name);
        console.log("________________Case 2:-just name(defined using var)____________________");
        console.log(name);
    }});
console.log(people[5].display());

// Adding additional property
people[5].dob = "10-2-2000";

// Display all people
console.log("________________All People_____________________");
people.forEach((person, index) => {
    console.log(`Person ${index + 1}:`, person);
});