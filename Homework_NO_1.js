// 2.Display name and surname in separate file
alert(`Nataliia Ohullo`);

// 3. set 2 variables

let a;
let b;
a = "Hello!";
b = "Nice to meet you!";
console.log(a);
console.log(b);
a = b;
console.log(a);
console.log(b);

// 4. Create an object with 5 types

var dif_type_object = {
    varNumber: 25.5,
    varString: "Nataliia",
    varBoolean: true,
    varNull: null,
    varUndefined: undefined

};
console.log(dif_type_object);

// 5. Asking user's age using confirm

let isAdult = confirm ("Are you already 18?");
alert(isAdult);

// 6. Create different types of variables and display their type
let myName;
let mySurname;
let myGroup;
let myYearOfBirth;
myName = "Nataliia"
mySurname = "Ohullo";
myGroup = "JavaScript for TA 2021";
myYearOfBirth = 1900;

let isMarried = false;
console.log(typeof myYearOfBirth, myYearOfBirth);
console.log(typeof isMarried, isMarried);
console.log(typeof myName, myName, typeof mySurname, mySurname);

let undefVar;
console.log(typeof undefVar);
let nuVar = null;
console.log(typeof nuVar);

// 7. Ask user about email, login and password
let usersLogin = prompt("What is your login?");
let usersEmail = prompt("What is your e-mail?");
let usersPassword = prompt("What is your password?")
alert("Dear " + usersLogin + "! Your email is " + usersEmail + ", your password is " + usersPassword + ".");

// 8. Calculate amount of seconds
let secondsPerHour = 60*60;
let secondsPerDay = secondsPerHour*24;
let secondsPerMonth = secondsPerDay*30;
console.log(secondsPerHour + " seconds per hour");
console.log(secondsPerDay + " seconds per day");
console.log(secondsPerMonth + " seconds per month");






