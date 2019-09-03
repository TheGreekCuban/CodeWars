  let object =  {
        A: '@',
        B: '8',
        C: '(',
        D: 'D',
        E: '3',
        F: 'F',
        G: '6',
        H: '#',
        I: '!',
        J: 'J',
        K: 'K',
        L: '1',
        M: 'M',
        N: 'N',
        O: '0',
        P: 'P',
        Q: 'Q',
        R: 'R',
        S: '$',
        T: '7',
        U: 'U',
        V: 'V',
        W: 'W',
        X: 'X',
        Y: 'Y',
        Z: '2'
    }


    const toLeetSpeak = english => {
    
        //Must destructure the object to have all properties saved to their letter variables
        let newObjectKeys = Object.keys(object)
        let newEnglish = [ ...english.toUpperCase() ]
        console.log(`new english ${newEnglish}`)
        console.log(`new object keys: ${newObjectKeys}`)
        let finalString = ''
        
        //Now that we have the input in an array, we can use map and take each letter then compare that to the object key name in the newObjectKeys array. If the values match we concat the property into an empty string.
        newEnglish.forEach(letter => {
          
          if (letter === " ")   {
            finalString += letter
          }
          newObjectKeys.map(key => {
              if(letter === key) { 
                finalString += object[letter]
              } 
          })
        })
        console.log(`final string: ${finalString}`)
        return finalString  
      }
  
  
toLeetSpeak(`HELLO WORLD`)

/*
BEST PRACTICES THIS USES THE REPLACE METHOD. IT ESSENTIALLY SAYS IF WE SEE ANY OF THOSE LETTERS IN THE STRING REPLACE THEM GLOBALY (G) WITH THE PROPERTY ASSOCIATED WITH THAT LETTER
const toLeetSpeak = s => s.replace(/[ABCEGHILOSTZ]/g, c => D[c]);

const D = {
  A: '@', B: '8', C: '(', E: '3',
  G: '6', H: '#', I: '!', L: '1',
  O: '0', S: '$', T: '7', Z: '2'
};

console.log(D["T"])
*/
