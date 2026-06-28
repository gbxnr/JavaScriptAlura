

const idade = 35
//if(idade >= 18){
   // console.log('é maior de idade! ')
//}else{
    //console.log('é menor de idade! ')
//}
idade >= 18 ? console.log('maior idade'):  console.log('menor  idade') //operador ternario seria a mesma coisa que um if else 
const notaDoAluno = 9

//if(notaDoAluno >= 9){
//    console.log('nota excelente')
//} else if(notaDoAluno >= 7){ 
//    console.log('Boa Nota')
//}else if(notaDoAluno >=4){
//    console.log('nota mediana')
//}else{
//    console.log('Nota ruim')
//}

notaDoAluno >= 9 ? console.log('excelente') : 
  notaDoAluno >= 7 ? console.log('boa') : 
  notaDoAluno >= 4 ? console.log('mediano') :
  console.log('ruim')





