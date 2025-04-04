
// implementation of insertion sort
const arry = [5,4,0,1,6,2]
const n = arry.length
const insertionSort = (array,n)=>{
    for (let i=1; i<n; i++){
        temp = array[i]
        j = i-1;
        while(j>=0 && array[j] > temp){
            array[j+1] = array[j]
            j--
        }
        array[j+1] = temp
    }
}

insertionSort(arry,n)
console.log(arry,'after sort');
