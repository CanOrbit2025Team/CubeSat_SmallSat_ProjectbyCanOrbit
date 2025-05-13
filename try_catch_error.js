// exeptions--syntax
// this is syntax
console.log()

try{
    
}catch(err){
    console.log(err)}

// program begins.........
console.clear();
// Example 1
console.log('************Example 1 *********')
try {
    var numerator = 10;
    var denominator = 10;
    
    // Check for division by zero
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    
    var result = numerator / denominator;
    console.log("Result: " + result);
} catch (err) {
    console.log("An error occurred: " + err.message);
}

// Example 2
console.log('************Example 2 *********')
try {
    var numerator = 10;
    var denominator = 0;
    
    // Check for division by zero
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    
    var result = numerator / denominator;
    console.log("Result: " + result);
} catch (err) {
    console.log("An error occurred: " + err.message);
}