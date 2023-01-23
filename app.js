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

// console.log(findSolution(13));


// SECTION count cows and chickens

const printFarmInventory = (cows, chickens) => {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(cowString, 'Cows');
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString
    }
    console.log(chickenString, "Chickens");
}

// printFarmInventory(4, 11)

// const threeDigitNum = (number, label) => {
//     let numberString = String(number);
//     while (numberString.length < 3) {
//         numberString = "0" + numberString;
//     }
//     console.log(numberString, label);
// }

const zeroPad = (number, numOfDigits = 3) => {
    let string = String(number);
    while (string.length < numOfDigits) {
        string = "0" + string;
    }
    return string;
}

const updatedFarmInventory = (cows, chickens, pigs) => {
    console.log(`${zeroPad(cows)} Cows`);
    console.log(`${zeroPad(chickens)} Chickens`);
    console.log(`${zeroPad(pigs)} Pigs`);
}

updatedFarmInventory(11, 18, 22);