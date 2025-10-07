const findTheOldest = function(people) {
    return people
        .sort((a, b) => {
            const getAge = person => {
                const death = person.yearOfDeath ?? new Date().getFullYear();
                return death - person.yearOfBirth;
            }

            return getAge(b) - getAge(a);
        })
        .at(0);
};

// Do not edit below this line
module.exports = findTheOldest;
