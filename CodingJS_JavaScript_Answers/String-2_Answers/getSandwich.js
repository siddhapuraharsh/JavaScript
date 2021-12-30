function getSandwich(str){
  let start = 0;
  let end = 0;
  
  for(let i=0; i<=str.length-5; i++)
  {
    if(str.slice(i,i+5)==='bread') 
    {
      start = i+5;
      break;
    }
  }
  
  for(let i=str.length-5; i>=start; i--)
  {
    if(str.slice(i,i+5)==='bread') 
    {
      end = i;
      break;
    }
  }
  
  return str.slice(start,end);
}