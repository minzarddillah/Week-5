// MENGGUNAKAN REGEX
function hapusSimbol(str) {
  // you can only write your code here!
  return str.match(/[a-z0-9]/g).join('')
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100



// TANPA MENGGUNAKAN REGEX
// function hapusSimbol(str) {
//   // you can only write your code here!
//   var abjad = 'abcdefghijklmnopqrstuvwxyz'
//   var angka = '0123456789'
//   var result = ''

//   for(var i = 0 ; i < str.length ; i++){
//     for(var j = 0 ; j < abjad.length ; j++){
//       if(str[i] === abjad[j]){
//         result+=abjad[j]
//       }else if(str[i] === angka[j]){
//         result+=angka[j]
//       }
//     }
//   }
//   return result
// }

// // TEST CASES
// console.log(hapusSimbol('test%$4aa')); // test4aa
// console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
// console.log(hapusSimbol('ma@#k!an~')); // makan
// console.log(hapusSimbol('coding')); // coding
// console.log(hapusSimbol('1+3-5*2=100')); // 1352100
