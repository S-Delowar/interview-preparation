function fullName() {
    return `Hello, this is ${this.first} ${this.last}`;
}

console.log(fullName()) // Hello, this is undefined undefined

const person = {first: 'sayed', last: 'delowar'};

console.log(fullName.bind(person)());  // Hello, this is sayed delowar
