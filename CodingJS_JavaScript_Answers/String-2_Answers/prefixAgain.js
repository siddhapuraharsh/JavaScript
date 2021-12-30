function prefixAgain(str, n){
  let prefix = str.slice(0,n);
  
  for(let i=n; i<=str.length-n; i++)
  {
    if(str.slice(i,i+n)===prefix) return true;
  }
  
  return false;
}