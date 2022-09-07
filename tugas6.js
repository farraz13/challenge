function sentencesManipulation(sentence) {
let temp='';
let splitChar= sentence.split (' ')

for (let i = 0; i<splitChar.length; i++){
    let word = splitChar[i]
    let ambilHurufDepan = splitChar[i].charAt(0)
    if (word[0]== 'a'|| word[0]== 'i'|| word[0]== 'u'|| word[0]== 'e'|| word[0]== 'o'){
        temp = temp + splitChar[i] + ' '
    }else {
        temp = temp + splitChar[i].substr(1) + ambilHurufDepan + 'nyo ' 
    }
}console.log(temp)
}
       
sentencesManipulation('ibu pergi ke pasar bersama aku');