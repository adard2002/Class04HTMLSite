'use strict';
console.log(userName);
var userName = prompt('Please enter your first name.');
alert('Hello ' + userName + ', click ok to go to page.');
var today = new Date();
console.log(today);




var hourNow = prompt('What is the current time of day?, Military time 0-23');
var greeting;

function runGreeting(){

if (hourNow > 18 && hourNow < 24) { 
    greeting = 'Good evening.' + userName + '!';
} else if (hourNow > 12 && hourNow < 18 ) {
    greeting = 'Good afternoon, ' + userName + '!';
} else if (hourNow >= 0 && hourNow < 12 )
{
    greeting = 'Good Morning';
} else {
    greeting = "Something went wrong!";
 }

 document.write('<h1 style="color:yellow">' + greeting + '</h1>');

} //this closes the function

runGreeting();