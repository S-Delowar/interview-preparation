//A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed
function modifyArray(arr, callback) {
    arr.push(100);
    callback();
}

let arr = [2,3,4];

modifyArray(arr, function() {
    console.log("Array has been modified", arr);
})
