
//Estrutura laços de repetição for
for(let contador = 1; contador <= 10; contador++){
  console.log('número atual:', contador)
}

for(let numero =0; numero <= 15; numero++){
  if (numero % 2 == 0) {
    console.log("numero par encontrado", numero)
  }
}

for(let numero =0; numero <= 15; numero++){
  if (numero % 2 > 0) {
    console.log("numero impar encontrado", numero)
  }
}

const palavra = 'calopsita'

// palavra.length indica quantos caracteres uma string possui
// palavra[1] - pega a letra na posição indicada

for(let cont = 0; cont < palavra.length; cont++){ // esse lengrh servira para saber o tamano e quantas letras tem a plavra
   console.log(palavra[cont])
}