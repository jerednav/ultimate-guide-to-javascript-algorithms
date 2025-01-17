/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

/*
 An iterative approach to counting the number of vowels in a string of text.
 */
const vowels = ['a','e','i', 'o', 'u']


function vowelsCounter(text) {
    //Initialize counter
    let counter = 0
    
    //Loop through text to test if each character is a vowel
    
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            couner++
        }
    }
    
    //Return number of vowels
    return counter
   
}


/*
 Using Regular Expressions to count the number of vowels in a string of text.
 */

function vowelsCounter(text) {
    //Search text with Regex and store all matching instances
    let matchingInstances = text.match(/[aeiou]/gi);
    
    
    
    // Check if matching instances exist then calculate length
    if (matchingInstances) {
        //Return number of vowels
        return matchingInstances.length
    } else {
        return 0
    }
}
    
module.exports = vowelsCounter;
