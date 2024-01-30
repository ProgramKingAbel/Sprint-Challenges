function insertionSort(arr) {
	
	for (let i = 1; i < arr.length; i++) {
		let numberToInsert = arr[i];
		let sortedIndex = i - 1;

		while (sortedIndex >= 0 && arr[sortedIndex] > numberToInsert) {
			arr[sortedIndex + 1] = arr[sortedIndex]
			sortedIndex = sortedIndex-1;
		}
		arr[sortedIndex + 1] = numberToInsert

		
	}
}
const arr = [8, 20, -2, 4, -6]
insertionSort(arr);
console.log(arr)
