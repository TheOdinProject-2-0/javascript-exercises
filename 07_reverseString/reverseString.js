const reverseString = function(str) {
    let array = str.split(' ');
    let reverseArray = [];
    for (const element of array) {
        let newWord = '';
        for (let i = element.length - 1; i >= 0; i--) {
            const char = element[i];
            newWord += char;
        }
        reverseArray.push(newWord);
    }
    str = reverseArray.reverse().join(' ');

    return str;
};

// Do not edit below this line
module.exports = reverseString;
