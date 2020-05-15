//Question: If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.
//function reverseInPlace(str) {
    //return str.split(' ').reverse().join(' ').split('').reverse().join('');
//}
function reverseInPlace(str) {
    const splitStr = str.split(' ');
    let reverseArr = [];

    for (let i = 0, len = splitStr.length; i < len; i++) {
        let word = splitStr[i];
        let reverse = '';

        for(j = word.length - 1; j >= 0; j--) {
            reverse += word[j];
        }
        reverseArr.push(reverse);
    }
    return reverseArr.join(' ');
}

//test:
const str = 'I am from Bangladesh';
console.log(reverseInPlace(str)); //I ma morf hsedalgnaB