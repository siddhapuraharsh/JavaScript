function pairStar(str){
  if(str.length==0) return str;
  
  if(str[0]==str[1]) return str[0]+'*'+pairStar(str.slice(1));
  else return str[0]+pairStar(str.slice(1));
}