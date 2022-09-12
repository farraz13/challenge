function pola(str) {
var splitNumber = str.split(' ')

var getFirstIndex = splitNumber[0]
var getSecNumber = splitNumber[2]
var getThirdNumber = splitNumber[4]

var result = []

for (let i = 0; i <10;i++){
    var changeIndex1 =getFirstIndex.replace('#',i);
    for (let j =0; j<10;j++){
        var changeIndex3 = getThirdNumber.replace('#',j)
        if(Number (changeIndex1)* getSecNumber== Number (changeIndex3)){
            result.push(i,j)
        }

    
    }
}return result
}
console.log(pola('42#3 * 188 = 80#204'))
console.log(pola('8#61 * 895 = 78410#5'))