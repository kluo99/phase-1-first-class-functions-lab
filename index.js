// Code your solution in this file!

const returnFirstTwoDrivers = function(arr) {
    let emptyArr = []
    for(let i = 0; i < 2; i++) {
        emptyArr.push(arr[i]);
    }
    return emptyArr;
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
        return integer * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, func) {
    return func(arr);
}