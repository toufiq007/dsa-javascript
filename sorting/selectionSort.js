

// selection sort algorithm

/**
 * First divided arrays with two different sublist --> sorted and unsorted
 * then find the minimum element in the unsorted sublist
 * then swap this minimum element to the beginning element to the unsorted sublist
 *  
 */

const array = [5,4,0,1,6,2]
const n = array.length
console.log(array,"before sorted")


const selectionSort = (array,n)=>{
    for (let i=0 ; i<n-1; i++){
        let min = i;
        for (let j=i+1; j<n; j++){
            if (array[min] > array[j]){
                min = j
            }
        }
        if (min !== i){
            [array[i],array[min]] = [array[min],array[i]]
        }
    }
}

selectionSort(array,n)
console.log(array,"after sorted")




