function startWord(str, word){
  
  len = word.length;
  
  if(str.slice(1,len)==word.slice(1)){
    return str.slice(0,len);
  }
  
  else{
    return '';
  }
}