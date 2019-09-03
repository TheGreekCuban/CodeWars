let text = process.argv[2]


const duplicateCount = text => {
    let counterObj = {}
    let counter = 0

    //First we make all the text lowercase, split each letter into an array and then run foreach on it. With foreache we are checking to see if counterObje[element] which is equivalent to the key in the counterObj object is present. If it is, it adds one to its current value, if it is not it sets the value equal to 0 and then adds one.
    text.toLowerCase().split("").forEach(element => {counterObj[element] = (counterObj[element] || 0) + 1})

    console.log(`Counter: ${JSON.stringify(counterObj)}`)

    Object.values(counterObj).forEach(element => element > 1 ? counter += 1 : counter === counter)

    return counter
}

console.log(duplicateCount(text))

/*
function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }
*/

practiceO = {
    a: 22,
    b: 2,
    c:22
}

console.log(practiceO["a"])