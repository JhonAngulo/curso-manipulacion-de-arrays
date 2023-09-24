const items = [1,3,2,3,3,1,10]

const check = items.reduce(((prev, item) => {
    if (!prev[item]) {
        prev[item] = 1
    } else {
        prev[item] = prev[item] + 1
    }
    return prev
} ), {})

console.log('items', items)
console.table(check)

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    }
  ]

const rta = data
.map(item => item.level)
.reduce(((prev, item) => {
    if (!prev[item]) {
        prev[item] = 1
    } else {
        prev[item] = prev[item] + 1
    }
    return prev
} ), {})

console.table(rta)