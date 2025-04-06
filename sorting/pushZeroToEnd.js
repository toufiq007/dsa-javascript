// question: push all the zeros to the end of the list or arrays
const arry = [5, 0, 2, 0, 0, 3, 4, 0, 1];
// required --> [5,2,3,4,1,0,0,0,0]

/**
 * solution : 
 * same code as bubble sort
 * only condition should be changed and remains code is same as bubble sort
 */

const solution = (array) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let swap = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] == 0) {
        // this is the code for swapping the values by destructing method
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swap = true
      }
    }
    if (swap === false) {
      break;
    }
  }
};
solution(arry);
console.log(arry);
