function minCat(a, b){
  
  n = Math.min(a.length,b.length);
  
  if(n==0){
    return "";
  }
  
  return a.slice(-n)+b.slice(-n);
}