//1. Display the countries array as a table

const countries_ = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.log(`Display the countries array as a table :`);
console.table(countries_);

//2. Display the countries object as a table

console.log('Display the countries object as a table :');
console.table(countries);

//3. Use console.group() to group logs

console.log(`Use console.group() to group logs :`);
console.group('Array');
console.table(countries_);
console.groupEnd();

console.group('Object');
console.table(countries);
console.groupEnd();