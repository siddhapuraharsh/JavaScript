function wordsCount(words, len){
  let count = 0;
  for(let i=0; i<words.length; i++){
    if(words[i].length==len){
      count += 1;
    }
  }
  return count;
}