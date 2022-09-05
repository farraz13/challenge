function  romawi(b){
var angkaRomawi = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}; 
var hasilAkhir = '';
for (var i of  Object.keys(angkaRomawi)){
    var a = Math.floor(b/angkaRomawi[i] );
    b = b - a * angkaRomawi[i];
    hasilAkhir = hasilAkhir + i.repeat(a);
}
return hasilAkhir;
}
console.log('Script Testing untuk KOnversi Romawi\b');
console.log('input | expected | result');
console.log('4     | IV       |',romawi(4));
console.log('9     | IX       |',romawi(9));
console.log('13    | XIII     |',romawi(13));
console.log('1453  | MCDLIII  |',romawi(1453));
console.log('1646  | MDCXLVI  |',romawi(1646));
