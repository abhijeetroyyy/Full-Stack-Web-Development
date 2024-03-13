console.log('this is promises');

let prom1 = new Promise(function (resolve, reject) {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting you")
    }
    else {
        setTimeout(function () {
            console.log('yes i am done');
            resolve("Abhijeet ");
        }, 3000);
    }
})



let prom2 = new Promise(function (resolve, reject) {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting you 2")
    }
    else {
        setTimeout(function () {
            console.log('yes i am done 2');
            resolve("Abhijeet is learning");
        }, 3000);
    }
})


let p3 = Promise.all([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch((err => { console.log(err) }));





// prom1.then((a)=>{
//     console.log(a);
// }).catch ((err) => { 
//     console.log(err);
// })