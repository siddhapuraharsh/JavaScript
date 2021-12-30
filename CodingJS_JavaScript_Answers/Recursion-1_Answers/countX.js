function countX(str){
 
  let len = str.length;
  if(len==0) return 0;
  
  if(str[0]=='x') return 1+countX(str.slice(1));
  else return countX(str.slice(1));
}