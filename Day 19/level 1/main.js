//1. Create a closure which has one inner function

function outerFunction() {
    let count = 0;
    function innerFunction() {
        console.log('current count of innerFunction ===',count) 
        count++
        console.log('after increment current count of innerFunction ===',count) 

        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(`%cClosure function :`,`color: green;text-decoration: underline`);
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
