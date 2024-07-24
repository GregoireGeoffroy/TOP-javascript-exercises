const sumAll = function(a, b) {
    // Check if either a or b is not a positive integer
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
        return "ERROR";
    }

    // Ensure a is less than b for simplicity in looping
    if (a > b) {
        [a, b] = [b, a]; // Swap a and b if a is greater than b
    }

    let sum = 0; // Initialize sum to 0

    while (a <= b) { // Use <= to include both a and b
        sum += a; // Add a to sum
        a++; // Increment a
    }
    
    return sum; // Return the total sum after the loop
};

// Do not edit below this line
module.exports = sumAll;
