module.exports = function (readline, print) {
    const widthLetter = parseInt(readline());
    const heightLetter = parseInt(readline());
    const userWord = readline().toUpperCase();

    const nthLetter = nth => String.fromCharCode('A'.charCodeAt(0) + nth);
    const alphabet = {};

    for (let letterRowIndex = 0; letterRowIndex < heightLetter; letterRowIndex++) {
        const letterRow = readline();

        // From A to Z
        for(let i=0, h=0; i < widthLetter*26; i+=widthLetter, h++) {
            let letter = nthLetter(h);
            if (letterRowIndex === 0) {
                alphabet[letter] = [];
            }
            let part = letterRow.substr(i, widthLetter);
            alphabet[letter].push(part);
        }

        // Default Character
        if (letterRowIndex === 0) {
            alphabet.defaultChar = [];
        }
        alphabet.defaultChar.push(letterRow.substr(widthLetter*26, widthLetter));
    }

    for (let i = 0; i < heightLetter; i++) {
        let line = '';
        for(let j=0; j < userWord.length; j++) {
            if (alphabet[userWord[j]]) {
                line += alphabet[userWord[j]][i];
            } else {
                line += alphabet.defaultChar[i];
            }
        }
        print(line);
    }
};
