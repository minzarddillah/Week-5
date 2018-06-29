// MENGGUNAKAN REGEX
function cariPelaku(str) {
  // you can only write your code here!
  return str.match(/abc/g).length
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2

// TANPA MENGGUNAKAN REGEX
// function cariPelaku(str) {
//   // you can only write your code here!
//   var generator = 0

//   for(var i = 0 ; i < str.length ; i++){
//     if(str[i] === 'a' && str[i+1] === 'b' && str[i+2] === 'c'){
//       generator++
//     }
//   }
//   return generator
// }

// // TEST CASES
// console.log(cariPelaku('mabcvabc')); // 2
// console.log(cariPelaku('abcdabdc')); // 1
// console.log(cariPelaku('bcabcac')); // 1
// console.log(cariPelaku('abcabcabc')); // 3
// console.log(cariPelaku('babcbacabc')); // 2
