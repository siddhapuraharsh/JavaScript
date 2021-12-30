function shareDigit(a, b){
  let a1 = Math.floor(a/10);
  let a2 = a%10;
  let b1 = Math.floor(b/10);
  let b2 = b%10;
  
  if(a1==b1 || a1==b2) return true;
  else if(a2==b1 || a2==b2) return true;
  else return false;
}