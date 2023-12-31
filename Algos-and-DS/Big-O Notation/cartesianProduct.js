function cartesianProduct(arrA, arrB) {
	let smallArr = [];
	let bigArr = [];

	for (let i = 0; i < arrA.length; i++) {
		for (let j = 0; j < arrB.length; j++) {
			smallArr.push([arrA[i], arrB[j]])
		}
		
	}
	return smallArr;
}

console.log(cartesianProduct([1, 3], [3, 4, 5]));

//BIG-O O(mn)
//
//if arrA.length === arrB.length then Big-O is quadratic O(n^2)
