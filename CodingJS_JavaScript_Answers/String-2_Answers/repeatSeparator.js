function repeatSeparator(word, sep, count){
  let ans = word;
  if(count>0)
  {
    for(let i=0; i<count-1; i++)
    {
      ans += sep + word;
    }
    return ans;
  }
  else return '';
}