function plusOut(str, word){
  let len = word.length;
  let ans = '';
  let i = 0;
  
  for(i=0; i<str.length; i++)
  {
    if(str.slice(i,i+len)===word) 
    {
      i += len-1;
      ans += word;
    }
    else ans += '+';
  }
  
  return ans;
}