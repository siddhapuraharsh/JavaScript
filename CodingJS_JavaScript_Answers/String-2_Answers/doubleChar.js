function doubleChar(str){
  let ans = '';
  for(const ch of str) ans = ans + ch.repeat(2);
  return ans;
}