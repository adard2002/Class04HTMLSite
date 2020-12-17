










var greeting;

var userName = prompt('Please enter your first name.');

console.log(userName);

var today = new Date();
console.log(today);

var hourNow = prompt('What is the current time of day?, Military time 0-23');



// I did try to do what Craig did but I might've missed something I'm not sure. I'll try to look through this tomorrow again. Sorry it's getting a bit late and I've been stressing all day over JS. css and html make a little bit more sense though.

if(hourNow > 18 && hourNow <24)
{
    greeting = 'Good Evening.';
} 
else if (hourNow > 12 && hourNow < 18 ) 
{
    greeting = 'Happy Afternoon.';
} 
else if (hourNow < 12 && hourNow > 0 )
{
    greeting = 'Good Morning';
}
else
 {
    greeting = "Something went wrong.. Sorry.";
 }



document.write('<h1>' + greeting + '</h1>');