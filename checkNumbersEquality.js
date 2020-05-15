function areTheNumbersAlmostEqual(num1, num2) {
    return Math.abs(num1 - num2) < Number.EPSILON;
}

//test:
console.log(areTheNumbersAlmostEqual(22, 22.0000000001));