
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

    english = "saffbeaofbeof"

    const toLeetSpeak = english => {
    
      //Must destructure the object to have all properties saved to their letter variables
      let newObject = { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z  } = object
      let newEnglish = [ ...english.toUpperCase() ]
      let finalString = ""

      newEnglish.forEach(letter => {
          if (letter == newObject.hasOwnProperty(letter)) {
              finalString += newObject.letter
          }
      })
      console.log(`final string: ${finalString}`)
      return finalString  
    }

  
toLeetSpeak(english)
