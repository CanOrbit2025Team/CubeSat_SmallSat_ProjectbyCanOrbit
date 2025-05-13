console.clear()
// TOPIC: default
// scenario 1
function hello(num1,num2){
    console.log(num1+num2)
}
console.log(" ______________Senario:1_____________")
hello(10,20)

// scenario 2

function hello(num1=76,num2){
    console.log(num1+num2)
}
console.log(" ______________Senario:2_____________")
hello(10,20)
// scenario 3

function hello(num1=76,num2){
    console.log(num1+num2)
}
console.log(" ______________Senario:3_____________")
hello(undefined,20)