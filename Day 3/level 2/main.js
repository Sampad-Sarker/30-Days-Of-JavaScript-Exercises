/*
1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100
*/

// let base =  prompt('Enter base')
// let height =  prompt('Enter height')

let base =  20 //input should take dynamically by prompt()
let height =  10  //input should take dynamically by prompt()

let triangleArea = 0.5 * base * height

console.log(`Enter base :${base}\n
Enter height :${height}\n
The area of the triangle is ${triangleArea}`
)

/*
2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/

// let sideA = parseFloat(prompt('Enter side a :')),
//     sideB = parseFloat(prompt('Enter side b :')),
//     sideC = parseFloat(prompt('Enter side c :'))


let sideA = 5, //take input by prompt() for dynamically by prompt()
    sideB = 4, //take input by prompt() for dynamically by prompt()
    sideC = 3 //take input by prompt() for dynamically by prompt()

let trianglePerimeter = sideA + sideB + sideC;




console.log(`Enter side a: ${sideA}\n
Enter side b: ${sideB}\n
Enter side c: ${sideC}\n
The perimeter of the triangle is ${trianglePerimeter}`
);


// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let length = Number(prompt('Enter length :'))
// let width = Number(prompt('Enter width :'))

let length = 20 //take input by prompt() for dynamically by prompt()
let width =10 //take input by prompt() for dynamically by prompt()

let rectangleArea = length * width
let rectanglePerimeter = 2 * (length + width)

console.log(`Length of rectangle: ${length}\n
Width of rectangle: ${width}\n
area of rectangle : ${rectangleArea}\n
perimeter of rectangle : ${rectanglePerimeter}`);


// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let radius = Number(prompt('Enter radius'))
let radius = 10 //take input by prompt() for dynamically by prompt()

const pi = 3.14

let area = pi * radius * radius
let circumference = 2 * pi * radius

console.log(`radius of circle : ${radius}\n
area of circle : ${area}\n
circumference of circle : ${circumference}
`);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

// let x_intercept = Number(prompt('Enter x-intercept'))
// let y_intercept = Number(prompt('Enter y-intercept'))

let x_intercept = 4 //take input by prompt() for dynamically by prompt()
let y_intercept =7 //take input by prompt() for dynamically by prompt()

let slope = 2 * x_intercept - 2

console.log(`x-intercept : ${x_intercept}\n
y_intercept : ${y_intercept}\n
slope : ${slope}`)


// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1 = 2,
    y1 = 2,
    x2 = 6,
    y2 = 10


let m = (y2 - y1) / (x2 - x1)

console.log(`slope between point (2, 2) and point(6,10)\n${m}`)


// 7. Compare the slope of above two questions.

console.log(`Compare the slope : ${slope === m}`);

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// let x = Number(prompt(`value of x`))
let x = 2 //input by prompt() for dynamically by prompt()


let y = x**2 + 6*x + 9

console.log(`value of y : ${y}\n
value of x for y is 0 :  -3`)


/*
9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/ 
// let _hours = prompt(`Enter hours`)
// let perHour = prompt(`Enter rate per hour`)

let _hours = 40 ; //take input by prompt() for dynamically
let perHour = 28 //take input by prompt() for dynamically

let earning = _hours * perHour

console.log(`Enter hours : ${_hours}\n
Enter rate per hour : ${perHour}\n
Your weekly earning is ${earning}
`);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

// let myName = prompt(`Enter your name`)
let myName = 'sam' //take input by prompt() for dynamically

myName.length > 7 ? console.log(`name is long `) : console.log(`name is short`)

/**
11. Compare your first name length and your family name length and you should get this output.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh
**/


// let firstName = prompt(`Enter your first name`)
// let lastName = prompt(`Enter your last name`)

let firstName = 'Asabeneh' 
let lastName = 'Yetayeh'

firstName.length > lastName.length ? 
console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`) : 
console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)

/*
12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
I am 225 years older than you.
*/ 

let myAge = 250,
    yourAge = 25

myAge > yourAge ? console.log(`I am ${myAge} years older than you.`) : console.log(`I am ${myAge} years younger than you.`)   
    

/*
13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
Enter birth year: 1995
You are 25. You are old enough to drive
Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/ 

// let birthYear = prompt(`Enter birth year`)
let birthYear = 2000 //input should take dynamically by prompt()

let age = new Date().getFullYear() - birthYear

age >= 18 ? console.log(`You are ${age}. You are old enough to drive.`) : console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years`)

/*
14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
Enter number of years you live: 100
You lived 3153600000 seconds.
*/


// let years = Number(prompt(`Enter number of years you live`))
let years = 100 //take input by prompt() for dynamically


console.log(`Enter number of years you live: ${years}\n
you lived ${years * 365 * 24 * 60 * 60} seconds.`)


/*
15. Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/ 

let time = new Date()
let year = time.getFullYear()
let month = time.getMonth()+1
let day = time.getDate()
let hours = time.getHours()
let minutes = time.getMinutes()

console.log(`${year}-${month}-${day} ${hours}:${minutes}\n
${day}-${month}-${year} ${hours}:${minutes}\n
${day}/${month}/${year} ${hours}:${minutes}
`);