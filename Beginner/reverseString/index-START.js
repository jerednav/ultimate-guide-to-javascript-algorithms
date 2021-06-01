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


//for... of statement
function reverseString(text){
    let result = "";
    
    for(let char of text) {
        result = char + result
    }
    
    return result;
}

//recursive statement
function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    }
}

module.exports = reverseString
