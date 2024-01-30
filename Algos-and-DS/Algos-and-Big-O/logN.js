// Binary search to demonstrate LOgarithmic O(Log N) time complexity

// works with sorted array.

let arr = [];
for (let i = 1; i <= 1024; i++) {
	arr.push(i);
}

let start = 0;
let end = arr.length - 1;
let target = 500;

function binarySearch(arr, start, end, target) {
	console.log(arr.slice(start, end));

	let midIndex = Math.floor((start + end)/2);

	if (start > end) return false;
	
	if (arr[midIndex] === target) return true;

	if (arr[midIndex] > target) 
		return binarySearch(arr, start, midIndex - 1, target);
	else return binarySearch(arr, midIndex + 1, end, target);
}

console.log(binarySearch(arr, start, end, target));
