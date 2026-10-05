number = [0, 1];

function addNumberID(numberId) {
  if (numberId.length >= 0) {
    return numberId.map((id) => Math.max(id) + 1);
  }
}
console.log(addNumberID(number));
