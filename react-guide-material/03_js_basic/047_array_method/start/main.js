const array = [10, 20, 30, 40];
const newArray = [];

for (i = 0; i < array.length; i++) {
  newArray.push(array[i] * 2);
}

newArray2 = array.map((e) => e * 2);

console.log(newArray);
console.log(newArray2);
