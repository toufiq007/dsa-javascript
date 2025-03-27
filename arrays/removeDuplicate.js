
// remove duplicate from the sorted array

const arr = [1,2,2,3,3,3,5,6]
// approach one
// const removeDuplicate = (array)=>{
//     let uniqueItems = []
//     for (let i=0; i<array.length; i++){
//         if (!uniqueItems.includes(array[i])){
//             uniqueItems.push(array[i])
//         }
//     }
//     return uniqueItems
// }


// approach two
const findDuplicate = (array)=>{
    let uniqueItems = []
    let seen = {}
    for(let i=0; i<array.length; i++){
        if (!seen[array[i]]){
            uniqueItems.push(array[i])
            seen[array[i]] = true
        }
    }
    return uniqueItems
}
const items = findDuplicate(arr)
// console.log(items)



// optimal approach --> two pointer method
