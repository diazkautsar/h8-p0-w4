// function shoppingTime(memberId, money) {
//     // you can only write your code here!
//     var daftarBelanja = [`Sepatu Stacattu`, `Baju Zoro`, `Baju H&N`, `Sweater Uniklooh`, `Casing Handphone`]
//     var harga = [1500000, 500000, 250000, 175000, 50000]
//     var barang = []
//     var changeMoney = money


//     if (memberId === `` || memberId === undefined) {
//         return `MOhon maaf, toko X hanya berlaku untuk member saja`
//     } else if (money < 50000) {
//         return `Mohon maaf, uang tidak cukup`
//     } else {
//         for (var i = 0; i < harga.length; i++) {
//             if (changeMoney - harga[i] >= 0) {
//                 changeMoney = changeMoney - harga[i]
//                 barang.push(daftarBelanja[i])
//             }
//         }
//     }
//     var obj = {}
//     obj.memberId = memberId
//     obj.money = money
//     obj.listPurchased = barang
//     obj.changeMoney = changeMoney
//     return obj
//   }
  
function shoppingTime(memberId, money) {
    // you can only write your code here!
    var daftarBarangHarga = [
        [`Sepatu Stacattu`, 1500000],
        [`Baju Zoro`, 500000],
        [`Baju H&N`, 250000],
        [`Sweater Uniklooh`, 175000],
        [`Casing Handphone`, 50000]
    ]
    var barang = []
    var changeMoney = money
    var result = {}
    result.memberId = memberId
    result.money = money


    if (memberId === `` || memberId === undefined) {
        return `MOhon maaf, toko X hanya berlaku untuk member saja`
    } else if (money < 50000) {
        return `Mohon maaf, uang tidak cukup`
    } else {
        for (var i = 0; i < daftarBarangHarga.length; i++) {
            if (changeMoney - daftarBarangHarga[i][1] >= 0) {
                changeMoney = changeMoney - daftarBarangHarga[i][1]
                barang.push(daftarBarangHarga[i][0])
            }
        }
    }
    result.listPurchased = barang
    result.changeMoney = changeMoney
    return result
  }




  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja