let num =6
function factorial(number) {
  let arr = Array.from(Array(number+1).keys());
  console.log(arr.slice(1,));
  let c=arr.slice(1,).reduce((a,b)=> {
    return a*b
  })
  return c
}



function facfor(number){
    let fac=1;
    for (let index = 0; index < number; index++) {
        fac = fac*index
    }
    return fac
}
factorial(num);
facfor(num);
