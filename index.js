// Console API in java Script
// console.warn("Warning on the console");
// console.error("Used to write error on the console");
// console.clear("Used to clear console");

// 2. Ways to print in Java Script
// console.log("Used to write something on the console");
// document.write("Hello This is used  to write something on the browser screen");
// alert("This is an alert to the system");

// 3. Variable in Java Script
// var a = 12;
// var  b = 13;
// console.log(a + b);
// document.write(a + b);

// 4. Data Types in Java Script

// String data types
var str1 = "This sia awanish kumar";
var str2 = "This is Manish";

//Number Data Types
// var a = 12; 
// var b = 23;

//Object

var marks = {
    Awanish : 12,
    Manish: 23,
    Sunish : 45
};

// console.log(marks);


// Booleans
var a= true;
var b = false;

// console.log(a, b);

// if we just declare a variable and donot initialize it then it is by default undefined
var und = undefined;
// console.log(und); 

var n = null

// Null and undefinedare diffrent.


// At a very high level data type can be of two type 
// 1.Fundamental data type - number, null, boolean, undefined, symbol, string
// 2. Reference data type - arrays, objects

// Arrays
// var arr = [1,2,"Awanish",4,5,6,7,8,9];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);

// 5.Operators in Java Script
var a = 1200;
var b = 120;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a == b);
// console.log(a != b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a > b);
// console.log(a < b);
// console.log(a % b);

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(!true);
// console.log(true || false);

// 6. Functions in Java Script
// DRY - DONOT REPEAT YOURSELF

// function avg(a, b){
//     return (a + b)/2;
// }
// c1 = avg(12,25);
// c2 = avg(12, 12);
// console.log(c1, c2);

// 7.Conditional statements in Java script
// var age = 13;
// if(age>12){
//     console.log("you are not a kid");
// }else{
//     console.log("You are a kid");
// }

// var  num = 12;

// if(num > 0){
//     console.log("The number is positive");
// }else if(num < 0){
//     console.log("Number is less than zero");
// }else{
//     console.log("Number is equla to zero");
// }

// 8. loops in the java script.

// var arr = [1,2.3,4,5,5,7,4,74,"Awnaish", "Awanish",564];
// for(var i = 0; i < arr.length; i++){

//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// var i = 0;
//We should use let instead of var
// const a = 0;  // cannot be updated.
// while(i<arr.length){
//     console.log(arr[i]);
//     i += 1;
// }

// do{
//     console.log(arr[i]);
//     i++;
// }while(i < arr.length);


// var arr = [1,2.3,4,5,5,7,4,74,"Awnaish", "Awanish",564];
// let i = 0;
// // console.log(arr.pop);

// arr.pop();  // pop from the bottom
// console.log(arr) 
// arr.push(null)     // push at the bottom
// arr.push(487485);
// arr.push(true)
// console.log(arr)

// arr.shift();  // Shift one element from the left or from the top

// console.log(arr);

// arr.unshift("Awanish_Kumar Singh");  // pushes at the left of array or top of array

// console.log(arr);

// arr.toString();

// console.log(arr);

// var arr = [1,2,3,4,3,2000,1000];
// console.log(arr)
// arr.sort();
// console.log(arr)  // sorts the elements according to the alphabets......

// 9. String methods

let myLovelyString = "Harry is a good boy";
// console.log(myLovelyString);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.slice(0, 10));
// d = myLovelyString.replace("Harry", "Manish");
// console.log(myLovelyString, d);

// 10. Date function
// date = new Date();
// console.log(date)
// console.log(date.getTime())
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getMinutes())
// console.log(date.getHours(0))


// 11. document different function
// console.log(document);
// console.log(document.location);

// document.getElementById("button").click();
// document.getElementById("button").style.border = "2px solid blue";

// var element = document.getElementById("button")
// console.log(element)
 
// var element = document.getElementsByClassName("container")
// console.log(element);
// element[0].style.background ="yellow"
// element[0].classList.add("awanish");  //adding class to a element.
// element.classList.remove("awanish")   // removing a class from a element.

// el = document.getElementsByTagName("div")
// console.log(el)

// el = document.getElementById("button");
// console.log(el)
// console.log(el.innerHtml);
// console.log(el.innerText)

// el = document.getElementsByTagName("div")
// createdElement = document.createElement("p");
// createdElement.innerText  = "This is Awanish kumar singh"
// el[0].appendChild(createdElement);
// //We can even replace elements
// createdElement2  = document.createElement('b')
// createdElement.innerText = 'This is bold'
// el[0].appendChild(createdElement2,createdElement);
// el[0].removeChild(createdElement2);
// el[0].removeChild(createdElement);

// console.log(document.location);
// console.log(document.URL);
// console.log(document.scripts);
// console.log(document.title)

// document.domain, document.forms etc.......

// el = document.querySelector('.container')
// console.log(el)


// el = document.querySelectorAll('.container');
// console.log(el[0]);

//we can even select the event also
 
// using html onclick method

function clicked(){
    console.log('This is the boy I was talking about');
}

// window.onload = function(){
//     console.log('The doment was loaded');
// }


//

// 12. events in java scripts

// firstContainer.addEventListener('click', function(){

//     console.log('This is awanish')
// })

// firstContainer.addEventListener('mouseover', function(){

//     console.log('Mouse is hovering'); 
// })

// firstContainer.addEventListener('mouseout', function(){

//     console.log('Mouse is out of the station')
// })

// firstContainer.addEventListener('mouseout', function(){

//     console.log('Mouse is out of the station')
// })


// firstContainer.addEventListener('mouseup', function(){

//     console.log('Mouse is up when clicked')
// })

// firstContainer.addEventListener('mousedown', function(){

//     console.log('Mouse is down when clicked')
// })


// Arrow function
// function sum(a , b){
//     return a + b;
// }

// sum = (a,b)=>{
//     return a + b;
// }

// console.log(sum(45,60));

logKaro = ()=>{
    alert('HEllo Bachu')
}

// setTimeout(logKaro, 3000); It runs the following code only one time.


//runs the following code multiple time
// setInterval(() => {
//   alert('Hello bachhu');  
// }, 2000);

//or
// setInterval(logKaro, 2000);



// 13. local storage in JS

// localStorage.setItem('name','Awanish');
// console.log(localStorage)
// nam  = localStorage.getItem('name')
// console.log


// 14. Json object - JavaScript Object Notation  - standard file format
// obj = {name:"Awanish", length:7};
// jso = JSON.stringify(obj);
// console.log(jso)
// console.log(typeof jso);
// parsed = JSON.parse(`{"name":"Awanish","length":7}`);
// console.log(parsed)
// console.log(typeof parsed)


// Use of back ticks  ---  ``
// var a = 10;
// console.log("This is my ", a);
// // using backticks 
// console.log(`This is my ${a}`);


















