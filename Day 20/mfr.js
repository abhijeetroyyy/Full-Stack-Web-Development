let arr = [1, 13, 7, 11];
// let newarr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2);
// }
let newarr = arr.map((e) => {
    return e ** 2
})
console.log(newarr);
const greaterthanseven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}
console.log(arr.filter(greaterthanseven));

let arr2 =[1,2,3,4,5,6];
const red = (a,b)=>{
    return a+b
}
console.log(arr2.reduce(red));