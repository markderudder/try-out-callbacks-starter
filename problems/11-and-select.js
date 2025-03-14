/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:



*******************************************************************************/

let andSelect = function(array, cb1, cb2) {
    // let new_arr = [];

    let new_arr = array.filter(function(el) {
        return (cb1(el) && cb2(el));
    })

    // for (let el of array) {
    //     if (cb1(el) && cb2(el)) {
    //         new_arr.push(el);
    //     }
    // }
    return new_arr;
};



let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase, startsWithA));
// [ 'APPLES', 'ART' ]



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = andSelect;
