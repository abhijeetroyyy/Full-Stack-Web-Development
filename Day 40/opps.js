// let obj ={
//     a:1,
//     b:'Harry',
//     c:3
// }


// let animal ={
//     eats : true
// };
// let rabbit ={
//     jumps :true
// };
// rabbit.__proto__ = animal;

class Animal {
    constructor(name) {
        this.name = name
        console.log("object is created");
    }
    eat() {
        console.log('animal is eating');
    }
    jump() {
        console.log('animal is jumping');
    }
}

let a = new Animal("Tamu");
console.log(a);

class lion extends Animal {
    constructor(name) {
        super(name);
        // this.name = name
        console.log("object is created and he is a lion");
    }
}
let l = new lion("shera");
console.log(l);

