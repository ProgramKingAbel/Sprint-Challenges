// Big O notation with mergeSort.js
// unsorted array [1,10, 9, 5, 23, 55]
// split array into 2 and slice to that point
// [1, 10, 9] - left arr 		[5, 23, 55] - right array
// Big arr [1, ]
// Helper function

function mergeSort(arr) {
  
  if (arr.length < 2) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
  
}

function merge(leftArr, rightArr) {
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length){
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex+=1;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex+=1;
    }
  }
  return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
  
}

// the array is supposed to return a sorted array
let arr = [10, 10, 9, 5, 23, 55];
console.log(mergeSort(arr));


