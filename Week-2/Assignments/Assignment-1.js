const text2 = document.getElementById('wel');
const button = document.getElementById('button');
text2.addEventListener('click',() =>{
    text2.textContent="Have a Good Time!!";
})

button.addEventListener('click',() =>{
    document.getElementById('row3').style.display= 'flex';
    document.getElementById('row4').style.display= 'flex';
})