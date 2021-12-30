function allStar(str){
  if(str.length<2) return str;
  
  return str[0]+'*'+allStar(str.slice(1));
}