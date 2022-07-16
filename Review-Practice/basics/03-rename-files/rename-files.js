/* eslint-disable no-unused-vars */

//solveCount = 2;

function renameFiles(arr) {
    return arr.reduce((acc, curr) => {
        if (!acc.includes(curr)) acc.push(curr);
        else {
            let incrementer = 1
            while(acc.includes(`${curr}(${incrementer})`)) {
                incrementer++
            }
            acc.push(`${curr}(${incrementer})`)
        }
        return acc;
    }, [])
}