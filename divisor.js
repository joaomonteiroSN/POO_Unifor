const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número para saber o MDC: ', (num) => {
  rl.question('Qual o outro número: ', (num2) => {
    var resto = num%num2;

      while (resto != 0){
        num = num2;
        num2 = resto;
        resto = num % num2;
      }

    console.log ("O máximo divisor comum é: " + num2);        
    rl.close();

  });
});




