//1
let arrayOfNumbers = [2,3,4,5];
let result = 1;
for(let i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i]);
    result *=arrayOfNumbers[i];
};
console.log("The product of the array elements is "+ result);

let result2 = 1;
let i2 = 0;
while (i2 < arrayOfNumbers.length) {
    result2 *= arrayOfNumbers[i2];
    i2++;
}
console.log("The product (2) of the array elements is "+ result2);

//2
for (let checkNumber = 0; checkNumber <= 15; checkNumber++) {
    if (checkNumber % 2 === 0) {
        console.log(checkNumber + " is even");
    }
    else {
        console.log(checkNumber + " is odd");
    }
}

//3
function randArray (k) {
    let arrayOfRandomNumbers = [];
    for (let i3 = 0; i3 < k; i3++) {
        arrayOfRandomNumbers [i3] = Math.round(Math.random()*500)+1;
    }
    console.log(arrayOfRandomNumbers);
}

randArray(5);
randArray(8);

//4

function raiseToDegree (a,b)
{
    console.log("The degree of A is " + a ** b);
}

let varA = prompt( "Enter variable A");
let varB = parseInt(prompt( "Enter variable B"));
if (isNaN(varA) === false && isNaN(varB) === false)
{
    if (Number.isInteger(varA) === true && Number.isInteger(varB))
        {
             raiseToDegree(varA, varB);
        }
    else
        {
            console.log("Entered values are not integers ");
        }
}
else
{
    console.log("Entered values are not numbers")
}

// 5

function findMin () {
    let minValue = arguments[0];
    for (let i4 = 0; i4 < arguments.length; i4 ++){
        if (minValue > arguments[i4]) {
            minValue = arguments[i4]
        }
    }
    console.log("The minimum value is " + minValue);
}
findMin(3,5,1,8,0);
findMin(-100,100,-1000,5,8,2569);

// 6
function findUnique () {
    let funcResult = 0;
    for (let i5 = 0; i5 < arguments.length; i5++) {
        //funcResult = false;
        for (let j1 = 0; j1< arguments.length; j1++)
            if (arguments[i5] === arguments[j1] && i5 !== j1) {
                funcResult++;
            }
    }
    if (funcResult>0) {console.log(false);
    }
    else {console.log(true);
    }
}

findUnique(1, 2, 3, 5, 3);
findUnique(1, 2, 3, 5, 11);

// 7
function lastElem (a,c) {
      let b = [];
      if (isNaN(c) === true || c === 0 || c === undefined)
    {
        b.length=1;
    }
    else if (c<=a.length) {
        b.length = c;
            }
    else {
        b.length = a.length;
    }
    let a1 = a.length-1;
 for (let i6 = b.length-1; i6 >=0; i6--)
 { b[i6] = a[a1];
     a1--;
   }
    console.log(b);
}

lastElem ([2,3,5,8,48,-5],14);
lastElem ([1,2,3,4,5,6]);
lastElem ([23,28,36,-5,67.4],2);

//8
function stringToUppercase(myString) {
let newString;
if (myString.charAt(0) !== " ") {
    newString = myString.charAt(0).toUpperCase();
} else {
    newString = myString.charAt(0);
    }
for (let i7 = 1; i7 < myString.length; i7++) {
    if (myString.charAt(i7 - 1) === " ") {
        newString += myString.charAt(i7).toUpperCase();
        }
    else {
            newString += myString.charAt(i7);
        }
    }
    console.log(newString);
}

stringToUppercase(prompt("Input some phrase:"));

