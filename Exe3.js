//Dados n>0 e uma sequencia de n numeros inteiros, determinar a soma dos numeros pares

//começando do 0 como no exercicio 1

function somapares(n){

  let arr = []
  let soma = 0
  
  for(let x=1; arr.length <n; x++){

    
    if (x%2 == 0){
      arr.push (x)
     
    }
 
  }
  for (let i=0; i <arr.length; i++){
    soma = soma + arr[i]
    
  }
  return soma
    
}



//Soma de numeros até n
function somaaten(n){
let s=0
let a=[]

for(let o=1; o<n; o++){
if (o%2 == 0){
      a.push (o)}
   }
  
for (let y=0; y<a.length; y++){
s = s + a[y]}

return s

}


//ou uma sequência dada dentro de um vetor
function somaseq (arra){
let som = 0
  
for (let u=0; u <arra.length; u++){
if (arra[u]%2 == 0){
som = som +arra[u]}

}
return som
}



