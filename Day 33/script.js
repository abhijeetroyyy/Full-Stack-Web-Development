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

let clicked = localStorage.getItem('clicked') || 0;
function buttonclicked() {
    clicked++;
    localStorage.setItem('clicked', clicked);
    updatebutton();
}
function updatebutton() {
    let button = document.querySelector('#my-button');
    if (clicked % 2 == 0) {
        button.classList.remove('js-odd');
        button.classList.add('js-even');
    }
    else {
        button.classList.remove('js-even');
        button.classList.add('js-odd');
    }
    button.innerHTML = clicked;
}
updatebutton();