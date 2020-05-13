function stringReverse(str) {
    const reverse = str.split("").reverse().join("")
    return reverse;
}

//or -
// function stringReverse(str) {
//     let reverse = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i]
//     }
//     return reverse;
// }



console.log(stringReverse("Bangladesh"));