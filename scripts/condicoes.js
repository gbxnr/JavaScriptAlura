
const numero = 0
const indefinido = undefined
const nulo = null
const nome = 'Gabriel'

if (nome) {
    console.log('Olá ', nome)
} else {
    console.log('ainda não sei o seu nome')
}

const idade = 25


if (idade != null) {
    if ( idade >= 18) {
        console.log('maior de idade')
    } else if ( idade >= 0 && idade < 18) {
        console.log('menor de idade')
    }
}