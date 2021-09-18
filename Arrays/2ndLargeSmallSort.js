let array = new Array();

for (let index = 0; index < 10; index++) {
  array.push(Math.floor(Math.random() * (999 - 100 + 1) + 100));
}

array.sort();

for (let val of array) {
  console.log(val);
}

console.log("Second largest: " + array[array.length - 2]);
console.log("Second smallest: " + array[1]);