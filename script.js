// JavaScript Fundementals

// Activity 1 - Solve the 'fizzbuzz' challenge. 

function fizzBuzz(num) {
    // Returns 'fizz' if the number is a multiple of '3', 'buzz' if it's a multiple of '5'
    // or 'fizzbuzz' if it's a multiple of '3' and '5'.  Otherwise returns the number.
    if (num % 3 == 0 && num % 5 == 0) {
        return "fizz buzz"
    } else if (num % 3 == 0) {
        return "fizz"
    } else if (num % 5 == 0) {
        return 'buzz'
    } else {
        return num
    }
}
BuzzOrFizz = fizzBuzz(9000)
console.log(BuzzOrFizz)

// Activity 2 - Generate a random number between 1 and 30 six times.  Check if each number is divisible by 7.

function generateFactors(factor, numbersToGenerate, floor, ceil) {
    // Generates random numbers in the range and checks whether they are divisible by a certain factor.
    let randNum = 0
    let result = []
    for (let i=0; i<numbersToGenerate; i++) {
        randNum = Math.round(Math.random()*ceil + floor)
        if (randNum % factor == 0) {
            result.push(`Random number : ${randNum}, Divisible by ${factor} : Yes`)
        } else {
            result.push(`Random number : ${randNum}, Divisible by ${factor} : No`)
        }
    }
    return result
}
checkForFactors = generateFactors(7,6,1,30)
console.log(checkForFactors)

// Activity 3 - Generate six random numbers between 1 and 50.

function getRandomNumbers(amount, floor, ceil) {
    // Generates random numbers in the range.
    randomNumbers = []
    for (let i=0; i<amount; i++) {
        randomNumbers.push(Math.round(Math.random() * (ceil - floor) + floor))
    }
    return randomNumbers
}
randomNumbers = getRandomNumbers(6, 1, 50)
console.log(randomNumbers)

// Activity 4 - Display the numbers 9-0.

function range(start, end, step) {
    // Returns an array of numbers from "start" upto but not including "end", incremented by "step".
    sequence = []
    if (end >= start) {
        i = start
        while (i < end) {
            sequence.push(i)
            i += step
        }
    } else {
        i = start
        while (i > end) {
            sequence.push(i)
            i += step
        }
    }
    return sequence
}
sequence = range(9,-1,-1)
console.log(sequence)

// Activity 5 - Create a pet object.

let pet = {
    name: "Fred",
    typeOfPet: "Snake",
    age: 3,
    color: "Brown",
    eat() {return `${this.name} is eating.`},
    drink() {return `${this.name} is drinking.`}
}

// Activity 6 - Check whether a password is 8 or more characters long.

function checkPasswordLength(password, length) {
    // Checks a passwords length.
    if (password.length < length) {
        return "Error. Password too short."
    } else {
        return "Password changed."
    }
}
checkPassword = checkPasswordLength("12345678", 8)
console.log(checkPassword)

// Activity 7 - Check whether a number is divisible by 3 and 5.

function divisibleBy(num, factor1, factor2) {
    // Checks whether a number has two factors.
    if (num % factor1 == 0 && num % factor2 == 0) {
        return `${num} is divisible by ${factor1} and ${factor2}.`
    } else {
        return `${num} is not divisible by ${factor1} and ${factor2}.`
    }
}
checkForFactors = divisibleBy(300, 3, 5)
console.log(checkForFactors)

// Challenge activity - Make a coffee shop.

let coffeeShop = {
    branch: "Liverpool",
    drinksPrices: {
        cappuccino: 4,
        latte: 4,
        espresso: 2,
        americano: 3
    },
    foodPrices: {
        croissant: 3,
        breakfastSandwich: 5,
        bagel: 4,
        donut: 3,
        cupcake: 2,
    },
    foodOrdered(order) {
        foodOrder = []
        total = 0
        for (let item in order) {
            if (order[item] in this.foodPrices) {
                food = order[item]
                price = this.foodPrices[food]
                foodOrder.push(`${food}: £${price}`)
                total += price
            }
        }
        return "\nYour food bill:\n" + foodOrder.join("\n") + `\nTotal: £${total}\n`
    },
    drinksOrdered(order) {
        drinksOrder = []
        total = 0
        for (let item in order) {
            if (order[item] in this.drinksPrices) {
                drink = order[item]
                price = this.drinksPrices[drink]
                drinksOrder.push(`${drink}: £${price}`)
                total += price
            }
        }
        return "Your drinks bill:\n" + drinksOrder.join("\n") + `\nTotal: £${total}\n`
    },
}
order = ["croissant", "breakfastSandwich","croissant", "breakfastSandwich", "bagel", "cappuccino", "latte", "espresso", "americano", "latte", "espresso"]
console.log(coffeeShop.foodOrdered(order))
console.log(coffeeShop.drinksOrdered(order))
