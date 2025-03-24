
// check if the array is sorted or not
let arr = [1,2,2,3,3,4]

// 1 <= 2 --> result = true 
// 2 <=2 --> result = true
// 2 <= 3 --> result = ture
// 3 <= 3 --> result true
// 3 <= 4 --> result true

const isSorted = (array)=>{
    for (let i=1; i<array.length; i++){
        if (array[i] >= array[i-1]){
        }
        else {
            return false
        }
    }
    return true
}
const result = isSorted(arr)
console.log(result)




