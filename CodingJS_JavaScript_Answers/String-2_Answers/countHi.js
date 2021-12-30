function countHi(str){
  if(str.length == 0) return 0;
  
  if(str.slice(0,2)=='hi') return 1+countHi(str.slice(1));
  else return countHi(str.slice(1));
}