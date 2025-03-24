// find the largest element from an array
// must flow
/**
 * Brute
 * Better
 * Optimal 
 */


// brute solution
/**
 * First of all sort the array
 * Accending order
 * And very last element should be the largest element from this array
 * console.log(array[array.length - 1]) // this is the largest element
 * Time complexity --> 0(NlogN)
 */




// optimal solution
/**
 * First assume the first element to the largest element
 * Then loop over the array elements and check if elements is greater than largest element or not
 * if yes then store this element to the largest element
 * here time complexity --> 0(N)
 */
let array = [3,2,1,5,2]
function findlargestElement(array){
    let largestElement = array[0]
    for (let i=1; i<array.length - 1; i++){
        if (array[i] > largestElement){
            largestElement = array[i]
        }
    }
    return largestElement
}
let largestElement = findlargestElement(array)
console.log(largestElement)