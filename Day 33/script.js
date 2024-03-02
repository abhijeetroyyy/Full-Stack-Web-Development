function datetime() {
    let date = new Date();
    console.log(date);
    // console.log(date.getTime());
    let name = prompt(`Enter Your Name`);
    let output;
    let Hours = (date.getHours());
    let Minute = (date.getMinutes());
    let Sec = (date.getSeconds());
    // output = document.querySelector(`#Time`);
    let time = `${Hours}hr ${Minute}min ${Sec}sec`;
    if ((date.getHours() > 5) && (date.getHours() < 12)) {
        return (`Good Morning ${name} and the time is ${time}`);
    }
    else if ((date.getHours() >= 12) && (date.getHours() <= 18)) {
        return (`Good Evening ${name} and the time is ${time}`);
    }
    else {
        return (`Good Night ${name} and the time is ${time} `);
    }
}
document.querySelector('#Time').innerText = datetime();

let clicked = 0;
function buttonclicked() {
    let buttonn = document.querySelector('#my-button');
    clicked++;
    buttonn.innerHTML = clicked;
}