const sumAll = function(a, b) {

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
