const agora = new Date()

console.log(agora)

console.log('Ano', agora.getFullYear())
console.log('Mês 0-11:', agora.getMonth())
console.log('Dia do mês:', agora.getDate())
console.log('Horas: ', agora.getHours())
console.log('Minutos: ', agora.getMinutes())

const nascimento = new Date(2007, 5, 25)
console.log(nascimento)