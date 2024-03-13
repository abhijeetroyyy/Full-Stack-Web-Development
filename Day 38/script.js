console.log(`Hello i am abhijeet`);
console.log(`Hello i am abhijeet learning javascript`);

setTimeout(() => {
    console.log(`Hello i will be executed after 2 seconds`);
}, 2000);
console.log(`Hello i will be executed at the end but it wil run before he timeout function`);

const fn = () => { console.log(`Nothing`)}
const callback = (args, fn) => {
    console.log(args);
    fn()
}

const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("ABhijeet",fn);
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

