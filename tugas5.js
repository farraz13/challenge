function stringManipulation(word) {
  var vokal = 'aiueo'
  var adalahHurufVokal = false;

  for (var i = 0; i < vokal.length; i++) {
    if (word[0].toLowerCase() === vokal[i]) {
      adalahHurufVokal = true;
    }
  }

  var hasil = '';

  if (adalahHurufVokal) {
    hasil = word;
  } else {
    for (var i = 1; i < word.length; i++) {
      hasil = hasil + word[i];
    }

    hasil = hasil + `${word[0]}nyo`;
  }
  console.log(hasil);
}

stringManipulation('Ikan'); //"ikan"
stringManipulation('Gajah'); //"ajahgnyo"
