//1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

/*
\b = for word bound
\w = word character 
\w+ = means one or more word character 

*/

const tenMostFrequentWords = (paragraph, numberOfWord = paragraph.length) => {
    //   const words = paragraph.match(/(\w+)/g).map(word => word.toLowerCase());
    const words = paragraph.match(/(\w+)/g)

//   console.log("words", words);

  const uniqueWords = [...new Set(words)];

//   console.log("unique Words", uniqueWords);

  let wordInfos = [];
  for (const word of uniqueWords) {
    let everyWord = words.filter((eachWord) => eachWord === word);
    let eachWordInfo = { word: word, count: everyWord.length };
    wordInfos.push(eachWordInfo);
  }

  //descending order sorting
  wordInfos.sort((a, b) => b.count - a.count);

  // console.log(wordInfos);
  return wordInfos.slice(0, numberOfWord);
};

console.log('Most Frequent Words',tenMostFrequentWords(paragraph));

console.log('ten Most Frequent Words',tenMostFrequentWords(paragraph,10));

