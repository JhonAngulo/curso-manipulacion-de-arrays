const words = ["spray", "limit", "elite", "exuberant"]

const newArray = []

for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item)
    }
}

console.log('newArray', newArray)
console.log('original', words)

const filterWords = words.filter(item => item.length >=6)

console.log('filterWords', filterWords)
console.log('original', words)

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

const ordersDelivered = orders.filter(item => item.delivered && item.total >= 100)

console.log('ordersDelivered', ordersDelivered)

const search = (query) => {
    return orders.filter(item => {
        return item?.customerName?.toLocaleLowerCase()?.includes(query?.toLocaleLowerCase())
    })
}

console.log('search', search('nico'))