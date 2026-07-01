const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10]

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 != 0
})

console.log('todos os numeros:', numeros)
console.log('todos os numeros pares:', numerosPares)
console.log('todos os numeros Impares:', numerosImpares)
