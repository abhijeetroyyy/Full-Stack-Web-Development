let user = {
    name: `ABHIJEET`,
    age: 18,
    lerning: `webdev`,
    lang: `html ,css  , js , react , python`,
    languages: function () {
        console.log(`Now i am learning ${user.lang}`)
    }

}
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.lerning);
user.lerning = 'Backend'
console.log(user);
console.log(typeof user);


console.log(user[`name`]);
console.log(user[`age`]);
console.log(user[`lerning`]);

delete user.lerning;
console.log(user)
user.languages()
console.log(`This is day 30 of becoming a full stack web developer`.toUpperCase())
