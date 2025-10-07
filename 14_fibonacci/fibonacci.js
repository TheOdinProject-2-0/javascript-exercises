const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    let a = 0, b = 1;
    for (let i = 1; i < num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
