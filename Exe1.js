//Dado um numero inteiro positivo  n, imprimir os n primeiros naturais ımpares. Exemplo: Para n=4 a saıda
devera ser 1,3,5,7.

function numeros(n){
  let arr = []
  
  for(let x=0; arr.length <n; x++){

    
    if (x%2 != 0){
      arr.push (x)
     
    }
 
  }
  return arr
}
