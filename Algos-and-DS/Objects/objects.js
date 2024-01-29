const obj = {
	name: "Abel",
	age: 25,
	"key-three": true,
	sayMyName: function() {console.log(this.name)}
}
obj.hobby = 'football'
delete obj.hobby
console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-three'])
console.log(obj)
obj.sayMyName()

// object methods 
//
// Insert/Remove/Access -> Big O(1) constant time complexity

// O(n) Time complexities
// Search
// Object.keys() => returns arr of object keys  
// Object.values() => returns arr of object values
// OBject.entries() => returns arr of key-value pairs available in the object
