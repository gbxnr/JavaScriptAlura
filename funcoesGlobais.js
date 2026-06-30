function saudacao (){
    console.log('e ai, belezaa?')
}

setTimeout(saudacao, 2000) //ms // esse setTimeout serve para poder delimitar tempo para executar uma ação


let contador = 0

setInterval(() => {
   contador++
   console.log(' tempo decorrido (em segundos)', contador)

   if(contador == 10){
    clearInterval(id)
   }
}, 1000)