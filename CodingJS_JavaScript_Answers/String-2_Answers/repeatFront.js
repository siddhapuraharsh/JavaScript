function repeatFront(str, n){
  let tempStr = str.slice(0,n);
  let ans = tempStr;
  
  for(let i=n-1; i>0; i--)
  {
    ans += tempStr.slice(0,i);
  }
  
  return ans;
}