function checkAB(num) {
    // you can only write your code here!
    output = "";
    hasilDepan = 0;
    hasilBelakang = 0;
    
    for (var i = 0; i < num.length; i++) {
        if (num[i] === `b`) {
            for (var j = [i]; j < num.length; j++) {
                if (num[j] === `a`) {
                    hasilDepan = [j-1] - [i]
                }
            }
            for (var k = [i]; k >= 0; k--) {
                if (num[k] === 'a') {
                    hasilBelakang = [i-1] - [k]
                }
            }
        }
    }
    if (hasilDepan === 3 || hasilBelakang === 3) {
        return true
    } else {
        return false
    }
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false