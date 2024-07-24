const removeFromArray = function(array, ...elements) {
    elements.forEach(element => {
        array = array.filter(item => item !== element);
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
