// Activity 1 - Solve the 'fizzbuzz' challenge. 

function fizzBuzz(num) {
    // Returns 'fizz' is the number is a multiple of '3', 'buzz' if it's a multiple of '5'
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
    for (let i=0; i<numbersToGenerate; i++) {
        randNum = Math.round(Math.random()*ceil + floor)
        if (randNum % factor == 0) {
            return `Random number : ${randNum}, Divisible by ${factor} : Yes`
        } else {
            return `Random number : ${randNum}, Divisible by ${factor} : No`
        }
    }
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

// Activity 4 - print the numbers 9 - 0 to the screen.

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

// Activity 6 - Checks whether a password is 8 or more characters.

function checkPasswordLength(password, length) {
    // Checks whether a password is long enough.
    if (password.length < length) {
        return "Error. Password too short."
    } else {
        return "Password changed."
    }
}
checkPassword = checkPasswordLength("12345678", 8)
console.log(checkPassword)

// Activity 7 - Checks whether a number is divisible by 3 or 5.

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