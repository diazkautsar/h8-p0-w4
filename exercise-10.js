function changeMe(arr) {
  // you can only write your code here!
  for (var i = 0; i < arr.length; i++) {
    console.log(`${[i + 1]}. ${arr[i][0]} ${arr[i][1]}:`)
    var obj = {}
    obj.firstName = arr[i][0]
    obj.lastName = arr[i][1]
    obj.gender = arr[i][2]
    if (arr[i][3] !== undefined) {
      var tahun = new Date().getFullYear();
      var umur = tahun - arr[i][3]
      obj.age = umur
    } else {
      obj.age = `Invalid Birth Year`
    }
    console.log(obj)
  }
  
}
  
  // TEST CASES
  changeMe([
    ['Christ', 'Evans', 'Male', 1982], 
    ['Robert', 'Downey', 'Male']
  ]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  // changeMe([]); // ""