function enqueue(stackInput, item) {
    return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
    if(stackOutput.length <= 0) {
        while(stackInput.length > 0) {
            const elementToOutput = stackInput.pop();
            stackOutput.push(elementToOutput);
        }
    }

    return stackOutput.pop()
}

//test
// const result = enqueue([1,2,3,44,100], 120);
// console.log(result);

const result = dequeue([1,2,3,44,100], []);
console.log(result);
