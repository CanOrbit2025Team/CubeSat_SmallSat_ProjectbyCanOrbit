var r=require('readline-sync')
num1=r.question('Enter 2 numbers...First number is ')
num2=r.question('Second number is ')
console.log(num1,num2)
if (num1>num2)
{console.log("larger is "+num1)}
else if (num2===num1)
{console.log(" Same value ")}
    else
{console.log(' larger is '+num2)}
// case comparison 2 items
num3='123'
num4=123
console.log(num3==num4)//== is flexible — it tries to make both sides "look the same" before comparing.
console.log(num3===num4)