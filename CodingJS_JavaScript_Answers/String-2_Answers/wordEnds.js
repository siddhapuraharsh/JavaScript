function wordEnds(str, word){
  let len = word.length;
  let ans = '';
  
  for(let i=0; i<=str.length-len; i++)
  {
    if(str.slice(i,i+len)===word && str!==word)
    {
      if(i==0) ans += str[i+len];
      else if(i==str.length-len) ans += str[i-1];
      else ans += str[i-1] + str[i+len];
    }
  }
  
  return ans;
}