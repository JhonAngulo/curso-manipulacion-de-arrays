const totals = [1,2,3,4]

let sum = 0

for (let i = 0; i < totals.length; i++) {
    sum = sum + totals[i] 
}

const countTotal = totals.reduce((prev, current) => {
    return prev + current
}, 0)

console.log('sum', sum)
console.log('countTotal', countTotal)