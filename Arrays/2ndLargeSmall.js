let array = new Array();

for (let index = 0; index < 10; index++) {
  array.push(Math.floor(Math.random() * (999 - 100 + 1) + 100));
}

for (let val of array) {
  console.log(val);
}

function finMax() {
  let first = 0;
  let second = 0;
  for (let val of array) {
    if (val > first) {
      second = first;
      first = val;
    } else if (val > second && val != first) {
      second = val;
    }
  }
  return second;
}

function finMin() {
  let first = Math.floor(Math.random() * 10000);
  let second = Math.floor(Math.random() * 10000);
  for (let val of array) {
    if (val < first) {
      second = first;
      first = val;
    } else if (val < second && val != first) {
      second = val;
    }
  }
  return second;
}

console.log("Second largest: " + finMax());
console.log("Second smallest: " + finMin());