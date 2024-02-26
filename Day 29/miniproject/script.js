let age=10;
let gender ='male';
let final_discount;
if(age<=5){
    final_discount=100;
}
else if(gender==='female' || age<=8){
    final_discount=50;
}
else if(age>=65){
    final_discount=30;
}
else{
    final_discount=0;
}
console.log(`your final discount is ${final_discount}`);