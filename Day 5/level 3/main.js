/*
1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
*/ 

// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(`Sort the array :`,ages.sort())
console.log(`min age:`,ages[0],`years`)
console.log(`max age:`,ages[ages.length-1],`years`)

// Find the median age(one middle item or two middle items divided by two)
const median =  ages.length/2

let deleteIndexPosition 
if (median%2 === 0) {
    
    deleteIndexPosition = Math.floor(median-1) + 1
} else {
    
    deleteIndexPosition = Math.floor(median-1) + 2

}

console.log(median-1,deleteIndexPosition)

console.log(`median age :`,`${ages.slice(Math.floor(median-1), deleteIndexPosition)} years`)

// Find the average age(all items divided by number of items)
let totalAge = 0
ages.forEach(age => totalAge += age )

const averageAge = totalAge/ages.length
console.log(`average age :`,averageAge,`years`)








