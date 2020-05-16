function mul(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        };
    };
}

const result = mul(3)(2)(4);
console.log(result);