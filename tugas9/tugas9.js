function spiral(param1) {
  let idx = 0;
  const result = [];

  for (let i = 0; i < param1; i++) {
    const temp = [];
    for (let j = 0; j < param1; j++) {
      temp.push(idx);
      idx++;
    }
    result.push(temp);
  }

  const spiralNum = [];

  let mulai = 0;
  let akhir = result[0].length;
  let barisAwal = 1;
  let barisAkhir = result.length;
  let end = param1 - 1;
  let batas = 0;

  while (spiralNum.length < param1 * param1) {
    for (let i = mulai; i < akhir; i++) {
      spiralNum.push(result[mulai][i]);
    }
    for (let i = barisAwal; i < barisAkhir; i++) {
      spiralNum.push(result[i][end]);
    }
    for (let i = akhir - 2; i >= batas; i--) {
      spiralNum.push(result[end][i]);
    }
    for (let i = barisAkhir - 2; i > batas; i--) {
      spiralNum.push(result[i][batas]);
    }

    mulai++;
    akhir--;
    barisAwal++;
    barisAkhir--;
    batas++;
    end--;
  }

  console.log(spiralNum);
}

spiral(5);
spiral(6);
spiral(7);