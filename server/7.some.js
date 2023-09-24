const numbers = [1,2,3,4]

let valid = false

for (let i = 0; i< numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    valid = true
    break
  }
}

console.log('valid', valid)

const validSome = numbers.some(item => item % 2 === 0)

console.log('validSome', validSome)

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

const orderDelivered = orders.some(item => item.delivered)
console.log('orderDelivered', orderDelivered)