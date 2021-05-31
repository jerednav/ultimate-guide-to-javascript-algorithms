/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


//Chaining in-built methods
function reverseString(text) {
    return text.split("").reverse().join("")
}

//The For Loop Way
function reverseString(text) {
       let result = ""
       
       for(let i = text.length - 1; i>= 0; i--) {
            result += text[i]
       }
    
        return result
    
}


module.exports = reverseString
