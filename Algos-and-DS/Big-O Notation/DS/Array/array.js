const arr = [1, 2, 3, 'Abel'];
arr.push(4)
arr.unshift(0)
arr.pop()
arr.shift()

for (const item of arr) {
	console.log(item)
}

// map, filter, reduce, concat, slice, splice
// Big O
// Access = O(1)
// Search - O(n)
// Push/pop - O(1)
// shift / unshift/concat/slice/splice - O(n)
// forEach/map/filter/reduce - O(n)
