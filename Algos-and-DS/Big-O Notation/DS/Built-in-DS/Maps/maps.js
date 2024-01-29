const map = new Map([['a', 1], ['b', 2]])
map.set('c', 3)
console.log(map.has('a'))
console.log(map.size)
map.delete('c')
map.clear()
for (const [key, value] of map) {
	console.log(`${key}: ${value}`)
}
