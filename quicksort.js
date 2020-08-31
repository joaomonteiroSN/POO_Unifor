var vetor = [2, 6, 10, 125, 90, 40, 38, 29, 30, 12, 24, 76, 0]; 

function quick(vetor, left, right){
   var pivo = left;
   if(left < right){
       var pivoIndex = quebra(vetor, left, right, pivo);

       quick (vetor, left, pivoIndex - 1);
       quick (vetor, pivoIndex + 1, right);
   }
   return vetor;
}

function quebra(vetor, left, right, pivo){
    var p = vetor[pivo];
    troca (vetor, right, pivo);
    var aux = left;

    for (let i = left; i < right; i++){
        if (vetor[i] <= p){
            troca(vetor, i, aux);
            aux = aux + 1;
        }
    }

    troca(vetor, right, aux);
    return aux;
}

function troca(vetor, i, j){
    let temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp; 
}

console.log(vetor);
console.log(quick(vetor, 0, 12));