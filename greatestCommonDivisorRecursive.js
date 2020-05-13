function greatestCommonDivisorRecursive(a, b) {
    if (b == 0) {
        return a;
    } else {
        return greatestCommonDivisorRecursive(b, a%b)
    }
}

//test
console.log(greatestCommonDivisorRecursive(10,15));  //5
