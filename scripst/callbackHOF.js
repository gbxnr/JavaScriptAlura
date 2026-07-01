// HOF - higher-Order function === funcção que recebe outra função como parametro

function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2)
}

function soma(num1,num2){
    return num1 + num2
}

function divisao(num1, num2){
    return num1 / num2
}

const resultadoDaSoma = calcular(3, 8, soma)
console.log(' Resultado da soma: ', resultadoDaSoma)

const resultadoDaDivisao = calcular(32, 8, divisao)
console.log(' Resultado da divisao: ', resultadoDaDivisao)