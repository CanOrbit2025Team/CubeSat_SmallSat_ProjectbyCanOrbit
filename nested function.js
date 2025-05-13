var num=10
// explore the scope of the  variable local
// create a code to understand the
function hello(){
    num=20 // what happens if i write "var num=20"********************num = 20; // Overwrites global variable if no local one exists
    // let num = 10; // Protected local variable
    //
    const missionCode = 'Alpha1'; // Constant, cannot be reassigned
    var rank = 'Captain';        // Function-scoped, can be redeclared

    console.log("from hello:- Printing num after calling function hello & from hey function: Expect 30")
        console.log(" *************************************************************************")
        console.log(num)

    function hey(){
        const missionCode = 'Alpha1-a'; // Constant, cannot be reassigned
        var rank = 'Sergeant';        // Function-scoped, can be redeclared

        num=30 // what happens if i write "var num=30":-Overwrites global variable if no local one exists -bad!! // **** alwaus declare locally
        console.log("from hey..:- Printing num after calling function hello & from hey function: Expect 30")
        console.log(" *************************************************************************")
        console.log(num)
    }
    hey()
}

console.log(" Printing num for the first time")
console.log(" ******************************")
console.log(num)

console.log("Just calling hello")
console.log(" **********************")
hello()
console.log(" Printing num after calling function hello")
console.log(" ********************************************")
console.log('Orginal num:- '+num)
console.log(" ***********lesson learnt: always declare local variable using var/let/const***********")
console.log(" ***********else your GLOBAL VARIABLE is being over written***********")