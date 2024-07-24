const repeatString = function(string, num) {
    if (num < 0) {
        return ''; // Return an empty string for negative numbers
    }
    return string.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
