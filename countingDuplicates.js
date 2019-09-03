let text = process.argv[2]

const duplicateCount = text => {
    let counterObj = {}
    let counter = 0

    text.toLowerCase().split("").forEach(element => {counterObj[element] = (counterObj[element] || 0) + 1})

    console.log(`Counter: ${JSON.stringify(counterObj)}`)

    Object.values(counterObj).forEach(element => element > 1 ? counter += 1 : counter === counter)

    return counter
}

console.log(duplicateCount(text))