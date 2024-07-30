const fibonacci = function(countArg) {
    let count
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg
    }

    if (count < 0) {
        return "OOPS"
    }
    if (count === 0) {
        return 0
    }
    if (count === 1 || count === 2) {
        return 1;
    }

    let a = 1, b = 1;
    for (let i = 3; i <= count; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
