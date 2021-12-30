function last2(str){
  sub = str.slice(-2);
  let count = 0;
  
  for(let i=0; i<str.length-2; i++){
    if(sub == str.slice(i,i+2)){
      count += 1;
    }
  }
  
  return count;
}