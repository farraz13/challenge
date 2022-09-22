const fs = require('fs')

const callTask = process.argv;
const data = JSON.parse(fs.readFileSync('penampung.json', 'utf-8'))
let index = parseInt(callTask[3]) - 1

const Todo = `
List Syntax untuk menjalankan kode
$ node test13.js <command>
$ node test13.js list
$ node test13.js task <task_id>
$ node test13.js add <task_content>
$ node test13.js delete <task_id>
$ node test13.js complete <task_id>
$ node test13.js uncomplete <task_id>
$ node test13.js list: complete asc|descs
$ node test13.js list: outstanding asc|desc
$ node test13.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
$ node test13.js filter: <tag_name>
`

if (!process.argv[2]) {
    console.log(Todo)
    process.exit(0) //gabisa diatas const Todo harus dibawah variablenya
}
//penggunaan switchcase kurang lebih seperti if else

switch (process.argv[2]) {

    case 'add':
        let tambah = '';
        for (let i = 3; i < callTask.length; i++) {
            tambah += callTask[i] + ' '
        };
        //untuk menambah list

        data.push({
            'tag': [],
            'content': tambah,
            'status': false
        })
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3))
        console.log(`"${tambah.trim()}" telah ditambahkan`)
        process.exit(0)

    case 'list':
        for (let i = 0; i < data.length; i++) {
            console.log(`${i + 1}. ${data[i].status ? '[x]' : '[ ]'} ${data[i].content.trim()}.`)
        }
        //untuk melihat daftar kerjaan

        break;

    case 'task':
        console.log('Daftar Pekerjaan')
        console.log(`
id: ${index + 1} 
title: ${data[index].content}
Status: ${data[index].status ? true : false} `)
        process.exit(0);

    case 'delete':
        console.log(`"${data[index]['content']}" telah dihapus`)
        data.splice(index, 1)
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3))
        process.exit(0);
    //menghapous task yg ad di list

    case 'complete':
        data[index].status = '[x]'
        console.log(`"${data[index]['content']}"Udah dikerjain`)
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3))
        process.exit(0)
    //menyatakan pekerjaan telah selesai

    case 'uncomplete':
        data[index].status = false
        console.log(`"${data[index]['content']}"belom dikerjain`)
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3))
        process.exit(0)
    //menyatakan pekerjaan belum selesai

    case 'list:outstanding':
        console.log('Daftar Pekerjaan')
        if (callTask[3] == 'asc')
            for (let i = 0; i < data.length; i++) {
                if (data[i].status == false) {
                    console.log(`${i + 1}. [ ] ${data[i].content}`);
                }
            };
        //list pekerjaan yg belum dikerjakan

        if (callTask[3] == 'desc')
            for (let i = data.length - 1; i >= 0; i--) {
                if (data[i].status == false) {
                    console.log(`${i + 1}. [ ] ${data[i].content}`);
                }
            };
        process.exit(0);

    case 'list:completed':
        console.log('Daftar Pekerjaan')
        if (callTask[3] == 'asc')
            for (let i = 0; i < data.length; i++) {
                if (data[i].status == '[x]') {
                    console.log(`${i + 1}. ${data[i].status} ${data[i].content}`);
                }
            };
        //list yg sudah selesai dikerjakan

        if (callTask[3] == 'desc')
            for (let i = data.length - 1; i >= 0; i--) {
                if (data[i].status == '[x]') {
                    console.log(`${i + 1}. ${data[i].status} ${data[i].content}`);
                }
            };
        process.exit(0);


    case 'tag':
        for (let i = 4; i < callTask.length; i++) {
            if (!data[index].tag.includes(callTask[i])) {
                data[index].tag.push(callTask[i])
            }
        }
        //sebuah penanda untuk di sortir

        data[index].tag.length - 1;
        console.log(`tag "${data[index].tag}" telah ditambahkan ke daftar ${data[index].content}`)
        fs.writeFileSync('data.json', JSON.stringify(data, null, 3))
        process.exit(0);
};

filtering(process.argv[2])

function filtering() { 
    //fungsi untuk menyortir

    console.log('Daftar Pekerjaan')
    let kata = process.argv[2]
    let kata2 = kata.slice(0, 7)
    if (kata2 == 'filter:') {
        data.map((item, index) => {
            if (item.tag.includes(kata.slice(7))) {
                console.log(`${index + 1}. ${item.status ? '[x]' : '[ ]'} ${item.content}`);
            }
        })
    };
}