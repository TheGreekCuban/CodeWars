let text = process.argv[2]


const duplicateCount = text => {
    let counterObj = {}
    let counter = 0

    //First we make all the text lowercase, split each letter into an array and then run foreach on it. With foreache we are checking to see if counterObje[element] which is equivalent to the key in the counterObj object is present. If it is, it adds one to its current value, if it is not it sets the value equal to 0 and then adds one.
    text.toLowerCase().split("").forEach(element => {counterObj[element] = (counterObj[element] || 0) + 1})

    //Here we are console.logging the counterObj to see if we are constructing an object with all the key value pairs correctly.
    console.log(`Counter: ${JSON.stringify(counterObj)}`)

    //Lastly, we are creating an array of all the values in the counter object and running for each on that array. If the number in the array is greater than one, that means that the letter showed up more than once and the counter number should be incremented. Otherwise, counter will stay the same.
    Object.values(counterObj).forEach(element => element > 1 ? counter += 1 : counter === counter)

    return counter
}

console.log(duplicateCount(text))

/*

function duplicateCount(text){
    Here we start off the same way, creating an all lowercase string and then splitting each letter into an array. Then we run filter on that array. With filter we only add the element into the filtered array if there are duplicates. The way this works is as follows:
        a. the indexOf(val) will always return the index of the first element that matches value, so if i !== to the index of the first match, that must mean there are duplicates.
        b. the other side of the && says that in addition to condition a, the final index of the final occurence of val, must be equal to i, which is always the case.
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }


let array = [8, 1, 2, 4, 7, 9, 5, 5, 7, 10, 4, 6, 7, 2, 3, 6, 4, 5, 10]

console.log(`IndexOf 2: ${array.indexOf(2)}, LastIndexOf 2: ${array.lastIndexOf(2)}`)

console.log(`Array Filtered: ${array.filter(function(val, i, arr){
    console.log(`I: ${i}`)
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  })}`)

*/