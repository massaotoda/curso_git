console.log(process.argv)

const temp = process.argv.slice(2)
console.log(temp)

const nome = temp[0].split('=')[1]
console.log(nome)

const idade = temp[1].split('=')[1]
console.log(idade)

console.log(`Nome: ${nome} e sua idade: ${idade}`)