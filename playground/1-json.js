const fs = require('fs')
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)
fs.writeFileSync('newfile.json',bookJSON)