//1. Declare an empty array

const emptyArray = []

console.log(`an empty array : ${emptyArray}`)

//2. Declare an array with more than 5 number of elements

const moreThan5 = [5,9,1,6,3,5,0,2]
console.log(`an array with more than 5 number of elements : ${moreThan5}`)

//3. Find the length of your array
console.log(`Find the length of the array : ${moreThan5.length}`);

//4. Get the first item, the middle item and the last item of the array
console.log(`first item : ${moreThan5[0]}`)
console.log(`middle item : ${moreThan5[Math.floor(moreThan5.length/2)]}`)
console.log(`last item : ${moreThan5[moreThan5.length - 1]}`)

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [
    'sam',
    007,
    true,
    [9,4,1,3,8],
    {firstName: 'John', middleName: 'Doe',  lastName: 'Étagère'},
    {skills:[`html`,`css`,`js`,`react`,`typescript`, `vue`]}
]

console.log(`length of mixedDataTypes : ${mixedDataTypes.length}`)

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

//7. Print the array using console.log()
console.log(`IT companies : ${itCompanies}`)

//8. Print the number of companies in the array
console.log(`number of companies : ${itCompanies.length}`)

//9. Print the first company, middle and last company
console.log(`first company : ${itCompanies[0]}`)
console.log(`middle : ${itCompanies[Math.floor(itCompanies.length/2)]}`);
console.log(`last company : ${itCompanies[itCompanies.length - 1]}`)

//10. Print out each company

console.log(`Print out each company:`);
itCompanies.forEach((company,index) => {
    console.log(`${index + 1}. ${company}`)
})

//11. Change each company name to uppercase one by one and print them out

console.log(`each company name to uppercase:`);
itCompanies.forEach((company,index) => {
    console.log(`${index + 1}. ${company.toUpperCase()}`);
})

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(`Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.\n\n`);
const exceptLastElement = itCompanies.slice(0, itCompanies.length - 1)

console.log(`${exceptLastElement.join(', ')} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`)

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found



// const companyName = prompt(`Put the company name`).toLowerCase()

const lowerCaseOfItCompanies = []

itCompanies.forEach(company => { lowerCaseOfItCompanies.push(company.toLowerCase()) })

if(lowerCaseOfItCompanies.includes(lowerCaseOfItCompanies)){
    console.log(`${lowerCaseOfItCompanies} company exists in the list`)
}else{
    console.log(`${lowerCaseOfItCompanies} company is not found`)
}

//14. Filter out companies which have more than one 'o' without the filter method

itCompanies.forEach((company)=>{

    let companyNameCharacters = company.split(``)
    // console.log('😃' + companyNameCharacters)
    
    let count = 0
    for (let i = 0; i < companyNameCharacters.length; i++) {
        
        // console.log(companyNameCharacters[0])
        if(companyNameCharacters[i] === 'O' || companyNameCharacters[i] === 'o'){
            ++count
        }
        // console.log(`count : ${count}`);
        if(count > 1){
            console.log(`${company} has more than one 'o', ${count} times`)
            break
        }
    }
    
})


//15. Sort the array using sort() method

const sortedCompanies = [...itCompanies]

console.log(`Sort the array\n${sortedCompanies.sort()}`)

//16. Reverse the array using reverse() method
const reverseSortedCompanies = [...itCompanies]
console.log(`Reverse the array\n${reverseSortedCompanies.sort().reverse()}`)

//17. Slice out the first 3 companies from the array
console.log(`the first 3 companies\n${itCompanies.slice(0,3)}`);
console.log(`(original list :${itCompanies})`)

//18. Slice out the last 3 companies from the array
console.log(`the last 3 companies\n${itCompanies.slice(itCompanies.length-3, itCompanies.length)}`)
console.log(`(original list :${itCompanies})`)

//19. Slice out the middle IT company or companies from the array
//middle point position identify 
const middlePoint = itCompanies.length/2
let deleteIndexPosition
if(middlePoint%2 === 0){
    deleteIndexPosition = Math.floor(middlePoint-1)+1
}else{
    deleteIndexPosition = Math.floor(middlePoint-1)+2
}
// console.log(`${Math.floor(middlePoint)} ${deleteIndexPosition}`);

console.log(`the middle IT company or companies\n${itCompanies.slice(Math.floor(middlePoint),deleteIndexPosition)}`)
console.log(`(original list :${itCompanies})`)

//20. Remove the first IT company from the array
console.log(`Remove the first IT company\n${itCompanies.splice(0,1)}`)
console.log(`(now the original list :${itCompanies})`)

//21. Remove the middle IT company or companies from the array
//middle point position identify 
const middle = (itCompanies.length/2)
let deleteItemNumber
if(middle%2 === 0){
    deleteItemNumber = 1
}else{
    deleteItemNumber = 2
}
console.log(`Remove the middle IT company or companies\n${itCompanies.splice(Math.floor(middle-1),deleteItemNumber)}`)
console.log(`(now the original list :${itCompanies})`)

//22. Remove the last IT company from the array
console.log(`Remove the last IT company\n${itCompanies.splice(itCompanies.length-1,1)}`);
console.log(`(now the original list :${itCompanies})`)

//23. Remove all IT companies
console.log(`Remove all IT companies\n${itCompanies.splice(0)}`);
console.log(`(now the original list :${itCompanies})`)





