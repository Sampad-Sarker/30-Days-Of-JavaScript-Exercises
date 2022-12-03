//3. Check the speed difference among the following loops: while, for, for of, forEach

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Time for while loop");
let i =0
while (i < countries.length) {
  console.log(countries[i][0], countries[i][1]);
  i++
}
console.timeEnd("Time for while loop");



console.time("Time for regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Time for regular for loop");

console.time("Time for for of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("Time for for of loop");

console.time("Time for forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("Time for forEach loop");
