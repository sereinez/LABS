'use strict'

const array = [false, 'cat', 42, -7, 3.14, true, 'JavaScript', 0, 100, true, 'node', -1, 15, 8, 99, false, 'array', 20, 7, 1000];

function countTypes(array) {
    const object = {}
    for (const element of array) {
        object[typeof element] = (object[typeof element] ?? 0) + 1
    }
    return object;
}

console.log(countTypes(array));