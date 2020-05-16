function createBase(baseNumber) {
    return function(anotherNumber) {
        return baseNumber + anotherNumber;
    }
}

const add = createBase(6);
console.log(add);   // [Function]
console.log(add(5));  // 11
console.log(add(30));   //36 (every add(n) will be added to base)

const add2 = createBase(250);
console.log(add2);   // [Function]
console.log(add2(5));  // 11
console.log(add2(30));   //36 (every add(n) will be added to base)
