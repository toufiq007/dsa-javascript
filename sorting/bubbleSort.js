/**
 * Bubble sort
 * sorting technique
 * in every pass the maximum number will go to the last of the array position
 * stable algorithm
 * not by default adaptive --> it can be make adaptive algorithm
 */

// let arr = [2,5,4,9,11,10,1]
let arr = [1, 2, 4, 5, 9, 10, 11];

let n = arr.length;

// console.log(arr, "before sorting");

const bubbleSort = (arr, n) => {
  let swap = false;
  for (let i = 0; i < n - 1; i++) {
    // this loop is for number of passes and it should be gone to n-1 times
    // this inner loop is for comparing the pares
    swap = false;
    for (let j = 0; j < n - 1 - i; j++) {
      // now compare the pairs
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j + 1];
        // arr[j + 1] = arr[j];
        // arr[j] = temp;

        // simplify swap with destructuring
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swap = true;
      }
    }
    if (swap == false) {
      console.log("array is sorted");
      break;
    }
  }
};
bubbleSort(arr, n);
console.log(arr, "after sorting");
