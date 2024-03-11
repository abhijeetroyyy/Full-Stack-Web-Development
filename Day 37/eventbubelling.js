document.querySelector('.child').addEventListener('click', (e) => {
    e.stopPropagation();//stops propagation in other container
    alert('child is clicked');
})
document.querySelector('.child-container').addEventListener('click', (e) => {
    e.stopPropagation();//stops propagation in other container
    alert('child container is clicked');
})
document.querySelector('.container').addEventListener('click', (e) => {
    e.stopPropagation();//stops propagation in other container
    alert('container is clicked');
})


function getrandomcolor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`
}
let a=setInterval(() => {
    document.querySelector('.child-container').style.background = getrandomcolor();
}, 1000);
console.log(a);

let b=setTimeout(() => {
    document.querySelector('.container').style.background = getrandomcolor();
}, 5000);
console.log(b);