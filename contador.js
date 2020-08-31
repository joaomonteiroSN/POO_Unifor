const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o número? ', (num) => {
  console.log(`Existem ${num} números entre ${num} e 1.`);

  rl.close();
});
