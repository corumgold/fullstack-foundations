/* eslint-disable no-unused-vars */

//solveCount = 2;

function pigify(str) {
    const VOWELS = 'aeio'

    return str.split(' ').map(word => {
        let firstVowelIdx;
        for (let char of word) {
            if (VOWELS.includes(char)) {
                firstVowelIdx = word.indexOf(char);
                break;
            }
        }
        return word.slice(firstVowelIdx) + word.slice(0, firstVowelIdx) + 'ay'
    }).join(' ')
}