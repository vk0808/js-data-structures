let start = 0;
let end = 100;

let pos = 0;
let twice = new Array();

for (let index = start; index <= end; index++) {
  if (index == 0) {
    continue;
  }
  if (index % 11 == 0) {
    twice.push(index);
  }
}

for (let val of twice) {
  console.log(val);
}