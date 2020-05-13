function fibonacciNthRecursive(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciNthRecursive(n - 1) + fibonacciNthRecursive(n - 2)
    }
}

//test
console.log(fibonacciNthRecursive(7));  //13
console.log(fibonacciNthRecursive(12));  //8