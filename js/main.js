//call backs  ---- call backs are functions that are passed as arguments to other functions

// function firstFunction(parameteres, callBack) {
//   console.log('First Function');
//   callBack();
// }

//promisses

// 3 states: pending ,fullfilled, rejected

// const myPromise = new Promise((resolve, reject) => {
//   const error = true;

//   if (!error) {
//     resolve('yes resolved the promise ');
//   } else {
//     reject('no rejected the promise');
//   }
// });

// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve('My next promised resolved');
//   }, 3000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// });

const users = fetch('https://jsonplaceholder.typicode.com/todos/1');

//pending

// console.log(users);

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((data) => {
//     for (let i = 1; i <= data.length; i++) {
//       console.log(i + ' ' + );
//     }
//   });

 