function xyzThere(str){
  for(let i=0; i<str.length-2; i++)
  {
    if(str.slice(i,i+3) === 'xyz')
    {
      if(str[i-1]!=='.') return true;
    }
  }
  return false;
}