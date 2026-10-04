'use strict'

let a = { name: 'Kolya' }
const b = { name: 'Yana' }

a.name = "Lera"  //идёт по адресу и меняет содержимое объекта. Сам адрес в a остаётся прежним.
// a = { name: "Vika" } //пытается записать в a другой адрес, то есть заменить саму ссылку(работает, так как a объявлена как let).
b.name = "Sasha"  //идёт по адресу и меняет содержимое объекта. Сам адрес в b остаётся прежним.
//b = { name: "Sasha" } //пытается записать в b другой адрес, то есть заменить саму ссылку(не работает, так как b объявлена как const).

console.log(a, b)

function createUser(name, city) {
    const user = {
        name: name,
        city: city,
    }
    return user;
}
console.log(createUser('Marcus Aurelius', "Roma"))