// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     //console.log(e);
//     //console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'purple') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });


//METHOD 2/ ANOTHER WAY

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const color = e.target.id;
    body.style.backgroundColor = color;
  });
});


//PROMISES
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);

// })
// //print password also
// // .then((users) => {
// //     console.log(users);
// //     return users.password
// // })
// // .then((password) => {
// //     console.log(password);
// // })
// .catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))

//in this password is also printed

// const promiseFour = new Promise(function(resolve, reject){
//   setTimeout(function(){
//       let error = false;
//       if (!error) {
//           resolve({username: "hitesh", password: "123"});
//       } else {
//           reject('ERROR: Something went wrong');
//       }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//       console.log(user);
//       console.log(user.username);
//       console.log(user.password);
//   })
//   .catch(function(error){
//       console.log(error);
//   })
//   .finally(() => console.log("The promise is either resolved or rejected"));

// //another way to write the above code
//   // const promiseFour = new Promise(function(resolve, reject){
//   //     setTimeout(function(){
//   //         let error = false;
//   //         if (!error) {
//   //             resolve({username: "hitesh", password: "123"});
//   //         } else {
//   //             reject('ERROR: Something went wrong');
//   //         }
//   //     }, 1000);
//   // });
  
//   // promiseFour
//   //     .then((user) => {
//   //         console.log(user);
//   //         return user;
//   //     })
//   //     .then((user) => {
//   //         console.log(user.username);
//   //         return user;
//   //     })
//   //     .then((user) => {
//   //         console.log(user.password);
//   //     })
//   //     .catch(function(error){
//   //         console.log(error);
//   //     })
//   //     .finally(() => console.log("The promise is either resolved or rejected"));
  


//   const promiseFive = new Promise(function(resolve, reject){
//       setTimeout(function(){
//           let error = false
//           if (!error) {
//               resolve({username: "javascript", password: "123"})
//           } else {
//               reject("ERROR: JS went wrong")
//           }
//       }, 1000)
//   });
  
//   async function consumePromiseFive(){
//       try {
//           const response = await promiseFive
//           console.log(response);
//       } catch (error) {
//           console.log(error);
//       }
//       finally{
//           console.log("The promise is either resolved or rejected");
//       } 
//   }
  
//   consumePromiseFive()
  


//   fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
 
// return response.json();
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((error) => {
  
// console.log(error)
// })
// // async function getAllUsers(){
// //     // try {
  
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')

// //         const data = await response.json()
// //         console.log(data);
// // }
// //     } catch (error) {
// //         console.log("E: ", error);
// //     }
// // }

// // getAllUsers()
