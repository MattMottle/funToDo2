// Create a function that accepts a number as an input. Return a new array that counts down by one, 
// from the number (as array’s ‘zeroth’ element) 
// down to 0 (as the last element). How long is this array?

// function countdown(num) {
//     newArr = [];
//     for(let i = num; i >= 0; i--) {
//         newArr.push(i);
//     }
//     return newArr;
// }

// console.log(countdown(20))

// Your function will receive an array with two numbers. Print the first value, and return the second.

// function printAndReturn(arr) {
//     console.log(arr[0]);
//     return arr[1];
// }

// printAndReturn([3,4]);

// Given an array, return the sum of the first value in the array, plus the array’s length. 
// What happens if the array’s first value is not a number, but a string (like "what?") or a 
// boolean (like false).

// function firstPlusLength(arr) {
//     let sum = arr[0] + arr.length;
//     return sum;
// }

// console.log(firstPlusLength([40,30,20,10]));

// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

// function greaterThanSecond(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > arr[1]) {
//             console.log(arr[i]);
//             sum++;
//         }
//     }
//     return sum;
// }

// greaterThanSecond([1,3,5,7,9,13]);

// Write a function that accepts any array, and returns a new array with the array values that are greater 
// than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

// function greaterThanSecond(arr) {
//         greater = [];
//         for(let i = 0; i < arr.length; i++) {
//             if(arr[i] > arr[1]) {
//                 console.log(arr[i]);
//                 greater.push(arr[i]);
//             }
//         }
//         console.log("values: "+ greater.length)
//         return greater;
//     }

//     greaterThanSecond([1,2,3,4,5])

// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

// function lengthValue(num1, num2) {
//     arr = []
//     for(let i = 0; i < num1; i++) {
//         arr.push(num2);
//     }
//     if(num1 === num2) {
//         console.log("Jinx!")
//         return arr;
//     } else{
//         return arr;
//     }
// }

// console.log(lengthValue(9, 9))

// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; 
// if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

// function fit(arr) {
//     if(arr[0] > arr.length) {
//         console.log("Too Big!");
//     }
//     else if(arr[0] < arr.length) {
//         console.log("Too small!");
//     }
//     else {
//         console.log("Just right!")
//     }
// }

// fit([4,7,3,5,6]);

// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) 
// that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as 
// expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

// function fahrenheitToCelsius(fDegrees) {
//     let celsius = 5/9 * (fDegrees - 32);
//     console.log(celsius.toFixed(1));
//     return celsius;
// }

// fahrenheitToCelsius(78)

// Celsius to fahrenheit

function celsiusToFahrenheit(cDegrees) {
    let f = (9/5 * cDegrees) + 32;
    console.log(f.toFixed())
    return f;
}

celsiusToFahrenheit(26)