
// implementation of insertion sort
const array = [5,4,0,1,6,2]
console.log(array,'before sorted')
/**
 * array[0] --> sorted sublist                        --> [5]       --> decrement loop
 * array[1] --> end of the array --> unsorted sublist --> [4,0,1,6,2] --> increment loop
 * then run a loop in the unsorted sublist
 * another loop for sorted sublist
 * then compare the temp variable to the sortedSublist element if sortedSublist element is greather than temp then shift the position by increment one
 */



const n = array.length
const insertionSort = (array,n)=>{
    for (let i=1; i<n; i++){
        let temp = array[i] // i --> 1 
        let j = i-1         // j = i-1 --> 0    
        while (j>=0 && array[j] > temp){
            array[j+1] = array[j]
            j--
        }
        array[j+1] = temp
    }
}

insertionSort(array,n)
console.log(array,'after sorted')