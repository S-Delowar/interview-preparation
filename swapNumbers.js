function swapNumbers(a, b) {
    console.log(`before swap: a = ${a} and b = ${b}`);

    // b = b - a;
    // a = a + b;
    // b = a - b;

    [a, b] = [b, a];

    console.log(`after swap: a = ${a} and b = ${b}`)
}

//test
swapNumbers(10, 59);