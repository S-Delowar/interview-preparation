function primeFactorsOf(n) {
    let divisor = 2;
    let factors = []

    while(n > 2) {
        if(n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}

//test
console.log(primeFactorsOf(69));   //[ 3, 23 ]
console.log(primeFactorsOf(100));  //[ 2, 2, 5, 5 ]