// async function getdata(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve(455);
//         },2000)
//     })
// }
async function getdata(){
    //simulate getting data from the server
    let x =await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data= await x.json()
    console.log(x);
    console.log(data);
    return data;
    // return 500
    // .then(response => response.json())
    // .then(json => console.log(json))
}
async function main() {
    console.log('loading modules'); 
    console.log('do something else...');
    console.log('load data...');
    
    let data=await getdata()
    console.log(data);
    console.log("Process data...");
    console.log('task 2');
}

main()

// data.then((v)=>{
//     console.log(data);
    
//     console.log("Process data...");
//     console.log('task 2');
// })




