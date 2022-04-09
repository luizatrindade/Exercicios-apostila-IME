//Uma loja de discos anota diariamente durante o mes de marc¸o a quantidade de discos vendidos. 
//Determinar em que dia desse mes ocorreu a maior venda e qual foi a quantidade de discos vendida nesse dia.

function disco(q) {
  let x = 0
  let d = []
  let f = " "

  for (let i = 0; i < q.length; i++) {
    if (q[i]>x) { 
      x = q[i]
    }
  }
  for(let u = 0; u< q.length; u++){
    if(q[u]==x){
      d.push(u+1)
    }
  }
  if (d.length>1){
  f = f +"Os dias de maior venda foram " + d + " e a quantidade de discos vendida nesse dia foi" + x}
  else{
  f = "O dia de maior venda foi " + d + " e a quantidade de discos vendida nesse dia foi" + x}


  return f

}
