//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

console.log(`Access both ountries.js and web_techs.js file in main.js file`);
console.log(`countries :${countries}`)
console.log(`web Techs :${webTechs}`)

/*
2. First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)

["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13

*/

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[,.]/g,'') //remove , and .
words = words.split(' ') //convert to array

console.log(`string to array :${words}` )
console.log(words);
console.log(`the number of words :${words.length}`)

/*
3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
*/ 

// add 'Meat' in the beginning of your shopping cart if it has not been already added

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(` 'Meat' in the beginning of the shopping cart : ${shoppingCart}`)


// add Sugar at the end of you shopping cart if it has not been already added

shoppingCart.push('Sugar')
console.log(`'Sugar' at the end of the shopping cart : ${shoppingCart}`)


// remove 'Honey' if you are allergic to honey

const indexOfHoney = shoppingCart.indexOf('Honey')
// console.log(indexOfHoney);
shoppingCart.splice(indexOfHoney,1)
console.log(`remove 'Honey' :${shoppingCart}`)

// modify Tea to 'Green Tea'
// shoppingCart.splice(shoppingCart.indexOf(`Tea`), 1, `Green Tea`)
// another way
shoppingCart[shoppingCart.indexOf(`Tea`)] = 'Green Tea'
console.log(`modify Tea to 'Green Tea' :${shoppingCart}`)

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

console.log(`In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list`)

if (countries.includes('Ethiopia')) {
    console.log(countries[countries.indexOf('Ethiopia')].toUpperCase())
} else {
    countries.push('Ethiopia')
}

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

console.log(`In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.`);
if (webTechs.includes('Sass')) {
    console.log(`Sass is a CSS preprocess`);    
} else {
    webTechs.push('Sass')
    console.log(`webTechs :`,webTechs)
}

/*
6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

*/ 

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
// another way
// const fullStack =[...frontEnd, ...backEnd]
console.log(`fullStack :`,fullStack)














