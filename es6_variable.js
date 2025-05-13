console.clear()
//**************** var
var num=10
var num=20
console.log(num)// Takes the larest---it allows you to write twice
//**************** let
// but let wont allow you to create twice
let quail=222
//let quail=999
let hello=29
//let hello=20
console.log(hello)

//**************** var and let
// example var : scope with in functon
function helllo(){
    var i=0
    let koy=333
if (i===0){
    var hey=204567
    let hoy=1111//---------------------------------------------------Valid in block
    console.log(" with in block, printing hoy")
    console.log(hoy)
}
 console.log(" with in function, outside the block, printing hoy")
console.log(hey)//---------------------------------------------------Valid in function
//console.log(hoy)--------------------why error: scope of let : with in block , NOT OUTSIDE OF block { }
console.log(" with in block, printing koy")
console.log(koy)
}
//console.log(hey) //------------------------why error: scope of var : with in function, NOT OUTSIDE OF FUNCTION

helllo()
/* scpe of hoy with in if..but scope koy with in the entire function...why? ANS:IT DEPENDS ON THE BLOCK */

//**************** const
const heylo=555
// heylo=200
console.log(heylo)

// Cancantenation only using push
const Employee=['Dilshad','Abhi','Faisal']
Employee.push('Shanid')//--------------------------push is allowed
console.log(Employee)
// Employee=['Shimna','Kavya']------------------Not allowed....you cannot add another array