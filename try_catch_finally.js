//syntax-try-throw-catch -finally
try{
    if(a===0)
        throw "User not found"
}catch(err){
    console.log(err)
}finally{
    
}
/* The try block contains the code you want to execute,
 the catch block handles any exceptions that occur, 
the finally block runs code that executes regardless of whether an exception was thrown or caught, 


and throw lets you manually create an exception.*/

console.clear();

// Example 1: Invalid User ID
console.log("************Example 1: Invalid User ID*********");
try {
    let a = 500912354; // Invalid user ID
    if (a === 0) {
        throw "User not found";
    }
    console.log("User found with ID: " + a);
} catch (err) {
    console.log("Error caught: " + err);
} finally {
    console.log("Cleanup: Example 1 completed.");
}

// Example 2: Valid User ID
console.log("************Example 2: Valid User ID*********");
try {
    let a = 0000000; // Valid user ID
    if (a === 0) {
        throw "User not found";
    }
    console.log("User found with ID: " + a);
} catch (err) {
    console.log("Error caught: " + err);
} finally {
    console.log("Cleanup: Example 2 completed.");
}