// Votre script JS
let add = document.getElementById('increase');
let remove = document.getElementById('decrease');
let reset = document.getElementById('reset');
let int = document.getElementById('value');
let integer = 0;
add.addEventListener('click',function(){
    integer +=1;
    int.innerHTML =integer;
    int.style.color = 'green';
})
remove.addEventListener('click',function(){
    integer -=1 ;
    int.innerHTML =integer;
    int.style.color = 'red';
})
reset.addEventListener('click',function(){
    integer =0;
    int.innerHTML =integer;
    int.style.color = 'black';
})