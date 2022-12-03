//1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (str) => {
  const cleanSentence = str.replace(/[%$@&#;!]/g, ""); // remove special characters %$@&#;!
  return cleanSentence;
};

console.log("clean Sentence :\n", cleanText(sentence));

const mostFrequentWords = (sentence, numberOfWord = 3) => {
  const words = cleanText(sentence).match(/\w+/g); //separate words

  // console.log('words',words);
  const uniqueWords = [...new Set(words)]; //unique words from words
  // console.log('unique Words',uniqueWords);

  //count each word
  let allWordInfo = [];
  uniqueWords.forEach((eachUniqueWord) => {
    let eachWordInfo;
    let wordInfo = words.filter((eachWord) => eachWord === eachUniqueWord);
    eachWordInfo = { word: eachUniqueWord, count: wordInfo.length };
    allWordInfo.push(eachWordInfo);
  });

  //descending order
  allWordInfo.sort((a, b) => b.count - a.count);

  return allWordInfo.slice(0, numberOfWord);
};

console.log(
  "three most frequent words in the string :",
  mostFrequentWords(sentence)
);
