const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || a <= 0 || b <= 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    if (a > b) {
        [a, b] = [b, a]; // Swap a and b if a is greater than b
    }

    let sum = 0

    while (a <= b) {
        sum += a;
        a++;
      }
      return sum

};

// Do not edit below this line
module.exports = sumAll;
