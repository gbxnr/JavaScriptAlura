const num1 = 2;
const num2 = 4;

const operacao = ' soma';
if (operacao === ' soma') {
    console.log(num1 + num2)
}else if(operacao === 'multiplicacao'){
    console.log(num1 * num2)
}else{
    console.log(' operaçcao não indentificada')
}

const salario = 10000

if (salario >= 11000) {
    console.log(' 3% de Bonus')
}else if(salario <  10999 && salario >= 7000){
    console.log('5% de bonus')
}else if(salario < 6999 && salario >= 4000){
    console.log(' 7% de bonus')
}else if(salario < 3999 && salario >= 1000){
    console.log('9% de bonus')
}else{
    console.log('Nenhum salario encontrado')
}