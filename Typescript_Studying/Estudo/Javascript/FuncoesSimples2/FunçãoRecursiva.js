// function countDown(number) {
//   if (number > 10) return;
//   setTimeout(() => {
//     console.log(number);
//     countDown(number + 1);
//   }, 1000);
// }
// countDown(1);

function somar(num) {
  if (num < 10) return;
  setTimeout(() => {
    console.log(` ${num}`);
    somar(num + 1);
  }, 1000);
}
somar(1);
