/*
1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/


let age = prompt('Enter your age')

console.log(`Enter your age : ${age}`);
age >= 18 ? console.log(`You are old enough to drive`) : console.log(`You are left with ${18 - age} years to drive.`)


/*
2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
Enter your age: 30
You are 5 years older than me.
*/ 

let yourAge = prompt(`Enter your age`),
    myAge = 25

if (yourAge > myAge) {
    console.log(`Enter your age: ${yourAge}\nYou are ${yourAge - myAge} years older than me.`);
} else {
    console.log(`Enter your age: ${yourAge}\nYou are ${myAge - yourAge} years younger than me.`);
} 

/*
3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

 using if else
 ternary operator.

let a = 4
let b = 3
4 is greater than 3
*/ 

let a = 4
let b = 3

if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}

a > b ? console.log('a is greater than b') : console.log('a is less than b')

/*
4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/ 

let number = prompt(`Enter a number`)

if (number % 2 === 0) {
    console.log(`Enter a number: ${number}\n${number} is an even number`)
} else {
    console.log(`Enter a number: ${number}\n${number} is an odd number`)
}


    
