'use strict'

const num = { x: 5 };
function inc(num) {
    num.x++;
}
inc(num);
console.dir(num);