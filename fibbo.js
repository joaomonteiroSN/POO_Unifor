const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quantos números da sequência você deseja que apareça? ', (n) => {
  function fibonacci_fast(n) {
    if (n == 1) return [0];
    if (n == 2) return [0, 1];
   
    else {
      var vetor = fibonacci_fast(n - 1);
      vetor.push(vetor[vetor.length - 1] + vetor[vetor.length - 2]);
      return vetor;
    }
  };

  console.log (fibonacci_fast (n));
 

  rl.close();
});




