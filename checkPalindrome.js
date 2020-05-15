function isPalindrome(str) {
    str1 = str.replace(/\W/g, '').toLowerCase();
    for (let i = 0, len = str1.length; i < len; i++) {
        if(str1[i] !== str1[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


//another solution(good)
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}
//test:
console.log(isPalindrome("madam"));  //true
console.log(isPalindrome("Hello"));  //false
console.log(isPalindrome("A car, a man, a maraca")) //true 