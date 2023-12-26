function binarySearch(arr, t) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let  midIndex = Math.floor((start + end) / 2);
		if (arr[midIndex] ===  t) {
			return midIndex;
		}

		if (arr[midIndex] > t) {
			end = midIndex - 1;
		}
		else {
			start = midIndex + 1;
		}
	}
	return -1;
}

console.log(binarySearch([-5,2,4,6,10], 10));
console.log(binarySearch([-5,2,4,6,7,10], 6));
console.log(binarySearch([-5,2,4,6,10], 20));

