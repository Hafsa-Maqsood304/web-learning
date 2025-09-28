//console.log('Hello');
//console.log('i like pizza!');

//window.alert('this is an alert');

//document.getElementById("p1").textContent = 'Hello';
//document.getElementById("p2").textContent = 'This is Hafsa';
//document.getElementById("p3").textContent = 'A 19 year old';



//Easy way of taking input using window prompt

//let username;
//username=window.prompt('Enter yor username');
//console.log(username);



/*
//Professional way of taking input

let username;
document.getElementById('mySubmit').onclick = function(){
  username= document.getElementById('myinput').value;
   document.getElementById('myH1').textContent = `Hello ${username}`;
  console.log(username);
}
  */




//conversion of type

let age=window.prompt('What is your age?');
age = Number(age);
age+=1;
console.log(age , typeof age);