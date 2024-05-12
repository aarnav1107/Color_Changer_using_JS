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

