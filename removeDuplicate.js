function removeDuplicate(arr) {
    let result = []

    for (let i = 0, len = arr.length; i < len; i++) {
        let elem = arr [i];
        if(result.indexOf(elem) === -1) {
            result.push(elem);
        }
    }
    return result;
}

console.log(removeDuplicate([1,2,3,4,3,3]));
console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]))