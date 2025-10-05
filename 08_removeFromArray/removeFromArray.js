const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (args.includes(element)) {
            arr.splice(i, 1);
            i--;
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
