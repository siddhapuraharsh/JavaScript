function evenlySpaced(a, b, c){
  if(a===b && b===c) return true;
  if(a===b || b===c || a===c) return false;
  
  let diff1 = Math.abs(a-b);
  let diff2 = Math.abs(b-c);
  let diff3 = Math.abs(a-c);
  
  if(diff1===diff2) return true;
  if(diff2===diff3) return true;
  if(diff3===diff1) return true;
  
  return false;
}