/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

// Intuitive Approach

function palindromeChecker(text) {
    let reversedText = text.toLowerCase().split('').reverse().join('')
    
    return text === reversedText
}

// Looping through and Comparing Characters

function palindromeChecker(text) {
    let charArray = text.toLowerCase().split('')
    
    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index - 1];
    })
    
    /* we use a special array method .every() to loop through the array 
    and perform our check. Basically, the .every() method tests whether 
    all elements in the array pass the test implemented by the provided 
    function. The provided function in our case accepts the current 
    letter and its index in the array as parameters. Then we return the 
    result of the comparison between the letter and the letter currently 
    occupying the position this letter would assume if the string was 
    reversed. Learn more about .every() here. */

    
    return result
    
}



// Looped through and comparing characters (optimized)

function palindromeChecker(text) {
    let textLength = text.length
    for (var i = 0; i < text.length/2; i++) {
        if (text[i] !== text[textLength - 1 - i]) {
            return false;
        }
    }
    return true


    

module.exports = palindromeChecker;
