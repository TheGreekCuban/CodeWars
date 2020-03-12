var isAnagram = function(test, original) {

    const mapBuilder = object => {
      let map = object.toLowerCase().split("").reduce((object, letter) => {
        if(letter in object) {
          object[letter]++;
        } else {
          object[letter] = 1
        }
        return object
      }, {})
      
      return map
    }
    
    let testMap = mapBuilder(test)
    let origMap = mapBuilder(original)
    
    if(Object.keys(testMap).length !== Object.keys(origMap).length) {
      return false
    }
        
    for(let prop in testMap) {
      if(testMap[prop] !== origMap[prop]) {
        return false
      }
    }
    return true
  };