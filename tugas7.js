function weirdMultiply(sentence) {
var stringNumber = sentence.toString();

if (stringNumber.length == 1)
return Number(stringNumber);
var hasil = 1;

for (let i =0;i < stringNumber.length;i++)
hasil = hasil * Number (stringNumber[i])
return weirdMultiply(hasil)
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))