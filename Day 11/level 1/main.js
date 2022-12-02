//1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const constants = [2.72, 3.14, 9.81, 37, 100]

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

console.log(`e = ${e}, pi = ${pi}, gravity = ${gravity}, humanBodyTemp = ${humanBodyTemp}, waterBoilingTemp = ${waterBoilingTemp}`);

//2. Destructure and assign the elements of countries array to fin, est, sw, den, nor

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const [fin, est, sw, den, nor] = countries

console.log(`fin = ${fin}, est = ${est}, sw = ${sw}, den = ${den}, nor = ${nor}`);

//3. Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

const {width, height, area, perimeter} = rectangle

console.log(`width = ${width}, height = ${height}, area = ${area}, perimeter = ${perimeter}`);




