const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    }
  ]

console.log('original', orders)

const totals = orders.map(item => item.total)

console.log('totals', totals)

// const plusTax = orders.map(item => {
//     item.tax = .19
//     return item
// })

// console.log('plusTax', plusTax)
// console.log('original', orders)

const plusTax = orders.map(item => {
    return {
        ...item,
        tax: .19
    }
})

console.log('plusTax', plusTax)
console.log('original', orders)

var immutableString = "Hello"
immutableString = immutableString + "World"

console.log(immutableString)

