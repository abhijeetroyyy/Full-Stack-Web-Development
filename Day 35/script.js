let array = [5, 6];
array.unshift(4);
array.push(7);
console.log(array);

function getelemet(array, position) {
    return array[position - 1];
}
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getelemet(array1, 9));

function arraycopy() {
    return array.slice(0, array.length);
}
let array2 = [4, 5, 8, 7];
let array3 = arraycopy(array);
array2[0] = null; 
console.log(array2);
console.log(array3);


function isprime(){
    for (let i = 2; i < num1; i++) {
        if (num1 % 2 === 0) {
            return false;
        }
    }
    return true;
}
let num1 = 10;
let i=0;
while(true) {
    if(isprime(num1)){
        console.log(num1);
        i++;
        if(i >= 10){
            break;
        }
    }
    num1++;
}

for (let i=10;i>0;i--){
    console.log(i);}

let num2 = [1,-6,5,7,-98];
for (let i=0;i<num2.length;i++) {
    if(num2[i]<0) continue;
    console.log(num2[i]);
}

let array4 =[`Abhijeet`,`is`,`learning`,`javascript`,`advance`];
let result =``;
for (let i=0;i<array4.length;i++) {
    result += array4[i] + " ";
}
console.log(result);
console.log(array4.join(' '))