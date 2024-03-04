// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(numbers);
// let obj = {
//     name: "abhijeet",
//     age: 19,
//     city: "Guwahati"
// }
// let aray = [1, true, null, `abhijeet`];
// // console.log(aray[3]+" is learning javascript");     
// // console.log(typeof aray);   
// console.log(Array.isArray(aray));
// console.log(Array.isArray(obj));

let arr = [1, 2, 3];
console.log(arr);
arr.push(4);
console.log("after push : ", arr);
arr.pop();
console.log("After pop : ", arr);
arr.shift();
console.log("After shift : ", arr);
arr.unshift(0);
console.log("After unshift : ", arr);

let arrayyy = [3, 5, 6, 8];
console.log(arrayyy);
// arrayyy.splice(1, 3);
// console.log("After splice : ", arrayyy);
// console.log(arrayyy.toString());
console.log(arrayyy.sort());
console.log(arrayyy.valueOf());

let arr2=arrayyy;
arr2[0]=99;
console.log(arr);

let [a,b,c,d]=arr2;
console.log(a+" " +b+" "+c+" "+d);