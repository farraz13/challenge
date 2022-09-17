const fs = require('fs');
const readline = require('readline');

const file = fs.readFileSync('./data.json');
const data = JSON.parse(file);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Jawabanmu: '
});

console.log('Selamat datang,semoga beruntung!\n')

let count = 0

console.log(`Pertanyaan: ${data[count].definition}`);
rl.prompt();

rl.on('line', answer => {
  if (count < data.length - 1) {
    if (answer.toLowerCase() !== data[count].term) {
      console.log('Duh salah nih, coba lagi deh!\n');
      rl.prompt();
    } else {
      count++;
      console.log('Selamat Anda benar!\n');
      console.log(`Pertanyaan: ${data[count].definition}`);
      rl.prompt();
    }
  } else {
    if (answer.toLowerCase() !== data[count].term) {
      console.log('kurang tepat nih, ganti lagi!\n')
      rl.prompt()
    } else {
      console.log('Bener nih, lanjut bro!\n')
      console.log('Asik menang!');
      process.exit(0)
    }
  }
}).on('close', () => {
  console.log('loh kok udahan :(')
  process.exit(0)
});