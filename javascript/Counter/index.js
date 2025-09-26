const decrease=document.getElementById('decbtn');
const reset=document.getElementById('resetbtn');
const increase=document.getElementById('incbtn');
const counter=document.getElementById('count');
let count;

decrease.onclick=function(){
    count--;
    document.getElementById('count').textContent=count;
}
increase.onclick=function(){
    count++;
    document.getElementById('count').textContent=count;
}
reset.onclick=function(){
    count=0;
    document.getElementById('count').textContent=count;
}