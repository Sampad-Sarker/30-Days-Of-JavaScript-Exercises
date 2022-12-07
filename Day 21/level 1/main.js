//1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name


const firstParagraph =  document.querySelector('p')

console.log('first paragraph :\n', firstParagraph);

//2. Get each of the the paragraph using document.querySelector('#id') and by their id

const firstP = document.querySelector('#first')
const secondP = document.querySelector('#second')
const thirdP = document.querySelector('#third')

console.log(`each of the the paragraph :\n`, firstP, secondP, thirdP)

//3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

const allParagraphs = document.querySelectorAll('p')

console.log(`all the paragraph :`);
for (const paragraph of allParagraphs) {
    console.log(paragraph);
}

//4. Loop through the nodeList and get the text content of each paragraph

console.log(`text content of each paragraph :`);
for (const paragraph of allParagraphs) {
    console.log(paragraph.textContent)
}

//5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
allParagraphs[3].textContent = 'Fourth Paragraph'
console.log('text content to the fourth paragraph :\n',allParagraphs[3])

//6. Set id and class attribute for all the paragraphs using different attribute setting methods

allParagraphs.forEach((paragraph,index) => {
    paragraph.id = `id-${index+1}`
    paragraph.className = `class-${index+1}`
})

console.log(`Set id and class attribute for all the paragraphs :`);
for (const paragraph of allParagraphs) {
    console.log(paragraph)
}