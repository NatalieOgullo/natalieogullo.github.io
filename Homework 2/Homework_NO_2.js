// 1.

let x = 1;
let y = 2;

let res1 = ""+x+y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = "" + Boolean(x)+y// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x<y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseInt("xy"); // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

// 2.
let myNumber = prompt("Enter the number");
if (myNumber >0 && myNumber%2===0)
    console.log(myNumber + " is even positive number")
else if (myNumber%7===0)
    console.log(myNumber + " is divisible by 7")
else console.log(myNumber + " is neither even positive number nor divisible by 7")


// 3.
let myArray = [];
myArray [0] = 69;
myArray [1] = "Some string";
myArray [2] = 5>>1;
myArray [3] = null;
console.log(myArray.length);
console.log(myArray);
myArray [4] = prompt("Add something");
console.log(myArray[4]);
console.log(myArray.shift());
console.log(myArray);

// 4
let cities = ["Rome", "Lviv", "Warsaw"];
let citiesNew = cities[0]+"*"+cities[1]+"*"+cities[2];
console.log(citiesNew);

//5
let isAdult = prompt("How old are you?");
if (isAdult >= 18) {
    console.log("You are adult");
}
else if (isAdult <= 10) {
    console.log("You are too small");
}
else {
    console.log("Nothing to say");
}

//6
let a = Number (prompt("Enter side a"));
let b = Number (prompt("Enter side b"));
let c = Number (prompt("Enter side c"));
if (isNaN(a) === false && isNaN(b) === false && isNaN(c) === false) {
    if (a+b<=c || b+c<=a || a+c<=b) {
        console.log("Not a triangle");
    }
    else {
        let p = (a+b+c)/2;
        console.log((p*(p-a)*(p-b)*(p-c))**(1/2));
        if ((c**2 === a**2 + b**2) || (a**2 === c**2 + b**2) || (b**2 === c**2 + a**2)) {
            console.log("The triangle is rectangular");
        }
        else {
            console.log("The triangle is not rectangular")
        }
    }
}
else {
    console.log("Incorrect data");
}

//7

let currentTime = new Date().getUTCHours()+new Date().getTimezoneOffset()/60;
console.log("Current time is: " + currentTime);
if (currentTime > 23 || currentTime < 5)
{
    console.log("Good night!!");
}
if (currentTime >= 5 && currentTime < 11)
{
    console.log("Good morning");
}
if (currentTime >= 11 && currentTime < 17)
{
    console.log("Good afternoon");
}
if (currentTime >= 17 && currentTime < 23)
{
    console.log("Good evening");
}

switch (true)
{
    case currentTime > 23 || currentTime < 5:
        console.log("Good night!!");
        break;
    case currentTime >= 5 && currentTime < 11:
        console.log("Good morning");
        break;
    case currentTime >= 11 && currentTime < 17:
        console.log("Good afternoon");
        break;
    case currentTime >= 17 && currentTime < 23:
        console.log("Good evening");
        break;
}



