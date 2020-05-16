function reverseBySeparator(str, separator) {
    return str.split(separator).reverse().join(separator);
}

const str = 'Welcom to Bangladesh';
const reverseEntireSentence = reverseBySeparator(str, '');
const reverseEachWord = reverseBySeparator(reverseEntireSentence, ' ');
console.log(reverseEachWord);
