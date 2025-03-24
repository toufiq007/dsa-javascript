
// second largest element from array
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
 * very last element is the largest element
 * now another loop with very last to the 0th index of the array
 * if largest !== array[i] --> that is called the second largest element and break the loop
 * 
 * problems:
 * if we don't have the second largest or we have many much duplicated item then it should take more time complexity
 * tc --> 0(N)
 */

// brute force solution
const array = [1,2,4,7,7,5]
// worst case --> [1,8,8,8,8,8,8] --> this may be the worst case

// step one -->  sort the array
// not use this built in function
const sortedArray = array.sort((a,b)=> a-b) // --> [1,2,4,5,7,7]

// step two --> compare with the largest element
function findSecondLargest(array){
    let n = array.length
    const largest = array[n - 1] // we are very much sure that it is the largest element
    let secondLargest;
    for (let i=n-1; i>-0; i--){
        if (array[i] != largest){
            secondLargest = array[i]
            break
        }
    }
    return secondLargest
}
let secondLargest = findSecondLargest(sortedArray)
// console.log(secondLargest)




// better solution
/**
 * Find the largest element
 * then take any lower value to the seondLargest variable
 * then compare the elements that are greater than secondLargest and not equal to the largest element
 * that is the second largest element
 */

function findLargest (array){
    let largest = array[0]
    for (let i=1; i<array.length - 1; i++){
        if (array[i] > largest){
            largest = array[i]
        }
    }
    return largest
}
// tc --> 0(N)

function findSecondLargest2(array){
    let secondLargest = -1;
    let largestElement = findLargest(array)
    for (let i=0; i<array.length - 1; i++){
        if (array[i] > secondLargest && array[i] != largestElement){
            secondLargest = array[i]
        }
    }
    return secondLargest
} 
// tc --> 0(N)
// total tc --> 0(N) + 0(N) = 0(2N)
let secondLargest2 = findSecondLargest2(array)
// console.log(secondLargest2)




// [1,2,4,7,7,5]
/** 
 * largest = 1
 * secondLargest = -1
 * 2 > 1 --> largest = 2 ,secondLargest = 1
 * 4 > 2 --> largest = 4 , secondLargest = 2
 * 7 > 4 --> largest = 7 , secondLargest = 4
 * 7 > 7 --> not 
 * 5 > 7 --> 
 */
// optimal solution
function findSecondLargest3 (array){
    let largest = array[0]
    let secondLargest = - 1
    for (let i=1; i<array.length; i++){
        if (array[i] > largest){
            secondLargest = largest
            largest = array[i]
        }
        else if (array[i] < largest && array[i] > secondLargest){
            secondLargest = array[i]
        }
    }
    return secondLargest
}
function findSecondSmallest(array){
    let smallest = array[0]
    let secondSmallest = Infinity
    for (let i=1; i<array.length; i++){
        if (array[i] < smallest){
            secondSmallest = smallest
            smallest = array[i]
        }
        else if (array[i] != smallest && array[i] < secondSmallest){
            secondSmallest = array[i]
        }
    }
    return secondSmallest
}
const secondLargest3 = findSecondLargest3(array)
const secondSmallest3 = findSecondSmallest(array)
console.log([secondLargest3,secondSmallest3])


 


