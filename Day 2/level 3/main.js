// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let quote = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 


console.log(`'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.\n
${quote.match(/love/gi).length} times
${quote.match(/love/gi)}`);


// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let line_two = 'You cannot end a sentence with because because because is a conjunction'

console.log(`'You cannot end a sentence with because because because is a conjunction'\n
${line_two.match(/because/gi).length} times
${line_two.match(/because/gi)}
`);

/***
3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

**/
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'


console.log(sentence.replace(/[@%$&;#]/gi,''));


// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let amounts = text.match(/\d+/gi)
console.log("🚀 ~ file: main.js ~ line 36 ~ amounts", amounts)
let annualSalary = parseFloat(amounts[0]) * 12
let annualBonus = parseFloat(amounts[1])
let annualOnlineCourseFees = parseFloat(amounts[2]) *12
let total = 0

total = annualSalary + annualBonus + annualOnlineCourseFees


console.log(`total annual income = ${parseFloat(total)}`);
