const minimist = require('minimist');

const temp = minimist(process.argv.slice(2))

console.log(temp)

const nome = temp['nome']

console.log(nome)