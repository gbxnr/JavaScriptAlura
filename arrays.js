const frutas = ['uva', 'banana', 'abacaxi', 'maça', 'morango']

console.log(frutas)

//console.log('Primeira fruta: ', frutas[0])
//console.log('Ultima fruta: ', frutas[4])
//
//console.log('total de frutas: ', frutas.length)
//
//frutas.push('melancia')
//
//console.log('total de frutas ao adicionar mais fruta ', frutas.length)
//
//console.log('ultima fruta:', frutas[frutas.length-1])

frutas.splice(2, 1) // ele serve para remover de uma lista onde vc puxa a posição em que ele esta e remove
console.log('depois de remover', frutas)

for(let i = 0; i < frutas.length; i++){
    console.log('indice: ', i)
     console.log(frutas[i])
}