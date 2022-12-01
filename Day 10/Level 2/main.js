//1. Find a union b

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

let union = [...a, ...b] //join two arrays together

const unionSet = new Set(union)

console.log(`${a} union ${b} :`,unionSet);

//2. Find a intersection b

const setB = new Set(b)

const intersection = a.filter(number => setB.has(number))
const intersectionSet = new Set(intersection)

console.log(`${a} intersection ${b} :`, intersectionSet);

//3. Find a with b

const setA = new Set(a)

const difference = a.filter(number => !setB.has(number))

const findA = [...intersection, ...difference]

console.log(`Find a with b :`,findA);
// console.log(`Find a with b :`,new Set(findA));





