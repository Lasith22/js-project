// function palindrome(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed === str;
// }

// console.log(palindrome('racecar'));

function palindrome2(str) {
  return str === str.split('').reverse().join('');
}
console.log( Math.random().toString(36).slice(2, 10));
