for (let i = 0; i <= 100; i++) {
    let f = i % 3 === 0, b = i % 5 === 0;

    console.log(f ? (b ? 'fizzbuzz' : 'fizz') : b ? 'buzz': i)
}