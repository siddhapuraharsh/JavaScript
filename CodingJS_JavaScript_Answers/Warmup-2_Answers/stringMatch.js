function stringMatch(a, b){
  let count = 0;
  let len = Math.min(a.length,b.length);
  
  for(let i=0; i<len-1; i++){
    if(a.slice(i,i+2)==b.slice(i,i+2)){
      count += 1
    }
  }
  
  return count;
}