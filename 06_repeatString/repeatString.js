const repeatString = function(str, times) {
    let repeatStr = '';
    if (times < 0) {
        return 'ERROR';
    }
    
    for (let i = 1; i <= times; i++) {
       repeatStr += str;
    }

    return repeatStr;
};

// Do not edit below this line
module.exports = repeatString;
