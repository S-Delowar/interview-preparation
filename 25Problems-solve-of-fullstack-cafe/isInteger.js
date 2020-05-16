function isInt(num) {
    return num % 1 === 0;
}

console.log(isInt(20));  //true
console.log(isInt(20.5));  //false

// we can do it easily with this- 
console.log(Number.isInteger(30.444));