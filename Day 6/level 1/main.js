//1. Iterate 0 to 10 using for loop, do the same using while and do while loop

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

console.log(`Iterate 0 to 10 using for loop, do the same using while and do while loop`)
console.log(`Iterate 0 to 10 using for loop`)
for (let i = 0; i <= 10; i++) {
  console.log(`${i}. ${countries[i]}`)
}

console.log(`Iterate 0 to 10 using while loop`)
let index = 0
while (index <= 10) {
  console.log(`${index}. ${countries[index]}`)
  index++
}

console.log(`Iterate 0 to 10 using do while loop`)
let i = 0
do {
    console.log(`${i}. ${countries[i]}`)
    i++
} while (i<=10)


//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
console.log(`Iterate 10 to 0 using for loop, do the same using while and do while loop`);
console.log(`Iterate 10 to 0 using for loop`)

for (let i = 10; i >= 0; i--) {
    console.log(`${i}. ${countries[i]}`)
}

console.log(`Iterate 10 to 0 using while loop`)
let arrayIndex = 10
while (arrayIndex>=0) {
  console.log(`${arrayIndex}. ${countries[arrayIndex]}`)
  arrayIndex--
}

console.log(`Iterate 10 to 0 using do while loop`)
let arrayIndexPosition = 10
do {
  console.log(`${arrayIndexPosition}. ${countries[arrayIndexPosition]}`)

  arrayIndexPosition--
} while (arrayIndexPosition)

//3. Iterate 0 to n using for loop
// it will crush your browser, so commented out
console.log(`Iterate 0 to n using for loop\nit will crush your browser, so commented out`)
// for(let i = 0; ; i++) {
//   console.log(`${i}. ${countries[i]}`)
// }

/*
4. Write a loop that makes the following pattern using console.log():
#
##
###
####
#####
######
#######
*/
console.log(`make the pattern :`);
for (let i = 1; i <= 7; i++) {
  let str = ``
  for (let j = 1; j <= i; j++) {
    str += `#`
    // console.log(`#`);
  }
  console.log(str)
}

/*
5. Use loop to print the following pattern:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

console.log(`print the pattern:`)
for (let i = 0; i <=10; i++) {
  console.log(`${i} x ${i} = ${i * i}`)
}

/*
6. Use loop to print the following pattern:
i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000
*/

console.log(`print the following pattern:`)

console.log(`i\ti^2\ti^3`);
for(let i = 0; i<=10; i++){
  console.log(`${i}\t${i ** 2}\t${i ** 3}`)
}

//7. Use for loop to iterate from 0 to 100 and print only even numbers
console.log(`print only even numbers from 0 to 100`)
for(let i = 0; i<=100; i++){
  
  if(i % 2 === 0){
    console.log(`${i}`)
  }
}

//8. Use for loop to iterate from 0 to 100 and print only odd numbers
console.log(`print only odd numbers from 0 to 100`)
for(let i = 0; i<=100; i++){
  if(i % 2 !== 0){
    console.log(`${i}`)
  }
}

//9. Use for loop to iterate from 0 to 100 and print only prime numbers
console.log(`print only prime numbers from 0 to 100`)

for(let i = 0; i<=100; i++){
  if(i === 1){continue}
  if(i === 2 || i === 3 || i === 5 || i === 7){
    console.log(`${i}`)
    continue
  }
  if(i % 2 !== 0 && i % 3 !== 0 && i % 4 !== 0 && i % 5 !== 0 && i % 6 !== 0 && i % 7 !== 0 && i % 8 !== 0 && i % 9 !== 0){
    console.log(`${i}`)
  }
}


//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumOfNumbers = 0
for(let i = 0; i<=100; i++){
  sumOfNumbers += i
}

console.log(`The sum of all numbers from 0 to 100 is ${sumOfNumbers}.`)

//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOfEvenNumbers = 0
for(let i = 0; i<=100; i++){
  if(i % 2 === 0){
    // console.log(`${i}`)
    sumOfEvenNumbers += i
  }
}
console.log(`The sum of all evens from 0 to 100 is ${sumOfEvenNumbers}.`)

let sumOfOddNumbers = 0
for(let i = 0; i<=100; i++){
  if(i % 2 !== 0){
    // console.log(`${i}`)
    sumOfOddNumbers += i
  }
}

console.log(`And the sum of all odds from 0 to 100 is ${sumOfOddNumbers}.`)

//12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

console.log(`sum of all evens ${sumOfEvenNumbers}`)
console.log(`sum of all odds ${sumOfOddNumbers}`)
evenOddArray = [sumOfEvenNumbers, sumOfOddNumbers]

console.log(`Print sum of evens and sum of odds as array`,evenOddArray)

//13. Develop a small script which generate array of 5 random numbers

// console.log(`${Math.random() * 6}`)
let randomNumberArray = []

for(let i = 0; i < 5; i++){
  randomNumberArray.push(parseInt(Math.random() * 100))
}

console.log(`array of 5 random numbers :`, randomNumberArray)

//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

let randomUniqueNumberArray = []
let unique = []

for(let i = 0; 4 >= unique.length; i++){
  randomUniqueNumberArray.push(parseInt(Math.random() * 7))

  unique = [...new Set(randomUniqueNumberArray)]

  // if(unique.length === 5){break}

  // for(let j = 0; j <= randomNumberArray.length; j++){
  //   console.log(`randomUniqueNumberArray[i] =${randomUniqueNumberArray[i]} randomUniqueNumberArray[j]=${randomUniqueNumberArray[j]}`);
    
  //   if(i === j){
  //     continue
            
  //   }else{
  //     if(randomUniqueNumberArray[i] === randomUniqueNumberArray[j]){
  //       console.log(`not unique`,randomUniqueNumberArray[i],randomUniqueNumberArray[j]);
  //       randomUniqueNumberArray.splice(i, 1)
  //     }
  //   }
  // }
}

// console.log(`unique array of 5 random numbers : ${randomUniqueNumberArray}`)
console.log(`unique array of 5 random numbers :`, unique)




