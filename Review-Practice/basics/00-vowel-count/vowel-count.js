/* eslint-disable no-unused-vars */

//solveCount = 2;

function vowelsCount(str) {
    return str.toLowerCase().split('').reduce((acc, curr) => {
        if (Object.keys(acc).includes(curr)) {
            acc[curr]++;
            acc['total']++;
        }
        return acc;
    }, {a: 0, e: 0, i: 0, o: 0, u: 0, total: 0})
}
