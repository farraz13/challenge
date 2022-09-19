if (!process.argv[2]) {
    console.log('sertakan input soal\n misal \'node tugas12.js data.json\'')
    process.exit(0);
} // process.argv melakukan return array yg terkandung di dalam argumen saat node.js dijalankan (memanggil json)

const fs = require('fs')
const readline = require('readline')

const file = fs.readFileSync(process.argv[2])
const data = JSON.parse(file)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'jawabanmu =>'
})

console.log(`selamat datang di kuis dadakan, kamu bisa memilih jenis soal ini seperti \'soal.json dan kuis.json\' semoga beruntung yah :).\n
gunakan 'skip' untuk melewati pertanyaan dan jawab kembali di akhir`)

let count = 0  //untuk melanjutkan soal
let wrong = 0 //untuk menghitung banyaknya jawaban yang salah

console.log(`soal : ${data[count].definition}`)
rl.prompt()

rl.on('line', line => {
    if (count < data.length - 1) {
        if (line.toLowerCase() !== 'skip') {
            if (line.toLowerCase() !== data[count].term) {
                wrong++
                console.log(`salah nih,udah salah sebanyak ${wrong}. cobain lagi aja`)
                rl.prompt()

            } else {
                count++
                console.log('asik bener')
                console.log(`soal : ${data[count].definition}`)
                rl.prompt()

            }

        } else if (line.toLowerCase() == 'skip') {
            data.push(data[count])
            wrong = 0
            count++
            console.log(`soal : ${data[count].definition}`)
            rl.prompt()
            // menghitung salah soal 1 dan 2
        }

    } else if (line.toLowerCase() !== data[count].term) {
        wrong = 0
        wrong++
        console.log(`anda kurang beruntung,udah salah sebanyak ${wrong}.jangan semangat nyerah aja!`)
        rl.prompt()
        //menghitung salah soal terakhir
        

    }else {
        console.log('Asik bener nih\n')
        console.log('asik kamu menang :)\n')
        process.exit(0)
    }

    rl.prompt()
}).on('close', () => {
    console.log('byebye')
    process.exit(0)
});