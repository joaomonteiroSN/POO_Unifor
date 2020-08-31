const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Qual o número você deseja saber se é primo ou não? ', (num) => {
    primoornot(num);

    function primoornot(num){
      var divisor = 0;
    
      for (let i = 1; i <= num; i++){
        if (num % i == 0){
          divisor++;
        }
      }
      if (divisor == 2){
        console.log (num + " é primo!!");
      }
      else {
        console.log (num + " não é primo!!");
      }

    }

  rl.close();

});