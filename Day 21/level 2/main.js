//1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

const allParagraphs = document.querySelectorAll("p");

for (const paragraph of allParagraphs) {
  paragraph.style.color = "hotpink";
  paragraph.style.backgroundColor = "yellow";
  paragraph.style.border = "5px solid blue";
  paragraph.style.fontSize = "5rem";
  paragraph.style.fontFamily = "Ink Free Regular";
  paragraph.style.fontWeight = 'bold'
  // paragraph.style.textAlign = 'center'
}

console.log(`%cChange style of each paragraph :\n`,'color:hotpink');
for (const paragraph of allParagraphs) {
  console.log(paragraph);
}



//2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color


allParagraphs.forEach((paragraph, index) => {
	if(index % 2 !== 0){
		paragraph.style.color = "red";
	} else if(index % 2 === 0){
		paragraph.style.color = "green";
	}
})

console.log(`%cfirst and third paragraph a color of green, and the second and the fourth paragraph a red color :`,'color:red');
for (const paragraph of allParagraphs) {
	console.log(paragraph);
}

//3. Set text content, id and class to each paragraph
allParagraphs.forEach((paragraph, index) => {
	paragraph.setAttribute('id',`id-${index+1}`)
	paragraph.setAttribute('class',`class-${index+1}`)
	paragraph.textContent = `#${index+1}. This is a paragraph number ${index+1}`


})
console.log('%cSet text content, id and class to each paragraph :','color:yellow');
for (const paragraph of allParagraphs) {
	console.log(paragraph);
}