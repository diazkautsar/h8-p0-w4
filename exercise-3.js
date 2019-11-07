function cariMedian(arr) {
    // you can only write your code here!
    output = 0
    pembagi = arr.length/2

    if (arr.length % 2 !== 0) {
      output = arr[Math.floor(pembagi)]
    } else {
      output = (arr[pembagi] + arr[pembagi -1]) / 2
    }
    return output
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 6, 7, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5