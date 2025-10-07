const palindromes = function (str) {
    let isPalindromes = true;
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let counter = str.length - 1;
    for (let i = 0; i < str.length; i++) {
        const forward = str[i];
        
        for (let j = counter; j > 0; j--) {
            const backword = str[j];
            if (forward === backword) {
                counter--;
                break;
            }

            isPalindromes = false;
            return isPalindromes;
        }
    }

    return isPalindromes;
};

// Do not edit below this line
module.exports = palindromes;
