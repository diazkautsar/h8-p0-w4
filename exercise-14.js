function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var output = []
    if (arrPenumpang.length === 0) {
        return []
    } else {
        for (var i = 0; i < arrPenumpang.length; i++) {
            var naikDari = 0
            var tujuan = 0
            for (var j = 0; j < rute.length; j++) {
                if (rute[j] === arrPenumpang[i][1]) {
                    naikDari = j
                }
            }
            for (var k = 0; k < rute.length; k++) {
                if (rute[k] === arrPenumpang[i][2]) {
                    tujuan = k
                }
            }
            var hasil = {}
            var bayar = (tujuan - naikDari) * 2000
            hasil.penumpang = arrPenumpang[i][0]
            hasil.naikDari = arrPenumpang[i][1]
            hasil.tujuan = arrPenumpang[i][2]
            hasil.bayar = bayar
            output.push(hasil)
        }
    }
    return output
  }
  



  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]