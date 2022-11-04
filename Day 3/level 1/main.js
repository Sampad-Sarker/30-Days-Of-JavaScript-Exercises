// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "sam",
    lastName = "Js",
    country = "US",
    city = "NY",
    age = 33,
    isMarried = false,
    year = "2023"

console.log(`firstName :${typeof firstName} \n lastName:${typeof lastName} \n country:${typeof country} \n city:${typeof city} \n age:${typeof age} \n isMarried:${typeof isMarried} \n year:${typeof year}`);

// 2. Check if type of '10' is equal to 10
let number_ten = `10`,
    numberTen = 10

console.log(`Check the type of '10' is equal to 10\n
${number_ten === numberTen}`);

// 3. Check if parseInt('9.8') is equal to 10
console.log(`Check parseInt('9.8') is equal to 10\n
${parseInt('9.8') === 10}`);

/**
4. Boolean value is either true or false.

i. Write three JavaScript statement which provide truthy value.
ii. Write three JavaScript statement which provide falsy value. 
**/ 

let truthyValueOne = 123,
    truthyValueTwo = true,
    truthyValueThree = `Js is awesome!`

let falsyValueOne = 0,
falsyValueTwo = false,
falsyValueThree = ''

/*
5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

i. 4 > 3
ii. 4 >= 3
iii. 4 < 3
iv. 4 <= 3
v. 4 == 4
vi. 4 === 4
vii. 4 != 4
viii. 4 !== 4
ix. 4 != '4'
x. 4 == '4'
xi. 4 === '4'
xii. Find the length of python and jargon and make a falsy comparison statement.
*/ 
    
// i. 4 > 3    true
// ii. 4 >= 3   true     
// iii. 4 < 3   false
// iv. 4 <= 3   false
// v. 4 == 4    true
// vi. 4 === 4  true
// vii. 4 != 4  false
// viii. 4 !== 4    false
// ix. 4 != '4' false
// x. 4 == '4'  true
// xi. 4 === '4'    false
// xii. Find the length of python and jargon and make a falsy comparison statement.

console.log(`i. 4 > 3\n ${4 > 3}`);
console.log(`ii. 4 >= 3\n${4 >= 3}`)
console.log(`iii. 4 < 3\n${4 < 3}`);
console.log(`iv. 4 <= 3\n${4 <= 3}`);
console.log(`v. 4 == 4\n${4 == 4}`);
console.log(`vi. 4 === 4\n${4 === 4}`);
console.log(`vii. 4 != 4\n${4 != 4}`);
console.log(`viii. 4 !== 4\n${4 !== 4}`);
console.log(`ix. 4 != '4'\n${4 != '4'}`);
console.log(`x. 4 == '4'\n${4 == '4'}`);
console.log(`xi. 4 === '4'\n${4 === '4'}`);
console.log(`xii. Find the length of python and jargon and make a falsy comparison statement.\n
${`python`.length !== `jargon`.length}`
);


/*
6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
i. 4 > 3 && 10 < 12
ii. 4 > 3 && 10 > 12
iii. 4 > 3 || 10 < 12
iv. 4 > 3 || 10 > 12
v. !(4 > 3)
vi. !(4 < 3)
vii. !(false)
viii. !(4 > 3 && 10 < 12)
ix. !(4 > 3 && 10 > 12)
x. !(4 === '4')
xi. There is no 'on' in both dragon and python
*/


// i. 4 > 3 && 10 < 12    true
// ii. 4 > 3 && 10 > 12   false
// iii. 4 > 3 || 10 < 12    true
// iv. 4 > 3 || 10 > 12   true
// v. !(4 > 3)    false
// vi. !(4 < 3)   true
// vii. !(false)    true
// viii. !(4 > 3 && 10 < 12)    false
// ix. !(4 > 3 && 10 > 12)    true
// x. !(4 === '4')    true
// xi. There is no 'on' in both dragon and python   false

console.log(`
i. 4 > 3 && 10 < 12 \n${4 > 3 && 10 < 12}
ii. 4 > 3 && 10 > 12 \n${4 > 3 && 10 > 12}
iii. 4 > 3 || 10 < 12 \n${4 > 3 || 10 < 12}
iv. 4 > 3 || 10 > 12 \n${4 > 3 || 10 > 12}
v. !(4 > 3) \n${!(4 > 3)}
vi. !(4 < 3) \n${!(4 < 3)}
vii. !(false) \n${!(false)}
viii. !(4 > 3 && 10 < 12) \n${!(4 > 3 && 10 < 12)}
ix. !(4 > 3 && 10 > 12) \n${!(4 > 3 && 10 > 12)}
x. !(4 === '4') \n${!(4 === '4')}
xi. There is no 'on' in both dragon and python \n
${!(`dragon`.includes('on') && `python`.includes('on'))}

`);







    

    
