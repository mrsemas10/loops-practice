// https://exercism.org/tracks/javascript/concepts/while-loops 
// list one thing that was helpful or new: 
// The break keyword cannot be used inside a function that is nested in the loop

// https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops/cheatsheet
// list one thing that was helpful or new: 
// An array’s length can be evaluated with the .length property. This is extremely helpful for 
// looping through arrays, as the .length of the array can be used as the stopping condition in the loop.

// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php
// JavaScript conditional statements and loops [ 12 exercises with solution]

// 1. Write a JavaScript program that displays the largest integer among two integers.
console.log('_______________1___________________')

let num1=2; 
let num2=3;

if (num1>num2)
  { 
  console.log("The larger of the two is " + num1);
  }   
else
  if (num1<num2)
  {
  console.log("The larger of the two is " + num2);
  }                  
else
  {
   console.log("The two numbers are equal.");
  }


// 2. Write a JavaScript conditional statement to find the sign of the product of three numbers. 
// Display an alert box with the specified sign. (unsure what an alert box is or how to do it)
console.log('________________2__________________')

let x=3;
let y=-7;
let z=2;

if (x>0 && y>0 && z>0) {
    // if all are positive the product is positive
  console.log("The sign is +");
} else if (x<0 && y<0 && z<0) {
    // if all are negative the product is negative
  console.log("The sign is -");
} else if (x>0 && y<0 && z<0) {
    // if 2 are negative the product is positive
  console.log("The sign is +");
} else if (x>0 && y<0 && z>0) {
    // if 1 is negative the product is negative
  console.log("The sign is -");
}

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
console.log('_________________3_________________')

let a=-1;
let b=4;
let c=0;

if (a>b && a>c) {
    if (b>c) {
        console.log(a + ", " + b + ", " + c);
    } else {
        console.log(a + ", " + c + ", " + b);
    }
} else if (b>a && b>c) {
    if (a>c) {
        console.log(b + ", " + a + ", " + c);
    } else {
        console.log(b + ", " + c + ", " + a);
    }
} else if (c>a && c>b) {
    if (a>b) {
        console.log(c + ", " + a + ", " + b);
    } else {
        console.log(c + ", " + b + ", " + a);
    }
} 

// 4. Write a JavaScript conditional statement to find the largest of five numbers.
console.log('__________________4________________')

let n1=-5;
let n2=-2;
let n3=-6;
let n4=0;
let n5=-1;

if (n1>n2 && n1>n3 && n1>n4 && n1>n5) {
    console.log(n1);
} else if (n2>n1 && n2>n3 && n2>n4 && n2>n5) {
    console.log(n2);
} else if (n3>n1 && n3>n2 && n3>n4 && n3>n5) {
    console.log(n3);
} else if (n4>n1 && n4>n3 && n4>n2 && n4>n5) {
    console.log(n4);
} else {
    console.log(n5);
} 
// 5. Write a JavaScript for loop that iterates from 0 to 15. 
// For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
console.log('_________________5_________________')

for (let g=0; g<=15; g++) {
    if (g === 0) {
        console.log(g + " is even");
    }
    else if (g%2 === 0) {
        console.log(g + " is even");
    }
    else {
        console.log(g + " is odd");
    }
} 

// 6. Write a JavaScript program that computes the average marks of the following students. 
// Then, this average is used to determine the corresponding grade.
console.log('________________6__________________')

const students=[['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
let avgMarks=0;

for (let h=0; h<students.length; h++) {
    avgMarks+=students[h][1];
    var avg=(avgMarks/students.length);
}
console.log("Average score: " + (avgMarks)/students.length);

if (avg<60) {
    console.log("Grade: F");
} else if (avg<70) {
    console.log("Grade: D");
} else if (avg<80) {
    console.log("Grade: C");
} else if (avg<90) {
    console.log("Grade: B");
} else if (avg<=100) {
    console.log("Grade: A");
} 

// 7. Write a JavaScript program that iterates integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". 
// For numbers multiples of both three and five print "FizzBuzz".
console.log('________________7__________________')

for (let i=1; i<=100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i%5 === 0) {
        console.log("Buzz");
    }
    else if (i%3 === 0) {
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
} 

// 8. According to Wikipedia a happy number is defined by the following process:
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, 
// and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle 
// which does not include 1. Those numbers for which this process ends in 1 are happy numbers, 
// while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers. (i do not understand this one at all!)
console.log('_____________8_____________________')

// Function to check if a number is a happy number
function happy_number(num) {
    var m, n;
    var c = [];

    // Continue loop until the number becomes 1 or enters a cycle
    while (num !== 1 && c[num] !== true) {
        c[num] = true;
        m = 0;

        // Calculate the sum of the squares of digits
        while (num > 0) {
            n = num % 10;
            m += n * n;
            num = (num - n) / 10;
        }

        num = m;
    }

    return (num === 1);
}

// Variables to track the count and current number
var cnt = 5;
var num = 1;
var f5 = '';

// Find the first 5 happy numbers
while (cnt-- > 0) {
    while (!happy_number(num))
        num++;

    f5 = f5 + (num + ", ");
    num++;
}
console.log('First 5 happy numbers are: ' + f5); 


// 9. Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the 
// cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number 
// since 3**3 + 7**3 + 1**3 = 371. (also do not understand this one)

console.log('______________9____________________')

function three_digit_armstrong_number() {
    for (var i = 1; i < 10; ++i) {
        for (var j = 0; j < 10; ++j) {
            for (var k = 0; k < 10; ++k) {
                // Calculate the cube of each digit and sum them
                var pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
                // Calculate the number formed by the digits
                var plus = i * 100 + j * 10 + k;

                // Check if the sum of cubes is equal to the number
                if (pow === plus) {
                    console.log(pow);
                }
            }
        }
    }
}

// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.

console.log('________________10__________________')

let symbol = '' 
for(let k=0; k<5; k++) {
    symbol = symbol + '*'
    console.log(symbol);
    
}

// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

console.log('_______________11___________________')

// Variables to store the two numbers for which GCD is calculated
let m1=808; 
let m2=1986;  
var gcd;

while (m1!=m2) {
    if (m1>m2) {
        m1=m1 - m2;
    } else {
        m2=m2 - m1;
    }
}
gcd=m1;
console.log(gcd); 

// 12. Write a JavaScript program to sum 3 and 5 multiples under 1000.

console.log('_______________12___________________')

let sum=0;

for (let p=500; p<1000; p++) {
    if (p%3 === 0 || p%5 === 0) {
        sum+=p;
    }
}
console.log(sum); 

// https://education.launchcode.org/intro-to-professional-web-dev/chapters/loops/exercises.html
// 9.9. Exercises: Loops

// 9.9.1. for Practice
    // Exercise 1: Construct for loops that accomplish the following tasks:
    console.log('_______________1___________________')
    
    for (let i=0; i<=20; i++) {
        if (i%3 === 0 && i%5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i%5 === 0) {
            console.log("Buzz");
        }
        else if (i%3 === 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    } 

    for (let g=0; g<=20; g++) {
        if (g === 0) {
            console.log(g + " is even");
        }
        else if (g%2 === 0) {
            console.log(g + " is even");
        }
        else {
            console.log(g + " is odd");
        }
    } 

    // Exercise 2: Initialize two variables to hold the string 'LaunchCode' and 
    // the array [1, 5, 'LC101', 'blue', 42], then construct for loops to accomplish the following tasks:
    console.log('_______________2___________________')

    // Exercise 3: Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] 
    // into two new arrays:
    console.log('_______________3___________________')

// 9.9.2. while Practice
    // Exercise 4: Construct while loops to do the following:
console.log('_______________4___________________')

    // Exercise 5: After the loops complete, output the result with the phrase, 
    // The shuttle gained an altitude of ___ km.
console.log('_______________5___________________')
