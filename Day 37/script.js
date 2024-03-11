let button = document.getElementById('btn')
button.addEventListener('click',()=>{
    document.querySelector('.box').innerHTML="<b> yayy you were clicked</b> Enjoythe click"
    // alert('I was clicked')
})

button.addEventListener('contextmenu',()=>{
    // document.querySelector('.box').innerHTML="<b> yayy you were clicked</b> Enjoythe click"
    alert('No I was clicked')
})

document.addEventListener('keydown',(e)=>{
    console.log(e.key,e.keyCode)
    // document.querySelector('.box').innerHTML="<b> yayy you were clicked</b> Enjoythe click"
    // alert('I was clicked')
})