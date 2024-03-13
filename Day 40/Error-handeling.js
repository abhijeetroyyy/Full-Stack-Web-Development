let a = prompt("Enter first number");
let b = prompt("Enter second number");
// let sum = a+b; it concatinate the numbers insted of adding them
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("This is not allowed in js its a string")
}
let sum = parseInt(a) + parseInt(b);

function main(){
    let x=1;
    try {
        console.log("the sum is ", sum*x);
        return true 
        
    } catch (error) {
        console.log("Its a error")
        return false
    }
    finally{
        console.log('All data are been send to db and its closed');
        
    }
}
let  c = main();
console.log(c);
