function noTeenSum(a, b, c){
  return helper(a) + helper(b) + helper(c);
}

function helper(temp){
  if(temp===15 || temp===16) return temp;
  if(temp>=13 && temp <=19) return 0;
  return temp;
}