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


function solveQuadEquation(a=0,b=0,c=0){
  let rootOne, rootTwo
  let D = (b*b - 4*a*c)
  if(a === 0 && b === 0 && c === 0){return 0}

  if(D > 0){
    rootOne = (-b + Math.sqrt(D))/(2*a).toFixed(2)
    rootTwo = (-b - Math.sqrt(D))/(2*a).toFixed(2)

    return [rootOne, rootTwo]
  } else if(D === 0){
    rootOne = rootTwo = (-b /2*a).toFixed(2)
    return [rootOne, rootTwo]
  } else if(D < 0){
    let realPart = (-b / 2*a).toFixed(2)
    let imaginePart = ((Math.sqrt(-D))/2*a).toFixed(2)

    rootOne = `${realPart} + ${imaginePart}i`
    rootTwo = `${realPart} - ${imaginePart}i`

    return [rootOne, rootTwo]

  } else{
    console.log(`wrong input`);
  }

}

// let value_of_a = prompt('Value of a :'),
//  value_of_b = prompt('Value of b :'),
// value_of_c = prompt('Value of b :')

let value_of_a = 1, //take input by prompt() for dynamically
value_of_b = -3, //take input by prompt() for dynamically
value_of_c = 10 //take input by prompt() for dynamically

let resultOfQuadEquation = solveQuadEquation(value_of_a, value_of_b, value_of_c)

console.log(`roots of the quadratic equation [where a = ${value_of_a}, b = ${value_of_b}, c = ${value_of_c}] are :\n${resultOfQuadEquation[0]}\n${resultOfQuadEquation[1]}` )



