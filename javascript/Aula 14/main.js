// Adicionando elementos

const numeros = [1,2,3]

// Início
numeros.unshift(0)

// Meio
numeros.splice(1,0,'A')

// Final
numeros.push(4)

console.log(numeros)

// Removendo elementos

const numeros2 = [1,2,3,4,5,6]

// Final
numeros2.pop()

// Início
numeros2.shift()

// Meio
numeros2.splice(2,1)

console.log(numeros2)

// Esvaziando um Array

const numeros3 = [1,2,3,4,5,6,7,8,9,10]

numeros3.length = 0

console.log(numeros3)

// Combinar e Cortar Arrays

const primeiro = [1,2,3]
const segundo = [4,5,6]

// Combinar

const combinado = primeiro.concat(segundo)

// Cortar

const cortado = combinado.slice(1)
console.log(cortado)

// Operador Spread

const um = [1,2,3]
const dois = [4,5,6]

// Combinar

const combinar = [...um,...dois] 

// Clonar

const clonado = [...combinar]
console.log(clonado)

// Combinando Arrays

const normal = [1,2,3,4,5]
const combinando = normal.join('.')
console.log(combinando)

const frase = 'Olá bem vindo ao curso'
const resultado = frase.split(' ')
console.log(resultado)

console.log(resultado.join('-'))