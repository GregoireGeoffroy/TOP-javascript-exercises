const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        const ageOfOldest = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const ageOfPerson = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        
        return ageOfPerson > ageOfOldest ? person : oldest;
    });


};

// Do not edit below this line
module.exports = findTheOldest;
