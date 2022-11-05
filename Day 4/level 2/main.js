/*
1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/ 

// let score = prompt(`Enter your score`)

// if (score >= 80 && score <= 100) {
//     console.log(`Your score : ${score}\nYour grade : A`)
// } else if(score >= 70 && score <= 89){
//     console.log(`Your score : ${score}\nYour grade : B`)
// } else if(score >= 60 && score <= 69){
//     console.log(`Your score : ${score}\nYour grade : C`)
// } else if(score >= 50 && score <= 59){
//     console.log(`Your score : ${score}\nYour grade : D`)
// } else {
//     console.log(`Your score : ${score}\nYour grade : F`)
// }

/*
2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/ 

let month = prompt(`Enter the month`)

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

if (month === 'september' || month === 'october' || month ==='november') {
    console.log(`Month : ${capitalize(month)}, the season is Autumn.`)
} else if(month === 'december' || month === 'january' || month ==='february'){
    console.log(`Month : ${capitalize(month)}, the season is Winter.`)
} else if(month === 'march' || month === 'april' || month ==='may') {
    console.log(`Month : ${capitalize(month)}, the season is Spring.`)
} else if(month === 'june' || month === 'july' || month === 'august'){
    console.log(`Month : ${capitalize(month)}, the season is Summer.`)
} else {
    console.log(`Month : ${capitalize(month)}, typo, put proper month.`)
}

/*
3. Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/ 

// let day = prompt('What is the day today?')


// function capitalize(word){
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
// }

// switch (day) {
//     case 'saturday' || 'sunday':
//         console.log(`What is the day today? ${day}\n${capitalize(day)} is a weekend.`)
//         break

//     default:
//         console.log(`What is the day today? ${day}\n${capitalize(day)} is a working day.`)
//         break
// }
