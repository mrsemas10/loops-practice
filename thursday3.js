console.log('___warmup___');
let loopNumber=5;

while (loopNumber<=10) {
    console.log(loopNumber);
    loopNumber++; 
}


console.log('___problem1___');
let loggedIn=false;
let loopCounter=0

while(!loggedIn) {
    console.log(loopCounter);
    if(loopCounter===2) {
        loggedIn=true;
    }
    loopCounter++;
}
console.log("successfully logged in")

console.log('___problem2___');

let number=10
while (number <=40) {
    if (number%2==0)
        console.log(number);
    number++
}


console.log('___problem3___');
let count=1;
while(count<=100) {
    if (count===50) {
        console.log("half way there")
        count++;
        continue;
}    

    if (count===100) {
        console.log("you made it")
        count++;
        continue;
}    
    if (count%10==0) {
        console.log(`checkpoint ` + count);
    }
    count++;
}
console.log("all done")