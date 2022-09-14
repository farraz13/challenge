const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tulis Disini => '
});
rl.prompt();

rl.on('line', jawaban => {
    const splitted = [];
    let splitting = '';
    let kataTerakhir = '';

    for (let i = 0; i < jawaban.length; i++) {
        if (jawaban[i] == ' ') {
            splitted.push(splitting);
            splitting = '';
        } else splitting += jawaban[i];
    }
    for (let i = 0; i < jawaban.length; i++) {
        if (jawaban[i] == ' ') kataTerakhir = '';
        else kataTerakhir += jawaban[i];
    }
    splitted.push(kataTerakhir);
    const hasil = [];

    for (let i = 0; i < splitted.length; i++) {
        const vokal = 'aiueo';
        let hurufVokal = false;

        for (let j = 0; j < vokal.length; j++)
            if (splitted[i][0] == vokal[j]) hurufVokal = true;
        
            let temp = '';

        if (hurufVokal) temp = splitted[i];
        else {
            for (let k = 1; k < splitted[i].length; k++) {
                temp += splitted[i][k];
            }
            temp += `${splitted[i][0]}nyo`;
        }
        hasil.push(temp);
    }
    let akhir = '';

    for (let i = 0; i < hasil.length; i++) {
        if (i == hasil.length - 1) akhir += hasil[i];
        else akhir += `${hasil[i]} `;
    }
    console.log(`Diubah menjadi: ${akhir}`);

    rl.prompt();
}).on('close', () => {
    console.log('Udahan dek capek');
    process.exit(0);
});