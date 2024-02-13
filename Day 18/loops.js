console.log("It is tutorial of for loops in javascript");

let a = 1;
for (let i = 0; i < 10; i++) {
    console.log(a + i);

}

let obj={
    name:"Abhijeet Roy",
    role:"Programer",
    age:23,
    course:"BCA"
}
for (const key in obj) {
        const element = obj[key];
        console.log(key,element);
        console.log(key);
}

for (const c of "Abhijeet") {
    console.log(c)
}

// while (j<6) {
//     console.log(j);
//     j++
// }


let j=10;
do {
    console.log(j);
    j++;
} while (j<6);