function checkPrime(yangMauDiCheck) {
  let adalahPrima = true;
  for (let adiknya = 2; adiknya < yangMauDiCheck; adiknya++) {
    if (yangMauDiCheck % adiknya == 0) {
      adalahPrima = false;
    }
  }
  return adalahPrima;
}

checkPrime();

function indexPrime(urutanKe) {
  let tukangNgitung = 0;
  for (let bahanTest = 2; true; bahanTest++) {
    if (checkPrime(bahanTest)) {
      tukangNgitung++;
    }
    if (tukangNgitung == urutanKe) {
      return bahanTest
    }
  }
}

console.log(indexPrime(4)) //result => 7
console.log(indexPrime(500)) //result => 3571
console.log(indexPrime(37786)) // result => 450881
