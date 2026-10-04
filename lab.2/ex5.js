'use strict'

const phoneBook = [
    { name: 'John Doe', phone: '123-456-7890' },
    { name: 'Jane Smith', phone: '098-765-4321' },
    { name: 'Alice Johnson', phone: '555-123-4567' },
    { name: 'Bob Brown', phone: '555-987-6543' }
]

function findPhoneByName(name) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return phoneBook[i].phone;
        }
    }
    return null
}

console.log(findPhoneByName('Bob Brown'))


const phoneNumbers = {
    'John Doe': '123-456-7890',
    'Jane Smith': '098-765-4321',
    'Alice Johnson': '555-123-4567',
    'Bob Brown': '555-987-6543'
}

function phoneByName(name) {
    return phoneNumbers[name] || null;
}

console.log(phoneByName('Alice Johnson'))   