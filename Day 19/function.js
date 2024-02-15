// console.log("Hey I am in Abhijeet");
// console.log("Hey I am in Manas");
// console.log("Hey I am in Trishanku");
// console.log("Hey I am in Sahil");
// console.log("Hey I am in Rohan");

function nice(name) {
    console.log("Hey I am " + name + " You are nice");
    console.log("Hey I am " + name + " You are good");
    console.log("Hey I am " + name + " You are a boy");
    console.log("Hey I am " + name + " You are developer");
    console.log("Hey I am " + name + " You are indian");
}
nice("Rohan")
nice("Abhijeet")

function sum(a, b, c = 3) {
    // console.log(a+b);
    return a + b + c
}
result = sum(3, 10)



console.log("The sum of these numers are ", result);


const func1 = (x)=> {
    console.log("I am an arrow function",x)
}
func1(34);
func1(22);
func1(11);