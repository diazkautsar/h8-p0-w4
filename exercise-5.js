function ubahHuruf(kata) {
    // you can only write your code here!
    var huruf = (`abcdefghijklmnopqrstuvwxyz`)
    var output = ``

    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < huruf.length; j++) {
            if (huruf[j] === kata[i]) {
                if (huruf[j] === huruf[25]) {
                    output += huruf[0]
                } else {
                    output += huruf[j + 1]
                }
            }
        }
    }
    return output
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu