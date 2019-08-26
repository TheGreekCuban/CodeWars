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

/*
BEST INTERESTING SOLUTIONS
Set, which is a new data object introduced in ES6. Because Set only lets you store unique values. When you pass in an array, it will remove any duplicate values.
He uses the set object to remove any duplicates and combines both strings. at the same time he is destructuring that into an array, sorting it and then joining it back together. 

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
*/