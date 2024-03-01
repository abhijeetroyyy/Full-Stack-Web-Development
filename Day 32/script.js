// let product = {
//     name : `tshirt`,
//     price :1000,
//     rating:{
//         stars:4.5,
//         noofreviews :453,
//     },
// }
// console.log(product);
// console.log(typeof product);
// let str = JSON.stringify(product);
// console.log(typeof str);
// console.log(str);
// let obj = JSON.parse(str);
// console.log(obj);
// console.log(typeof obj);



let product = {
    name: `tshirt`,
    price: 1000,
    rating: {
        stars: 4.5,
        noofreviews: 453,
    },
}
// localStorage.setItem('Age', 18);
// localStorage.setItem('Salary', '50k');
// localStorage.setItem('product', JSON.stringify(product));
// console.log(localStorage.getItem('product'));
// let pdk2 = JSON.parse(localStorage.getItem(`product`));
// console.log(pdk2);
localStorage.removeItem(`Age`)
localStorage.clear();