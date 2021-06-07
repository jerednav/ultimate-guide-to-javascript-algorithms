/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

//using a for... of loop
function falsyBouncer(array) {
    let result =[]
    //loop through with each array value
    for (value of array){
    // push into result if truthy
        if(value){
            result.push(value)
        }
    }
    return result
}

// Using filter

function falsyBouncer(array) {
    return array.filter((value) =>{
      return Boolean(value)     })
}




module.exports = falsyBouncer
