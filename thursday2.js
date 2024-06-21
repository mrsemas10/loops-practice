// https://education.launchcode.org/intro-to-professional-web-dev/chapters/loops/exercises.html
// 9.9. Exercises: Loops

// 9.9.1. for Practice
    // Exercise 1: Construct for loops that accomplish the following tasks:
    console.log('_______________1___________________')
    
    console.log('____a____')
    for (let a=0; a<=20; a++) {
        console.log(a);
    } 
    console.log('____b____')
    for (let b=3; b<=30; b++) {
        if (b%2 === 1) {
            console.log(b);
        }
    }
    console.log('____c____')
    for (let c=12; c>=-14; c--) {
        if (c%2 === 0) {
            console.log(c);
        }
    }
    console.log('____d____')
    for (let d=50; d>=20; d--) {
        if (d%3 === 0) {
            console.log(d);
        }
    }

  
    // Exercise 2: Initialize two variables to hold the string 'LaunchCode' and 
    // the array [1, 5, 'LC101', 'blue', 42], then construct for loops to accomplish the following tasks:
    console.log('_______________2___________________')
   
    // const arr = [1, 5, 'LC101', 'blue', 42];
    // for (let i=0; i<arr.length;i++) {
    //     if (arr[i] %2 === 0) {
    //         console.log('skipping even numbers')
    //         continue;
    //     }
    //     console.log(arr[i]);
    //     console.log(arr[i] * 2);
    // }


    // Exercise 3: Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] 
    // into two new arrays:
    console.log('_______________3___________________')

    const arr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
    for (let i=0; i<arr.length;i++) {
        if (arr[i] %2 === 0) {
            console.log('even')
            continue;          
        }
        else if (arr[i] %2 === 1) {
            console.log('odd')
            continue;
        }
        console.log(arr[i]);
    }

// 9.9.2. while Practice (not completely sure what i am doing wrong here but the output is not running and the solution is not helping me understarnd)
    // Exercise 4: Construct while loops to do the following:
console.log('_______________4___________________')

let fl=15000; // fuel level
let noa=5; // number of astronauts
let alt=2000; // altitude

while (fl<=5000 || fl>3000) {
    fl=("what is your fuel level: " + fl);
     console.log(fl);   
}

while (noa>=1 || noa<=7) {
    noa=("how many astronauts: " + noa);
    console.log(noa);
}

while (fl-100*noa >=0) {
    alt+=50;
    fl-+100*noa;
    console.log(alt)

}

    // Exercise 5: After the loops complete, output the result with the phrase, 
    // The shuttle gained an altitude of ___ km.
    console.log('_______________5___________________')


let output= `The shuttle gained an altitude of ${alt} km.`;

if (alt >=2000) {
    output += " Orbit acheived";
} else {
    output += " failed to reach orbit";
}
    

