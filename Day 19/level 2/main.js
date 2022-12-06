//2. Create a closure which has three inner functions

const outerFunction = () => {
    let count = 0;
    function plusOne() {
        console.log(`current count of function plusOne ===`,count);
        count++
        console.log(`after increment, count of function plusOne ===`,count);
        return count
    }
    function minusOne() {
        console.log(`current count of function minusOne ===`,count);
        count--
        console.log(`after decrement, count of function minusOne ===`,count);
        return count
    }
    function squareOne() {
        console.log(`current count of function squareOne ===`,count);
        count **= 2
        console.log(`after square, count of function squareOne ===`,count);
        return count
    }

    return {
        plusOne:plusOne,
        minusOne:minusOne,
        squareOne:squareOne
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne())
console.log(innerFuncs.squareOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.squareOne())

console.log(innerFuncs.minusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.squareOne())
console.log(innerFuncs.minusOne())
console.log(innerFuncs.minusOne())
console.log(innerFuncs.minusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.minusOne())
console.log(innerFuncs.minusOne())
console.log(innerFuncs.minusOne())
console.log(innerFuncs.minusOne())
console.log(innerFuncs.minusOne())
console.log(innerFuncs.minusOne())
console.log(innerFuncs.squareOne())