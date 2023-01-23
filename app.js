// console.log('app.js reporting for duty..');

// SECTION Power Function (basic):

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

// console.log(power(2, 10));


// SECTION - Power function (recursive)

function powerRec(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * powerRec(base, exponent - 1);
    }
}

// console.log(powerRec(2, 4));


// SECTION - recursion, findSolution function:
// NOTE By starting from the number 1 and repeatedly either adding 5 or multiplying 3, an infinite set of numbers can be produced. Write a function that, given a target number to reach, tries to find a sequence of such additions and multiplications that produce that target:

// NOTE - This program isn't looking for the shortest sequence of operations -- it simply is looking for any sequence at all:

function findSolution(target) {
    function find(current, history) {
        if (current === target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(13));