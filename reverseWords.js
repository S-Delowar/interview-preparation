function reverseWords(word) {
    let reverse = word.split(" ").reverse().join(" ");
    return reverse;
}

//test -
const sentence = "I am from    Bangladesh";
console.log(reverseWords(sentence))