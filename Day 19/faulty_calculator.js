/* Create a faulty calculator using javascript 

This faulty calculator dose followings:
1.It takes two number as input from the user
2. it performes wrong operations as follows:
 +--> -
 *--> +
 - --> /
 / --> **

 It performes wrng operation 10% of its time
 */

// taking inputs from users
var random = Math.random()
let num1 = prompt("Enter the first number");
let operation = prompt("Enter OPeration");  
let num2 = prompt("Enter the second number");
let obj ={
    "+":"-",
    "*": "+" ,
    "-": "/" ,
    '/': '**',
}
    console.log(random);
    if (random < 0.1) { 
        alert(`the result is ${eval(`${num1}${operation}${num2}`)}`);
    } 
    
    
else {
    operation=obj[operation];
    alert(`the result is ${eval(`${num1}${operation}${num2}`)}`);
}