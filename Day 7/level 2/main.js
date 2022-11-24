//1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c) {
  // when x=0
  let pointOfY = (-c / b).toFixed(2);
  let pointOne = [0, pointOfY];

  // when y=0
  let pointOfX = (-c / a).toFixed(2);
  let pointTwo = [pointOfX, 0];

  return { pointOne, pointTwo };
}

// let valueOfA = prompt(`Input value of A :`),
//   valueOfB = prompt(`Input value of B :`),
//   valueOfC = prompt(`Input value of C :`)

let valueOfA = 1, //take input by prompt() for dynamically
  valueOfB = -2, //take input by prompt() for dynamically
  valueOfC = -2; //take input by prompt() for dynamically

const resultOfLinearEquation = solveLinEquation(valueOfA, valueOfB, valueOfC);

console.log(
  `two points of the linear equation [where a = ${valueOfA}, b = ${valueOfB}, c = ${valueOfC}] are:\n(x,y) = (${resultOfLinearEquation.pointOne})\n(x,y) = (${resultOfLinearEquation.pointTwo})`
);

//2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadEquation(a = 0, b = 0, c = 0) {
  let rootOne, rootTwo;
  let D = b * b - 4 * a * c;
  if (a === 0 && b === 0 && c === 0) {
    return 0;
  }

  if (D > 0) {
    rootOne = (-b + Math.sqrt(D)) / (2 * a).toFixed(2);
    rootTwo = (-b - Math.sqrt(D)) / (2 * a).toFixed(2);

    return [rootOne, rootTwo];
  } else if (D === 0) {
    rootOne = rootTwo = ((-b / 2) * a).toFixed(2);
    return [rootOne, rootTwo];
  } else if (D < 0) {
    let realPart = ((-b / 2) * a).toFixed(2);
    let imaginePart = ((Math.sqrt(-D) / 2) * a).toFixed(2);

    rootOne = `${realPart} + ${imaginePart}i`;
    rootTwo = `${realPart} - ${imaginePart}i`;

    return [rootOne, rootTwo];
  } else {
    console.log(`wrong input`);
  }
}

// let value_of_a = prompt('Value of a :'),
//  value_of_b = prompt('Value of b :'),
// value_of_c = prompt('Value of b :')

let value_of_a = 1, //take input by prompt() for dynamically
  value_of_b = -3, //take input by prompt() for dynamically
  value_of_c = 10; //take input by prompt() for dynamically

let resultOfQuadEquation = solveQuadEquation(
  value_of_a,
  value_of_b,
  value_of_c
);

console.log(
  `roots of the quadratic equation [where a = ${value_of_a}, b = ${value_of_b}, c = ${value_of_c}] are :\n${resultOfQuadEquation[0]}\n${resultOfQuadEquation[1]}`
);

//3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(array) {
  array.forEach((item, index) => {
    console.log(`${index + 1}.  ${item}`);
  });
}

const hobbies = [
  "Traveling 🧳",
  "Cycling 🚴‍♀️",
  "Photography 📷",
  "Walking 🚶‍♀️🚶‍♀️",
  "Reading 📖",
  "Coding 👩‍💻",
];
console.log(`print out each value :`);
printArray(hobbies);

/*
4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
showDateTime()
08/01/2020 04:08
*/

function showDateTime() {
  let now = new Date();

  let date = now.getDate();
  if (date < 10) {
    date = "0" + date;
  }

  let month = now.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let year = now.getFullYear();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0` + hours;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0` + minutes;
  }

  return `${date}/${month}/${year} ${hours}:${minutes}`;
}

console.log("Date and time now:\n", showDateTime());

/*
5. Declare a function name swapValues. This function swaps value of x to y.
swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
*/

function swapValues(x, y) {
  console.log(`Before swap Values :\n x => ${x}, y => ${y}`);

  let z = x;
  x = y;
  y = z;

  console.log(`After swap Values :\n x => ${x}, y => ${y}`);
}

// let x = prompt(`input of x :`),
//     y = prompt(`input of y :`)

let x = 3, //take input by prompt() for dynamically
  y = 4; //take input by prompt() for dynamically

swapValues(x, y);
swapValues(4, 5);

/*
6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
console.log(reverseArray([1, 2, 3, 4, 5]))
[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
['C', 'B', 'A']
*/

function reverseArray(arr) {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }

  console.log(reverse);
}

const numbers = [1, 2, 3, 4, 5];
const characters = ["a", "b", "c"];

console.log(`reverse the array :`);
reverseArray([1, 2, 3, 4, 5]);
reverseArray(["A", "B", "C"]);

//7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
  let capitalizedArray = [];

  for (const item of arr) {
    // console.log(item.toUpperCase());
    capitalizedArray.push(item.toUpperCase());
  }

  return capitalizedArray;
}

const fruits = [`apple`, `banana`, `orange`, `jackfruit`];

let capitalized_array = capitalizeArray(fruits);

console.log(`capitalized the array :\n`, capitalized_array);

//8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

let newAddedItemArray = [];

function addItem(item) {
  newAddedItemArray.push(item);

  return newAddedItemArray;
}

// let newItem = prompt(`Enter a new item :`)
let newItem = "aaa"; //take input by prompt() for dynamically
console.log(`after adding the item the newArray`, addItem(newItem));

newItem = "bbb"; //take input by prompt() for dynamically
console.log(`after adding the item the newArray`, addItem(newItem));

newItem = "ccc"; //take input by prompt() for dynamically
console.log(`after adding the item the newArray`, addItem(newItem));

newItem = "ddd"; //take input by prompt() for dynamically
console.log(`after adding the item the newArray`, addItem(newItem));

//9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

const sports = [
  `Basketball`,
  `Rugby`,
  `Golf`,
  `Football`,
  `Hockey`,
  `Cricket`,
  `Baseball`,
  `Boxing`,
  `Tennis`,
  `Badminton`,
  `Volleyball`,
];
console.log(`original array\n`, sports);

function removeItem(index) {
  sports.splice(index, 1);

  return sports;
}

// let indexToBeRemoved = prompt(`Index to be removed :`)
let indexToBeRemoved = 2; //take input by prompt() for dynamically
console.log(
  `after removing an item [whose index ${indexToBeRemoved}] :\n`,
  removeItem(indexToBeRemoved)
);

indexToBeRemoved = 0; //take input by prompt() for dynamically
console.log(
  `after removing an item [whose index ${indexToBeRemoved}] :\n`,
  removeItem(indexToBeRemoved)
);

indexToBeRemoved = 1; //take input by prompt() for dynamically
console.log(
  `after removing an item [whose index ${indexToBeRemoved}] :\n`,
  removeItem(indexToBeRemoved)
);

//10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

let arrayOfNumbers = [];

function sumOfNumbers(numberRange) {
  for (let i = 0; i <= numberRange; i++) {
    arrayOfNumbers.push(i);
  }
  let sum = 0;
  for (const number of arrayOfNumbers) {
    sum += number;
  }

  arrayOfNumbers = [];

  return sum;
}

// let num = prompt(`Enter a Number as a range :`)
let num = 10; //take input by prompt() for dynamically
console.log(
  `adds to all the numbers in the range 0 to ${num}\n`,
  sumOfNumbers(num)
);

num = 5; //take input by prompt() for dynamically
console.log(
  `adds to all the numbers in the range 0 to ${num}\n`,
  sumOfNumbers(num)
);

num = 25; //take input by prompt() for dynamically
console.log(
  `adds to all the numbers in the range 0 to ${num}\n`,
  sumOfNumbers(num)
);

//11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

let array_of_numbers = [];

function sumOfOdds(numberRange) {
  for (let i = 0; i <= numberRange; i++) {
    array_of_numbers.push(i);
  }

  let sum = 0;
  for (const number of array_of_numbers) {
    if (number % 2 !== 0) {
      sum += number;
    }
  }
  array_of_numbers = [];
  return sum;
}

// let number_range = prompt(`Enter a Number as a range :`)
let number_range = 10; //take input by prompt() for dynamically
console.log(
  `adds to all the odd numbers in the range 0 to ${number_range}\n`,
  sumOfOdds(number_range)
);

number_range = 7; //take input by prompt() for dynamically
console.log(
  `adds to all the odd numbers in the range 0 to ${number_range}\n`,
  sumOfOdds(number_range)
);

number_range = 9; //take input by prompt() for dynamically
console.log(
  `adds to all the odd numbers in the range 0 to ${number_range}\n`,
  sumOfOdds(number_range)
);

//12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

let allNumbers = [];

function sumOfEven(numberRange) {
  for (let i = 0; i <= numberRange; i++) {
    allNumbers.push(i);
  }

  let sum = 0;
  for (const number of allNumbers) {
    if (number % 2 === 0) {
      sum += number;
    }
  }
  allNumbers = [];
  return sum;
}

// let number_Range = prompt(`Enter a Number as a range :`)
let number_Range = 10; //take input by prompt() for dynamically
console.log(
  `adds to all the even numbers in the range 0 to ${number_Range}\n`,
  sumOfEven(number_Range)
);

number_Range = 7; //take input by prompt() for dynamically
console.log(
  `adds to all the even numbers in the range 0 to ${number_Range}\n`,
  sumOfEven(number_Range)
);

number_Range = 33; //take input by prompt() for dynamically
console.log(
  `adds to all the even numbers in the range 0 to ${number_Range}\n`,
  sumOfEven(number_Range)
);

//13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

let evenAndOddNumbers = [];

function evensAndOdds(numberRange) {
  for (let i = 0; i <= numberRange; i++) {
    evenAndOddNumbers.push(i);
  }
  let evenCount = 0,
    oddCount = 0;
  for (const number of evenAndOddNumbers) {
    if (number % 2 === 0) ++evenCount;
    if (number % 2 !== 0) ++oddCount;
  }

  evenAndOddNumbers = [];

  return [oddCount, evenCount];
}

// let num_ = prompt(`Enter a Number as a range :`)
let num_ = 10; //take input by prompt() for dynamically
let resultOfEvensAndOdds = evensAndOdds(num_);

console.log(
  `number of evens and odds in the range 0 to ${num_} :\n The number of odds are ${resultOfEvensAndOdds[0]}\n The number of evens are ${resultOfEvensAndOdds[1]}`
);

num_ = 100; //take input by prompt() for dynamically
resultOfEvensAndOdds = evensAndOdds(num_);

console.log(
  `number of evens and odds in the range 0 to ${num_} :\n The number of odds are ${resultOfEvensAndOdds[0]}\n The number of evens are ${resultOfEvensAndOdds[1]}`
);

//14. Write a function which takes any number of arguments and return the sum of the arguments

function sum() {
  let sum = 0;
  for (const number of arguments) {
    sum += number;
  }
  return sum;
}

console.log(
  `takes any number of arguments and return the sum of the arguments :`,
  sum(1, 2, 3)
);

console.log(
  `takes any number of arguments and return the sum of the arguments :`,
  sum(1, 2, 3, 4)
);

//15. Writ a function which generates a randomUserIp.
function randomUserIp() {
  let firstOctet = parseInt(Math.random() * 256);
  let secondOctet = parseInt(Math.random() * 256);
  let thirdOctet = parseInt(Math.random() * 256);
  let fourthOctet = parseInt(Math.random() * 256);

  return `${firstOctet}.${secondOctet}.${thirdOctet}.${fourthOctet}`;
}

console.log(`✅ a random User Ip address:\n ${randomUserIp()}`);

//16. Write a function which generates a randomMacAddress

function randomMacAddress() {
  const hexadecimalNumbers = "0123456789ABCDEF";
  let macAddress = ``;
  for (let j = 1; j <= 6; j++) {
    for (let i = 1; i <= 2; i++) {
      let randomIndexPosition = parseInt(
        Math.random() * hexadecimalNumbers.length
      );
      macAddress += hexadecimalNumbers[randomIndexPosition];
    }

    if (j !== 6) {
      macAddress += `-`;
    }
  }

  return macAddress;
}

console.log(`a random Mac Address:\n`, randomMacAddress());

//17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

const hexDigits = "0123456789abcdef";
let hex = `#`;

function randomHexaNumberGenerator() {
  for (let i = 1; i <= 6; i++) {
    let randomIndexPosition = parseInt(Math.random() * hexDigits.length);
    hex += hexDigits[randomIndexPosition];
  }

  return hex;
}

console.log(`a random hexadecimal number:\n`, randomHexaNumberGenerator());


//18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

const characterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJHIJKLMNOPQRSTUVWXYZ0123456789"
let id = ``
function userIdGenerator() {

  for (let i = 0; i <= 6; i++){
    let randomIndexPosition = parseInt(Math.random() * characterSet.length)
    id += characterSet[randomIndexPosition]
  }

  return id
}

console.log(`generates seven character id:\n`, userIdGenerator());


