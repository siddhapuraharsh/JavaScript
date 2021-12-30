function starOut(str){
  let ans = '';
  
  for(let i=0; i<str.length; i++)
  {
    if(str[i+1]!=='*' && str[i-1]!=='*' && str[i]!=='*') ans += str[i];
  }
  
  return ans;
}