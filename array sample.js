// Define an array
var s = ['Abhi', 'Dilshad', 'Faizal'];

// Print first element
console.log("First element:", s[0]);

// Remove the last item using pop()
console.log("Removed (pop):", s.pop());

// Custom function to remove a specific item (like remove in Python)
function removeItem(arr, value) {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1); // Remove 1 element at the found index
        console.log(`Removed '${value}' from array`);
    } else {
        console.log(`'${value}' not found in array`);
    }
}

removeItem(s, 'Dilshad');

// Add new items using push()
s.push('Naveen', 'Zoya');
console.log("After push:", s);

// Sort the array
s.sort();
console.log("Sorted:", s);

// Reverse the array
s.reverse();
console.log("Reversed:", s);

// Loop through array with forEach
s.forEach(function(name, index) {
    console.log(`Index ${index}: ${name}`);
});
