//1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const str = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`

const salaries = str.match(/\d+/g)

// console.log(salaries);

const totalAnnualIncome = (Number(salaries[0]) * 12) + Number(salaries[1])  + (Number(salaries[2]) * 12)

console.log(`total Annual Income :` ,totalAnnualIncome);


//2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const statement = "The position of some particles on the horizontal x-axis -1,2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction."

const points = statement.match(/-?\d+/g).map(number =>Number(number))


console.log(`points =`,points);
console.log(`sortedPoints =`,points.sort((a,b)=>a-b));


const heightPoint = Math.max(...points)
const lowestPoint = Math.min(...points)

const positiveDistance = heightPoint - 0
const negativeDistance = 0 - lowestPoint

console.log(`distance between the two furthest particles :`,positiveDistance+negativeDistance);

//3. Write a pattern which identify if a string is a valid JavaScript variable

const is_valid_variable = (variableName) => {
    let incorrectVarNames = variableName.match(/(^[0-9])|(^[!@#%^&*-])|([!@#%^&*-])/g)

    if (incorrectVarNames === null) return `${variableName} is a valid variable name :true`
    else return `${variableName} is not a valid variable name :false`
}


// let aVariableName = prompt(`enter a var name :`)
let aVariableName = `2numbers`
console.log(is_valid_variable(aVariableName));
aVariableName = `$income`
console.log(is_valid_variable(aVariableName));
aVariableName = `_aPrivateProperty`
console.log(is_valid_variable(aVariableName));
aVariableName = `@address`
console.log(is_valid_variable(aVariableName));

aVariableName = `first_name`
console.log(is_valid_variable(aVariableName));
aVariableName = `first-name`
console.log(is_valid_variable(aVariableName));
aVariableName = `1first_name`
console.log(is_valid_variable(aVariableName));
aVariableName = `firstname`
console.log(is_valid_variable(aVariableName));