/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

let sOne = process.argv[2]
let sTwo = process.argv[3]


const longest = (sOne, sTwo) => {
    let arrOne = sOne.split("")
    let arrTwo = sTwo.split("")
    let combinedArr = [...arrOne, ...arrTwo].sort()

    return combinedArr.filter((item, index) => combinedArr.indexOf(item) === index).join("")    
}

console.log(`Final Function: `, longest(sOne, sTwo))
