function isPrime(n) {
    var divisor =2;

    while(n > divisor) {
        if(n % divisor == 0) {
            return false;
        } else {
            divisor++;
        }
    }
    return true;
}
//test
console.log(isPrime(79))  //true
console.log(isPrime(794))  //false
