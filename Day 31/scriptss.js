let product={
    size:`s`,
    name:`jeans`,
    fit:`slim-fit`,
    'delevery-time':`24hours`,
};

let copyproduct=product;
console.log(product);
copyproduct.size=`M`;
console.log(product);
copyproduct.fit=`Regular Fit`;
console.log(product);
console.log(product[`delevery-time`]);

let obj={
    message:`good job`,
    status:`complete`,
};
console.log(obj);
let {message,status}=obj;
console.log(message);
console.log(status);