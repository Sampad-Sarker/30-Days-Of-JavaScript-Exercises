//1. Declare a function fullName and it print out your full name.
function fullName() {
  let firstName = `Sam`,
    lastName = `Doe`,
    fullName = `${firstName} ${lastName}`;

  console.log(`Full name: ${fullName}`);
}

fullName();

//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName_(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;

  return fullName;
}
console.log(`Full name: ${fullName_(`Jason`, `Roy`)}`);

//3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

let numberOne = 5, //take input by prompt() for dynamically
  numberTwo = 7; //take input by prompt() for dynamically

console.log(
  `sum of ${numberOne} and ${numberTwo} numbers :`,
  addNumbers(numberOne, numberTwo)
);

//4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
let lengthOfRectangle = 100, //take input by prompt() for dynamically
  widthOfRectangle = 40; //take input by prompt() for dynamically

let area = areaOfRectangle(lengthOfRectangle, widthOfRectangle);

console.log(
  `An area of a rectangle [whose length ${lengthOfRectangle}  and width ${widthOfRectangle}] is :`,
  area
);

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}

let lengthOfRectangle_ = 100, //take input by prompt() for dynamically
  widthOfRectangle_ = 40; //take input by prompt() for dynamically

let perimeter = perimeterOfRectangle(lengthOfRectangle_, widthOfRectangle_);

console.log(
  `A perimeter of a rectangle [whose length ${lengthOfRectangle_}  and width ${widthOfRectangle_}] is :`,
  perimeter
);

//6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;

  return volume;
}

let rectangle_length = 100, //take input by prompt() for dynamically
  rectangle_width = 40, //take input by prompt() for dynamically
  rectangle_height = 25; //take input by prompt() for dynamically

let rectangle_volume = volumeOfRectPrism(
  rectangle_length,
  rectangle_width,
  rectangle_height
);

console.log(
  `A volume of a rectangular prism [whose length ${rectangle_length}, width ${rectangle_width} and height ${rectangle_height}] is :`,
  rectangle_volume
);

//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

let radiusOfCircle = 20; //take input by prompt() for dynamically

console.log(
  `Area of a circle [whose radius ${radiusOfCircle}] is :`,
  areaOfCircle(radiusOfCircle).toFixed(2)
);

//8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(radius) {
  return 2 * Math.PI * radius;
}

let radius_of_circle = 20; //take input by prompt() for dynamically

let circumference = circumOfCircle(radius_of_circle);

console.log(
  `Circumference of a circle [whose radius ${radius_of_circle}] is :`,
  circumference.toFixed(2)
);

//9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(mass, volume) {
  return mass / volume;
}

let massOfDensity = 100, //take input by prompt() for dynamically
  volumeOfDensity = 27; //take input by prompt() for dynamically

console.log(
  `Density of a substance [whose mass ${massOfDensity} and volume ${volumeOfDensity}] is :`,
  density(massOfDensity, volumeOfDensity).toFixed(2)
);

//10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speed(distance, time) {
  return distance / time;
}

let distanceOfMovingObject = 25000, //take input by prompt() for dynamically
  amountOfTime = 3600; //take input by prompt() for dynamically
let speedOfMovingObject = speed(distanceOfMovingObject, amountOfTime);

console.log(
  `speed of a moving object [whose distance ${distanceOfMovingObject} and time taken ${amountOfTime}] is :`,
  speed(distanceOfMovingObject, amountOfTime).toFixed(2)
);

//11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weight(mass, gravity) {
  return mass * gravity;
}

let massOfSubstance = 100, //take input by prompt() for dynamically
  gravityOfSubstance = 9.8; //take input by prompt() for dynamically

const weightOfSubstance = weight(massOfSubstance, gravityOfSubstance);

console.log(
  `Weight of a substance [whose mass ${massOfSubstance} and gravity ${gravityOfSubstance}] is :`,
  weightOfSubstance.toFixed(2)
);

//12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(temperatureInCelsius) {
  let temperatureInFahrenheit = temperatureInCelsius * (9 / 5) + 32;

  return temperatureInFahrenheit;
}

let celsius = 42; //take input by prompt() for dynamically

const fahrenheitTemperature = convertCelsiusToFahrenheit(celsius);

console.log(
  `Temperature in celsius [which is ${celsius}] is in fahrenheit : ${fahrenheitTemperature}`
);

/*
13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/

let weightOfYou = 60; //take input by prompt() for dynamically
let heightOfYou = 1.58; //take input by prompt() for dynamically

function calculateBMI(weight, height) {
  return weight / (height * height);
}

let bmi = calculateBMI(weightOfYou, heightOfYou);

if (bmi < 18.5) {
  console.log(`You are in underweight`);
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log(`You are in normal weight`);
} else if (bmi >= 24.9 && bmi <= 29.9) {
  console.log(`You are in overweight`);
} else {
  console.log(`You are in obese weight`);
}

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  if (month === `september` || month === `october` || month === `november`) {
    // console.log(`Autumn`);
    return `Autumn`;
  } else if (
    month === `december` ||
    month === `january` ||
    month === `february`
  ) {
    // console.log(`Winter`);
    return `Winter`;
  } else if (month === `march` || month === `april` || month === `may`) {
    // console.log(`Spring`);
    return `Spring`;
  } else if (month === `june` || month === `july` || month === `august`) {
    // console.log(`Summer`);
    return `Summer`;
  }
}

let monthInSession = `June`; //take input by prompt() for dynamically

console.log(
  `Season of ${monthInSession} is : ${checkSeason(
    monthInSession.toLowerCase()
  )}`
);

//15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax() {
  let numbers = [...arguments];
  numbers.sort((a, b) => a - b);
  // console.log(numbers);
  return numbers[numbers.length - 1];
}

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));
