function duplicate(arr) {
    return [...arr, ...arr] ;  //or-  return arr.concat(arr);
}

console.log(duplicate([1,2,3,4]));

const a = ["c","d"]
const b = ["c","d"]
console.log(a === b)