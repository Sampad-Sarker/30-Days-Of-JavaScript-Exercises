//1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

const characterSet = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let id = ``;

const userIdGeneratedByUser = () => {
  // let numberOfCharacters = prompt('number of characters :'),
  // numberOfIds = prompt('number of ids :')

  let numberOfCharacters = 5, //take input by prompt() for dynamically
    numberOfIds = 3; //take input by prompt() for dynamically

  let ids = [];

  for (let j = 1; j <= numberOfIds; j++) {
    for (let i = 1; i <= numberOfCharacters; i++) {
      let randomIndexPosition = parseInt(Math.random() * characterSet.length);
      id += characterSet[randomIndexPosition];
    }
    ids.push(id);
    id = ``;
  }

  // return ids
  return {
    id: numberOfIds,
    characters: numberOfCharacters,
    ids: ids,
  };
};

const outputIds = userIdGeneratedByUser();

console.log(
  `${outputIds.id} ids with ${outputIds.characters} characters :\n ${outputIds.ids}`
);

//2. Write a function name rgbColorGenerator and it generates rgb colors.

const rgbColorGenerator = () => {
  const red = parseInt(Math.random() * 256);
  const green = parseInt(Math.random() * 256);
  const blue = parseInt(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

console.log(`generates a random rgb colors :\n ${rgbColorGenerator()}`);

//3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

const hexDigits = `0123456789ABCDEF`;

const arrayOfHexaColors = () => {
  let hexColorArray = [];
  let hexColor = `#`;
  // const numberOfRange = prompt(`Enter a number as a range (from zero):`)
  const numberOfRange = 5; //input should take from prompt() for dynamically

  const aRandomNumber = parseInt(Math.random() * numberOfRange);

  for (let i = 0; i <= aRandomNumber; i++) {
    for (let j = 0; j <= 5; j++) {
      let randomIndexPosition = parseInt(Math.random() * hexDigits.length);
      hexColor += hexDigits[randomIndexPosition];
    }

    hexColorArray.push(hexColor);
    hexColor = "#";
  }

  return {
    randomNumber: aRandomNumber,
    hexColors: hexColorArray,
  };
};

const outputHexColors = arrayOfHexaColors();

console.log(
  `any number (${outputHexColors.randomNumber + 1}) of hexadecimal colors :\n ${
    outputHexColors.hexColors
  }`
);

//4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

const arrayOfRgbColors = () => {
  let rgbColors = [];

  // const numberOfRange = prompt(`Enter a number as a range (from zero):`)
  const numberOfRange = 5; //input should take from prompt() for dynamically

  const aRandomNumber = parseInt(Math.random() * numberOfRange);

  for (let i = 0; i <= aRandomNumber; i++) {
    let red = parseInt(Math.random() * 256);
    let green = parseInt(Math.random() * 256);
    let blue = parseInt(Math.random() * 256);

    let rgbColor = `rgb(${red},${green},${blue})`;

    rgbColors.push(rgbColor);
  }

  return {
    number: aRandomNumber,
    rgbColors: rgbColors,
  };
};

const outputRGBColors = arrayOfRgbColors();

console.log(
  `any number (${outputRGBColors.number + 1}) of RGB colors:\n${
    outputRGBColors.rgbColors
  }`
);

//5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// let hexColorCode = prompt('Enter hex color code :')
let hexColorCode = `#f2Wd4t`; //input should take from prompt() for dynamically
let sixDigitHexColorCode = "";

const convertHexaToRgb = () => {
  if (hexColorCode[0] === "#") {
    if (hexColorCode.length === 4) {
      let wrongHexDigit = hexColorCode.match(/[g-zG-Z]/gi);
      // console.log('wrongHexDigit',wrongHexDigit);
      if (wrongHexDigit.length === null) {
        sixDigitHexColorCode += `#`;
        for (let i = 1; i < hexColorCode.length; i++) {
          sixDigitHexColorCode += hexColorCode[i];
          sixDigitHexColorCode += hexColorCode[i];
        }

        // console.log(sixDigitHexColorCode);
        let hexColorCodeUpperCase = sixDigitHexColorCode.toLocaleUpperCase();
        let red = parseInt(hexColorCodeUpperCase.slice(1, 3), 16);
        let green = parseInt(hexColorCodeUpperCase.slice(3, 5), 16);
        let blue = parseInt(hexColorCodeUpperCase.slice(5, 7), 16);

        //   console.log(red, green, blue);

        return `rgb(${red},${green},${blue})`;
      } else {
        return `wrong hex color code (where ${wrongHexDigit} not in hex digits)`;
      }
    } else if (hexColorCode.length === 7) {
      let wrongHexDigit = hexColorCode.match(/[g-zG-Z]/gi);

      if (wrongHexDigit.length === null) {
        let hexColorCodeUpperCase = hexColorCode.toLocaleUpperCase();
        // console.log(hexColorCodeUpperCase);
        let red = parseInt(hexColorCodeUpperCase.slice(1, 3), 16);
        let green = parseInt(hexColorCodeUpperCase.slice(3, 5), 16);
        let blue = parseInt(hexColorCodeUpperCase.slice(5, 7), 16);

        // console.log(red, green, blue);

        return `rgb(${red},${green},${blue})`;
      } else {
        return `wrong hex color code (where ${wrongHexDigit} not in hex digits)`;
      }
    } else {
      return `wrong hex color code, must be exact 3 digit or 6 digit in hex color code`;
    }
  } else {
    return `wrong hex color code , hex color code start with '#'`;
  }
};

console.log(`convert ${hexColorCode} to rgb color :\n${convertHexaToRgb()}`);

//6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// let rgbColor = prompt(`Enter a rgb color : e.g rgb(12,23,34)`)
let rgbColor = "rgb(39,45,99)"; //input should take from prompt() for dynamically

const convertRgbToHexa = () => {
  let decimalValues = rgbColor.match(/\d+/g);

  if (decimalValues.length === 3 && rgbColor.includes("rgb")) {
    for (const value of decimalValues) {
      if (!(value >= 0 && value <= 255)) {
        // console.log(`❌❌❌` , value);

        return `❌❌❌wrong rgb color code ${value}`;
      }
    }

    let red = Number(decimalValues[0]).toString(16);
    red = red.length === 1 ? "0" + red : red; //make two hex digits
    let green = Number(decimalValues[1]).toString(16);
    green = green.length === 1 ? "0" + green : green; //make two hex digits
    let blue = Number(decimalValues[2]).toString(16);
    blue = blue.length === 1 ? "0" + blue : blue; //make two hex digits

    let hexColor = `#${red}${green}${blue}`.toUpperCase();

    // console.log(hexColor);

    return hexColor;
  } else {
    // console.log(`wrong rgb color code`);

    return `wrong rgb color code ${rgbColor}`;
  }
};

console.log(`convert ${rgbColor} to hex color code :\n ${convertRgbToHexa()}`);

/*
7. Write a function generateColors which can generate any number of hexa or rgb colors.
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
*/

const generateColors = (colorCode, number) => {
  if (colorCode === "hexa") {
    const hexDigits = `0123456789ABCDEF`;
    let hexColorArray = [];
    let hexColor = `#`;

    for (let i = 0; i < number; i++) {
      for (let j = 0; j <= 5; j++) {
        let randomIndexPosition = parseInt(Math.random() * hexDigits.length);
        hexColor += hexDigits[randomIndexPosition];
      }

      hexColorArray.push(hexColor);
      hexColor = "#";
    }

    return hexColorArray;
  } else if (colorCode === "rgb") {
    let rgbColors = [];

    for (let i = 0; i < number; i++) {
      let red = parseInt(Math.random() * 256);
      let green = parseInt(Math.random() * 256);
      let blue = parseInt(Math.random() * 256);

      let rgbColor = `rgb(${red},${green},${blue})`;

      rgbColors.push(rgbColor);
    }

    return rgbColors;
  } else {
    return `color code is wrong`;
  }
};

console.log(`generate any number of hexa or rgb colors.`);

console.log(`generateColors('hexa', 3) :`, generateColors("hexa", 3));
console.log(`generateColors('hexa', 1) :`, generateColors("hexa", 1));
console.log(`generateColors('rgb', 3) :`, generateColors("rgb", 3));
console.log(`generateColors('rgb', 1) :`, generateColors("rgb", 1));

//8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

const shuffleArray = (arr) => {
  let randomPositions = [],
    uniqueRandomPositions = [];

  //unique Random Positions
  for (let i = 0; arr.length > uniqueRandomPositions.length; i++) {
    randomPositions.push(parseInt(Math.random() * arr.length));
    uniqueRandomPositions = [...new Set(randomPositions)];
  }
  // console.log(`uniqueRandomPositions`,uniqueRandomPositions);

  let shuffledArray = [];
  for (let i = 0; i < arr.length; i++) {
    shuffledArray[i] = arr[uniqueRandomPositions[i]];
  }
  return shuffledArray;
};

const mainArray = ["a", "b", "c", "d", "e", "f"];

console.log(`main Array :`, mainArray);
console.log(`shuffled Array :`, shuffleArray(mainArray));

//9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

const factorial = (number) => {
  let fact = 1
  if(number >= 0) {
    for (let i = number; i >= 1; i--){
      fact *= i
    }
    return fact
  } else {
    return `${number} is a negative number, so factorial is not possible`
  }

}
// let numberToBeFactorial = prompt(`Enter number to perform factorial :`) 

let numberToBeFactorial = 5 //take input by prompt() for dynamically

console.log(`factorial of ${numberToBeFactorial} is:`, factorial(numberToBeFactorial));

//10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not


const isEmpty = (value) => {
  
  if (typeof value === 'string') {
    if (value.length === 0) {
      console.log(`it is an empty string`)
    } else {
      console.log(`it is not empty string`);
    };
  } else if (Array.isArray(value)) {
    if (value.length === 0) { 
      console.log(`it is an empty array`)
    } else {
      console.log(`it is not empty array`)
    }
  } else if (typeof value === 'object') {
      if (Object.keys(value).length === 0) { 
        console.log(`it is an empty object`)
      } else {
        console.log(`it is not empty object`)
      }
  } else if (value === undefined) {
      console.log(`it is an empty variable` ) 
  } else {
    console.log(`it is not empty`)
  }    


  
}


console.log(`checks if the parameter is empty or not :`);
isEmpty()

let a = 4
isEmpty(a)

let b
isEmpty(b)

isEmpty(``)
isEmpty(`sam`)


isEmpty([])
isEmpty([7,9])

isEmpty({})
isEmpty({a:2})


//11. Call your function sum, it takes any number of arguments and it returns the sum.

const sum = (...arg) => {
  let total = 0
  
  // for (let i = 0; i < arg.length; i++) {
  //   total += arg[i]
  // }
  for (const number of arg) {
    total += number
  }

  return total
}
console.log(`takes any number of arguments and return the sum :`);
console.log(sum(1,2,3));
console.log(sum(4,7,8,2,5,9));
console.log(sum(2,-10,5,7));
console.log(sum(1,2,3,4,5,6,7,8,9));



















