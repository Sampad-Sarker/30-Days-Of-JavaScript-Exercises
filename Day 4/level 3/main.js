/*
1. Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/ 

// let month = prompt(`Enter a month`)

// const months = ['january','february','march','april','may','june','july','august','september','october','november','december']

// const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// function capitalize(word){
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
// }

// let month_lowerCase = capitalize(month).toLowerCase()
// let index = months.indexOf(month_lowerCase)

// console.log(`Enter a month: ${month}`);
// console.log(`${capitalize(month)} has ${days[index]} days`);



// 2. Write a program which tells the number of days in a month, now consider leap year.
let year =  prompt(`Enter a year` ,`Year must be grater than 1582 - the first year of Gregorian calendar `) //Year must be grater than 1582 - the first year of Gregorian calendar
let _month = prompt(`Enter a month`)

const _months = ['january','february','march','april','may','june','july','august','september','october','november','december']

const _days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function capitalize(_word){
    return _word.charAt(0).toUpperCase() + _word.slice(1).toLowerCase()
}

function isLeapYear(_year){
  if (_year % 4 === 0 ){
    if(_year % 100 === 0 && _year % 400 === 0){
      // leap years
      _days[1] = 29  //february in leap years is 29 days  
    }else {
      return 
    }
    // leap years
    _days[1] = 29  //february in leap years is 29 days
  }
}

let _month_lowerCase = capitalize(_month).toLowerCase()
let _index = _months.indexOf(_month_lowerCase)

isLeapYear(year)

console.log(`Enter a year: ${year}\nEnter a month: ${_month}`)

_index === -1 ? console.log(`typo error in month,try again`) : console.log(`${year}, ${capitalize(_month)} has ${_days[_index]} days`)