const letters = ['a', 'b', 'c']

const newArray = []
for (let index = 0; index < letters.length; index++) {
    const element = letters[index]
    newArray.push(element)
}

console.log('original', letters)
console.log('new', newArray)

// with map

const letters2 = ['a', 'b', 'c']
const newArray2 = letters2.map(item => item + '++')

console.log('original', letters2)
console.log('new', newArray2)