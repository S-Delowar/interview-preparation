function getNthFibonacci(n) {
    const fibo = [0, 1]

    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo[n];
}

//test
console.log(getNthFibonacci(7));  //13
console.log(getNthFibonacci(6));  //8