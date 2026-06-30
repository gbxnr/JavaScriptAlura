const readline = require ('readline')  // biblioteca que interage com o terminal

const leitor = readline.createInterfac({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é o seu nome? ', (nome) => {
    console.log(' Olá, ', nome)
    console.log()
})