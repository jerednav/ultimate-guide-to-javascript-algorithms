/* CHALLENGE
Given a sentence, return the longest word in the string. E.g

longestWord('Top Shelf Web Development Training on Scotch')
*/

//using for loop

function longestWord(text) {
    let wordsArray = text.split(' ')
    let maxLength = 0
    let result = ''
    
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length > maxLength) {
            maxLength = wordsArray[i].length
            result = wordsArray[i]
        }
}   
    return result
    
}


//using .reduce

function longestWord(text) {
    var result = text.split(' ').reduce(maxLength, currentWord) => {
        if (currentWord.length > maxLength) {
            return currentWord
        } else {
            return maxLength
        }
    }, "")
    return result

}


//using .sort()

function longestWord(text) {
    let sortedArray = text.split(' ').sort(wordA, wordB) => wordB.length - wordA.length)

    
module.exports = longestWord
