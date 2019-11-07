function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var tampung = [];

    for (var i = 0; i <= angka; i++) {
        for (var j = 0; j <= angka; j++) {
            if (i*j === angka) {
                tampung.push(i.toString() + j.toString())
            }
        }
    }
    var pembanding = tampung[0].length 
    for (var i = 0; i < tampung.length; i++) {
        if (tampung[i].length < pembanding) {
            pembanding = tampung[i].length
        }
    }

    return pembanding
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2