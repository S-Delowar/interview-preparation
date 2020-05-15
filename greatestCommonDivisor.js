function greatestCommonDivisor(a, b) {
    let divisor = 2;
    let greatestCommonDivisor = 1;

    if(a < 2 || b < 2) {
        return 1;
    }
    while( a >= divisor && b >= divisor ) {
        if(a % divisor === 0 && b % divisor === 0) {
            greatestCommonDivisor = divisor;
        }
        divisor++;
    }
    return greatestCommonDivisor;
}
console.log(greatestCommonDivisor(10,15));  //5
console.log(greatestCommonDivisor(101,503));  //1

console.log(10 % 15)
console.log(15 % 10)