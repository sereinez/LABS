'use strict'

function average(a, b) {
    return (a + b) / 2
}

function square(a) {
    return a * a
}

function cube(a) {
    return a * a * a
}

function calculate() {
    const array = []
    for (let i = 0; i <= 9; i++) {
        const squareValue = square(i)
        const cubeValue = cube(i)
        array.push(average(squareValue, cubeValue))
    }
    return array
}
console.log(calculate())